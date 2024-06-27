package com.excel.emp.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.emp.exception.EventException;
import com.excel.emp.entity.Ticket;
import com.excel.emp.exception.TicketException;
import com.excel.emp.dto.EventDto;
import com.excel.emp.dto.TicketDto;
import com.excel.emp.entity.Event;
import com.excel.emp.utility.OrganizerUtils;
import com.excel.emp.repository.EventRepository;
import com.excel.emp.repository.TicketRepository;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	private EventRepository eventRepository;
	
	@Autowired
	private TicketRepository ticketRepository;

	@Override
	public Integer updateTicket(TicketDto dto) {
		Optional<Ticket> option = ticketRepository.findById(dto.getTicketid());
		if (option.isPresent()) {
			Ticket ticket = option.get();
			ticket.setPrice(dto.getPrice());
	
			ticketRepository.save(ticket);
			return dto.getTicketid();
		}
		else {
			throw new TicketException("Ticket not exist");
		}
	
	}

	@Override
	public EventDto updateEvent(EventDto dto) {
		Optional<Event> option = eventRepository.findByEventid(dto.getEventid());
		if (option.isPresent()) {
			Event event = option.get();
			event.setDescription(dto.getDescription());
			event.setImage(dto.getImage());
			event.setTitle(dto.getTitle());
			event.setEventid(dto.getEventid());
			event.setStartDate(dto.getStartDate());
			event.setEndDate(dto.getEndDate());
			event.setLocation(dto.getLocation());
			eventRepository.save(event);
			return EventDto.builder().eventid(event.getEventid()).title(event.getTitle())
					.description(event.getDescription()).startDate(event.getStartDate()).endDate(event.getEndDate())
					.image(event.getImage()).location(event.getLocation()).build();
		}
		throw new EventException("Event not exist");
	}

	@Override
	public List<EventDto> getLocation(String location) {
		List<Event> events = eventRepository.findAllByLocation(location);
		if (!events.isEmpty()) {
			return events.stream().map(e -> OrganizerUtils.EntityToEventDto(e)).toList();
		}
		throw new EventException("no event found " +location);
	}

	@Override
	public EventDto getEventId(EventDto eventid) {
		Optional<Event> optional = eventRepository.findByEventid(eventid.getEventid());
		if(optional.isPresent()) {
			Event event = optional.get();
			return EventDto.builder()
					.eventid(event.getEventid())
					.description(event.getDescription())
					.endDate(event.getEndDate())
					.location(event.getLocation())
					.image(event.getImage())
					.title(event.getTitle())
					.startDate(event.getStartDate())
					.build();
		}
		return null;
	}

	@Override
	public TicketDto getTicketId(TicketDto ticketid) {
		Optional<Ticket> optional= ticketRepository.findById(ticketid.getTicketid());
		if(optional.isPresent()) {
		Ticket ticket= optional.get();
		return TicketDto.builder()
				.ticketid(ticket.getTicketid())
				.eventid(ticket.getTicketid())
				.price(ticket.getPrice())
			
				
				.build();
		}
		return null;
	}

	public void deleteEvent(EventDto dto) {
		Optional<Event> optional = eventRepository.findByEventid(dto.getEventid());
		if(optional.isPresent()) {
	     
		eventRepository.delete(optional.get());
	}
		else {
			throw new EventException("Event not found");
		}

	}

	@Override
	public TicketDto deleteTicket(TicketDto dto) {
    Optional<Ticket> optional =ticketRepository.findByTicketid(dto.getTicketid());	
   if(optional.isPresent()) {
	ticketRepository.delete(optional.get());
	return null;
 }
    throw new TicketException("Ticket not found");
}

	@Override
	public List<EventDto> getAllEvents() {
		List<EventDto> collect = eventRepository.findAll().stream()
		.map(OrganizerUtils::EntityToEventDto)
		.collect(Collectors.toList());
		return collect;
	}

	@Override
	public List<EventDto> getAllEvents(String eventType) {
		List<Event> types = eventRepository.findAllByEventType(eventType);
		if(!types.isEmpty()) {
			return types.stream().map(e ->OrganizerUtils.EntityToEventDto(e)).toList();
		}
		throw new EventException("No EventType is found" +eventType);
	}
	
//	@Override
//	public List<EventDto> getLocation(String location) {
//		List<Event> events = eventRepository.findAllByLocation(location);
//		if (!events.isEmpty()) {
//			return events.stream().map(e -> OrganizerUtils.EntityToEventDto(e)).toList();
//		}
//		throw new EventException("no event found " +location);
//	}
	
}

