package com.excel.emp.exceptionhandler;

import org.springframework.http.HttpStatus;



import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.excel.emp.exception.EventException;
import com.excel.emp.exception.TicketException;
import com.excel.emp.exception.OrganizerException;
import com.excel.emp.response.CommonResponse;

@RestControllerAdvice
public class OrganizerExceptionHandler {
	@ExceptionHandler(OrganizerException.class)
	public ResponseEntity<CommonResponse<String>> organizerMessage(RuntimeException exe) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(CommonResponse.<String>builder().data(null).isError(true).message(exe.getMessage()).build());
	}

	@ExceptionHandler(EventException.class)
	public ResponseEntity<CommonResponse<String>> eventMessage(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null).isError(true).message(exe.getMessage()).build());	
				}
	
	@ExceptionHandler(TicketException.class)
	public ResponseEntity<CommonResponse<String>> tickettMessage(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null).isError(true).message(exe.getMessage()).build());	
				}
}