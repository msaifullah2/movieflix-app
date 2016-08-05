package io.egen.api.repository;

import java.util.List;

import io.egen.api.entity.MovieInfo;

public interface MovieInfoRepository {

public List<MovieInfo> findAll();
	
	public MovieInfo findOne(String id);
	
	public MovieInfo findByTitle(String Title);
	
	public MovieInfo create(MovieInfo movieInfo);
	
	public MovieInfo update(MovieInfo movieInfo);
	
	public void delete(MovieInfo movieInfo);


}
