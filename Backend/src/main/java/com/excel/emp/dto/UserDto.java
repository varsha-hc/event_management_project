package com.excel.emp.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

	private Integer userid;
	
	private Boolean isOrganizer;
	private String name;
	private LocalDate dob;
	private Long mobileno;
	private String email;
	private String password;
}
