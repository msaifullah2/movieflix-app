package io.egen.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.egen.api.entity.User;
import io.egen.api.exception.UserAlreadyExistingException;
import io.egen.api.exception.UserNotFound;
import io.egen.api.repository.UserRepository;


@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;
	@Override
	public List<User> findAll() {
		return repository.findAll();
	}

	@Override
	public User findOne(String id) {
		User existing = repository.findOne(id);
		if(existing==null){
			throw new UserNotFound("User with id= "+ id + "not found.");
		}
		
		return existing;
	}

	@Override
	public User create(User user) {
		User existing = repository.findByUsername(user.getUsername());
		if (existing != null) {
			throw new UserAlreadyExistingException("User with email already exists");
		}
		return repository.create(user);
	}

	

	@Override
	public User update(String id, User user) {
		User existing = repository.findOne(id);
		if(existing==null){
			throw new UserNotFound("User with id= "+ id + "not found.");
		}
		
		return repository.update(user);
	}

	@Override
	public void delete(String id) {
		User existing = repository.findOne(id);
		if(existing==null){
			throw new UserNotFound("User with id= "+ id + "not found.");
		}
		
	    repository.delete(existing);
		
	}

}
