package com.excel.emp.utility;

import java.util.List;
import java.util.stream.Collectors;
import com.excel.emp.dto.EventDto;
import com.excel.emp.dto.OrganizerDto;
import com.excel.emp.dto.TicketDto;
import com.excel.emp.dto.UserDto;
import com.excel.emp.entity.Event;
import com.excel.emp.entity.Organizer;
import com.excel.emp.entity.Ticket;
import com.excel.emp.entity.User;

public class OrganizerUtils {

	public static Organizer dtoToOrganizerEntity(OrganizerDto dto) {
		return Organizer.builder().isOrganizer(dto.getIsOrganizer())
				.name(dto.getName())
				.dob(dto.getDob()).mobileno(dto.getMobileno())
				.email(dto.getEmail()).password(dto.getPassword())
				.build();	
	}
	

	public static OrganizerDto organizerEntityToDto(Organizer dto) {
		return OrganizerDto.builder().isOrganizer(dto.getIsOrganizer())
				.name(dto.getName())
				.dob(dto.getDob()).mobileno(dto.getMobileno())
				.email(dto.getEmail()).password(dto.getPassword())
				.build();	
	}

public static TicketDto EntityToTicketDto1(Ticket entity) {
	return TicketDto.builder()
			.ticketid(entity.getTicketid())	
			
			.price(entity.getPrice())
			
			.build();
}

public static List<Ticket> dtoToTicketEntity(List<TicketDto> dto, Integer userid) {
    return dto.stream().map(tic -> Ticket.builder()
            .price(tic.getPrice())
            .user(User.builder().userid(userid).build()) // Include user with userid
            .build())
            .collect(Collectors.toList());
}



public static List<Event> dtoToEventEntity(List<EventDto> dto) {
return dto.stream().map(e ->Event.builder().eventid(e.getEventid())
				.location(e.getLocation())
				.description(e.getDescription())
				.title(e.getTitle())
				.startDate(e.getStartDate())
				.endDate(e.getEndDate())
				.image(e.getImage())
				.build()).collect(Collectors.toList());
}

public static Event dtoToEventEntity(EventDto event) {
return Event.builder()
		.title(event.getTitle())
		.image(event.getImage())
		.description(event.getDescription())
		.startDate(event.getStartDate())
		.endDate(event.getEndDate())
		.location(event.getLocation())
		.eventType(event.getEventType())
		.build();
}
	public static User dtoToUserEntity(UserDto dto) {
	return User.builder().isOrganizer(dto.getIsOrganizer()).dob(dto.getDob())
			.email(dto.getEmail()).mobileno(dto.getMobileno())
			.name(dto.getName()).password(dto.getPassword()).build();
}	
	public static EventDto EntityToEventDto(Event entity) {
		return EventDto.builder()
				.eventid(entity.getEventid())
				.title(entity.getTitle())
				.image(entity.getImage())
				.description(entity.getDescription())
				.startDate(entity.getStartDate())
				.endDate(entity.getEndDate())
				.location(entity.getLocation()).build();
	}

	public static List<OrganizerDto> EntityToDto(List<Organizer> dto) {
		return dto.stream().map(e -> OrganizerDto.builder()
        		.isOrganizer(e.getIsOrganizer())
        		.name(e.getName())
        		.dob(e.getDob())
        		.email(e.getEmail())
        		.mobileno(e.getMobileno())
        		.build()).toList();
	}

	public static UserDto UserEntityToDto(User user) {
		return UserDto.builder().userid(user.getUserid()).name(user.getName()).email(user.getEmail()).isOrganizer(user.getIsOrganizer()).build();
	}

	public static OrganizerDto OrganizerEntityToDto(Organizer organizer) {
		
		return OrganizerDto.builder().organizerid(organizer.getOrganizerid()).name(organizer.getName()).email(organizer.getEmail()).isOrganizer(organizer.getIsOrganizer()).build();
	}
	
	public static EventDto EntityToEventDto1(Event entity) {
		return EventDto.builder()
				.eventid(entity.getEventid())
				.title(entity.getTitle())
				.image(entity.getImage())
				.description(entity.getDescription())
				.startDate(entity.getStartDate())
				.endDate(entity.getEndDate())
				.location(entity.getLocation())
				.eventType(entity.getEventType()).build();
	}

}

