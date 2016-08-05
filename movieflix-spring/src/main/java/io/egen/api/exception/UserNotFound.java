package io.egen.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND, reason="User not Found")
public class UserNotFound extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
   public UserNotFound(String message){
	   super(message);
   }
   
   public UserNotFound(String message,Throwable cause){
	   super(message,cause);
   }

}
