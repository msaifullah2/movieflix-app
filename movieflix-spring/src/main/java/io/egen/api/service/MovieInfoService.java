package io.egen.api.service;

import java.util.List;

import io.egen.api.entity.MovieInfo;;

public interface MovieInfoService {
	
	public List<MovieInfo> findAll();
		
	public MovieInfo findOne(String id);
	
	public MovieInfo create(MovieInfo movieinfo);
	
	public MovieInfo update(String id, MovieInfo movieinfo);
	
	public void delete(String id);

}
