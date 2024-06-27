package com.excel.emp.service;

import java.util.List;
import com.excel.emp.dto.EventDto;
import com.excel.emp.dto.TicketDto;

public interface EventService {

	Integer updateTicket(TicketDto dto);

	EventDto updateEvent(EventDto dto);

	List<EventDto> getLocation(String location);

	EventDto getEventId(EventDto eventid);

	TicketDto getTicketId(TicketDto ticketid);

	void deleteEvent(EventDto dto);

	TicketDto deleteTicket(TicketDto dto);

	List<EventDto> getAllEvents();

	List<EventDto> getAllEvents(String eventType);

	

}
