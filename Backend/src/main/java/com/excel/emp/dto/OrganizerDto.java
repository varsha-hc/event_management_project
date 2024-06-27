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
public class OrganizerDto {

	private Integer organizerid;
	private Boolean isOrganizer;
	private String name;
	private LocalDate dob;
	private String mobileno;
	private String email;
	private String password;
	
}
