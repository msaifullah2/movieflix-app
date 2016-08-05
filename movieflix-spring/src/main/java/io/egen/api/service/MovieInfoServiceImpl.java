package io.egen.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.egen.api.entity.MovieInfo;
import io.egen.api.exception.UserAlreadyExistingException;
import io.egen.api.exception.UserNotFound;
import io.egen.api.repository.MovieInfoRepository;

@Service
@Transactional
public class MovieInfoServiceImpl implements MovieInfoService {

	@Autowired
	private MovieInfoRepository movierepository;
	
	@Override
	public List<MovieInfo> findAll() {
		return movierepository.findAll();
	}

	@Override
	public MovieInfo findOne(String id) {
		MovieInfo existingmovie = movierepository.findOne(id);
		if(existingmovie==null){
			throw new UserNotFound("Movie with id= "+ id + "not found.");
		}
		
		return existingmovie;
	}

	@Override
	public MovieInfo create(MovieInfo movieInfo) {
		MovieInfo existingmovie = movierepository.findByTitle(movieInfo.getTitle());
		if (existingmovie != null) {
			throw new UserAlreadyExistingException("Movie with the title already exists");
		}
		return movierepository.create(movieInfo);
	}

	

	@Override
	public MovieInfo update(String id, MovieInfo movieInfo) {
		MovieInfo existingmovie = movierepository.findOne(id);
		if(existingmovie==null){
			throw new UserNotFound("Movie with id= "+ id + "not found.");
		}
		
		return movierepository.update(movieInfo);
	}

	@Override
	public void delete(String id) {
		MovieInfo existingmovie = movierepository.findOne(id);
		if(existingmovie==null){
			throw new UserNotFound("Movie with id= "+ id + "not found.");
		}
		
	    movierepository.delete(existingmovie);
		
	}

}
