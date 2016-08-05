package io.egen.api.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.egen.api.entity.User;
import io.egen.api.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService service;
	
	@RequestMapping(method=RequestMethod.GET,produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<User> findAll(){
		return service.findAll();
	}
	@RequestMapping(method=RequestMethod.GET,value="/{id}",produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	public User findOne(@PathVariable("id") String userid){
		return service.findOne(userid);
	}
	
	@RequestMapping(method=RequestMethod.POST,produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE,consumes=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	public User create(@RequestBody User user){
		
		return service.create(user);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/{id}",produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE,consumes=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	public User update(@PathVariable("id") String userid,@RequestBody User user){
		return service.update(userid,user);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/{id}")
	public void delete(@PathVariable("id") String userid){
		service.delete(userid);
	}
	
}
