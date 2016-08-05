package io.egen.api.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import io.egen.api.entity.MovieInfo;

@Repository
public class MovieInfoRepositoryImpl implements MovieInfoRepository{

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<MovieInfo> findAll() {
		TypedQuery<MovieInfo> query = em.createQuery("from MovieInfo", MovieInfo.class);		
		
		return query.getResultList();
	}

	@Override
	public MovieInfo findOne(String id) {
		
		return em.find(MovieInfo.class, id);
	}

	@Override
	public MovieInfo create(MovieInfo movieInfo) {
		em.persist(movieInfo);
		return movieInfo;
	}

	@Override
	public MovieInfo update(MovieInfo movieInfo) {
		return em.merge(movieInfo);
	}

	@Override
	public void delete(MovieInfo movieInfo) {
		em.remove(movieInfo);
	}

	@Override
	public MovieInfo findByTitle(String title) {
		TypedQuery<MovieInfo> query = em.createNamedQuery("MovieInfo.findByTitle", MovieInfo.class);	
		query.setParameter("pTitle", title);
		List<MovieInfo> movieInfos = query.getResultList();
		if(movieInfos != null && movieInfos.size()==1){
			return movieInfos.get(0);
		}
		
		else{
			return null;
		}
		
	}

}
