package com.excel.emp.dto;

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
public class TicketDto {

private Integer ticketid;

	private Integer eventid;
	private Double price;
	private Integer userid;
	
//	private String tickettype;
	
//	private Integer quantityAvailable;
}
