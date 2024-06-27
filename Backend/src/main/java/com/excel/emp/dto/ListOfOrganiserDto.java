package com.excel.emp.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class ListOfOrganiserDto {
	private Integer eventid;
	List<OrganizerDto> organizer;
	
}
