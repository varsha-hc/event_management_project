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
public class EventDto {

    private Integer eventid;
	private String title;
	private String image;
	private String description;
	private LocalDate startDate;
	private LocalDate endDate;
	private String location;
	private String eventType;
}
