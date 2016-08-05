package io.egen.api.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.egen.api.entity.MovieInfo;
import io.egen.api.service.MovieInfoService;


@RestController
@RequestMapping("/movieinfo")
public class MovieInfoController{
    
	@Autowired
	private MovieInfoService service;
	
	@RequestMapping(method=RequestMethod.GET,produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<MovieInfo> findAll(){
		return service.findAll();
	}
	@RequestMapping(method=RequestMethod.GET,value="/{id}",produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	public MovieInfo findOne(@PathVariable("id") String movieid){
		return service.findOne(movieid);
	}
	
	@RequestMapping(method=RequestMethod.POST,produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE,consumes=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	public MovieInfo create(@RequestBody MovieInfo movieinfo){
		
		return service.create(movieinfo);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/{id}",produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE,consumes=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	public MovieInfo update(@PathVariable("id") String movieid,@RequestBody MovieInfo movieInfo){
		return service.update(movieid,movieInfo);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/{id}")
	public void delete(@PathVariable("id") String movieid){
		service.delete(movieid);
	}
	
}
