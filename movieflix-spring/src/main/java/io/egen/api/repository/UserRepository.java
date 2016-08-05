package io.egen.api.repository;

import java.util.List;

import io.egen.api.entity.User;

public interface UserRepository {
	
	public List<User> findAll();
	
	public User findOne(String id);
	
	public User findByUsername(String email);
	
	public User create(User user);
	
	public User update(User user);
	
	public void delete(User user);

}
