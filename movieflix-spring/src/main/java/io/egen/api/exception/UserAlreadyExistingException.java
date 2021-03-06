package io.egen.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.BAD_REQUEST, reason="User already exists")
public class UserAlreadyExistingException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	
	   public UserAlreadyExistingException(String message){
		   super(message);
	   }
	   
	   public UserAlreadyExistingException(String message,Throwable cause){
		   super(message,cause);
	   }

}
