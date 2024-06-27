package com.excel.emp.service;


import java.util.List;
import com.excel.emp.dto.EventListDto;
import com.excel.emp.dto.OrganizerDto;
import com.excel.emp.dto.TicketListDto;
import com.excel.emp.dto.UserDto;

public interface OrganizerService {

	OrganizerDto saveOrganizer(OrganizerDto dto);

	List<OrganizerDto> getOrganizer();

	OrganizerDto getByEmailId(String email);

	OrganizerDto getByName(String name);

	String updateOrganiser(OrganizerDto dto);

	String updatePassword(OrganizerDto dto);

	void deleteOrganizer(OrganizerDto dto);

	Integer saveTickets(TicketListDto dto);

	Integer saveEvents(EventListDto dto);

	Integer saveUser(UserDto dto);

	UserDto userLogin(UserDto dto);

	OrganizerDto organizerLogin(OrganizerDto dto);

}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

//	Integer saveOrganizer(OrganizerDto dto);
//
//	//Integer saveOrganizer(com.excel.emp.dto.OrganizerDto dto);
//
//	Integer saveUser(UserDto dto);
////
//	Integer saveTickets(TicketListDto dto);
////
//	Integer saveEvents(EventListDto dto);
////
////	Integer saveTickets(com.excel.emp.dto.TicketListDto dto);
////
////	Integer saveEvents(com.excel.emp.dto.EventListDto dto);
//
//	Boolean loginUser(UserDto dto);
//
//	Boolean loginOrganizer(OrganizerDto dto);


