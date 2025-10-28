package com.easyway.employeemanagement.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<Map<String,String>> handleNotFound(ResourceNotFoundException ex){
		
		 Map<String, String> error = new HashMap<>();
		  error.put("error", ex.getMessage());
		return new ResponseEntity<Map<String,String>>(error,HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Map<String,String>> handleValidation(MethodArgumentNotValidException ex){
		
		Map<String, String> error = new HashMap<>();
		 
		ex.getBindingResult().getFieldErrors().forEach(er-> error.put(er.getField(),er.getDefaultMessage()));
		
		return new ResponseEntity<Map<String,String>>(error,HttpStatus.NOT_FOUND);
	}
	
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<Map<String,String>> handleGeneric(Exception ex){
		
		Map<String,String> error = new HashMap<>();
		 
		error.put("error",ex.getMessage());
		
		return new ResponseEntity<Map<String,String>>(error,HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	
	
	
	
}
