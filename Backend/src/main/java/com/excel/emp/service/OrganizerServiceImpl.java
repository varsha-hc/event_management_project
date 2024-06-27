package com.excel.emp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.emp.exception.EventException;
import com.excel.emp.exception.OrganizerException;
import com.excel.emp.repository.UserRepository;
import com.excel.emp.dto.TicketListDto;
import com.excel.emp.entity.Event;
import com.excel.emp.entity.Ticket;
import com.excel.emp.dto.EventListDto;
import com.excel.emp.dto.OrganizerDto;
import com.excel.emp.dto.UserDto;
import com.excel.emp.entity.Organizer;
import com.excel.emp.entity.User;
import com.excel.emp.repository.EventRepository;
import com.excel.emp.repository.OrganizerRepository;
import com.excel.emp.repository.TicketRepository;
import com.excel.emp.utility.OrganizerUtils;

@Service
public class OrganizerServiceImpl implements OrganizerService {

	@Autowired
	private OrganizerRepository organizerRepository;
	@Autowired
	private EventRepository eventRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private TicketRepository ticketRepository;

	@Override
	public OrganizerDto saveOrganizer(OrganizerDto dto) {
	Optional<Organizer> optional = organizerRepository.findByEmail(dto.getEmail());
	if(!optional.isPresent()) {
		
		Organizer organizer = OrganizerUtils.dtoToOrganizerEntity(dto);
		organizerRepository.save(organizer);
		return OrganizerUtils.organizerEntityToDto(organizer);
		
	}
	throw new OrganizerException("Email already present");
	}

	@Override
	public List<OrganizerDto> getOrganizer() {
	List<Organizer> organizer = organizerRepository.findAll();
		return 	OrganizerUtils.EntityToDto(organizer);

	}

	@Override
	public OrganizerDto getByEmailId(String email) {
		
		Optional<Organizer> optional = organizerRepository.findByEmail(email);
		
		if(optional.isPresent()) {
			Organizer organizer = optional.get();
			return  OrganizerDto.builder()
			.organizerid(organizer.getOrganizerid())
			.isOrganizer(organizer.getIsOrganizer())
			.name(organizer.getName())
			.dob(organizer.getDob())
			.mobileno(organizer.getMobileno())
			.password(organizer.getPassword())
			.email(organizer.getEmail())
			.build();
		}
		
		throw new OrganizerException("Email not found");
	}

	@Override
	public OrganizerDto getByName(String name) {
		Optional<Organizer> optional = organizerRepository.findByName(name);
		if(optional.isPresent()) {
			Organizer organizer = optional.get();
			return OrganizerDto.builder()
				.organizerid(organizer.getOrganizerid())
				.isOrganizer(organizer.getIsOrganizer())
				.name(organizer.getName())
				.dob(organizer.getDob())
				.mobileno(organizer.getMobileno())
				.email(organizer.getEmail())
				.build();
		}
		throw new OrganizerException("Email not found");

	}

	@Override
	public String updateOrganiser(OrganizerDto dto) {
		Optional<Organizer> optional = organizerRepository.findByOrganizerid(dto.getOrganizerid());
		if(optional.isPresent()) {
			Organizer organizer = optional.get();
			 organizer.setEmail(dto.getEmail());
			 return organizerRepository.save(organizer).getEmail();	
		}else 
		throw new OrganizerException("Organiser id not found") ;
		
	}

	@Override
	public String updatePassword(OrganizerDto dto) {
	Optional<Organizer> optional = organizerRepository.findByEmail(dto.getEmail());
	if(optional.isPresent()) {
		Organizer organizer = optional.get();
		organizer.setPassword(dto.getPassword());
		return organizerRepository.save(organizer).getEmail();
	}else
		throw new OrganizerException("Email not present");
	}

	@Override
	public void deleteOrganizer(OrganizerDto dto) {
		Optional<Organizer> optional = organizerRepository.findByOrganizerid(dto.getOrganizerid());
		if(optional.isPresent()) {
			organizerRepository.delete(optional.get());
		}else {
			throw new OrganizerException("Organizer Not Found!");
		}
	}
	@Override
	public Integer saveTickets(TicketListDto dto) {
	    List<Ticket> optional = ticketRepository.findByUserUserid(dto.getUserid());
	    Optional<Event> event = eventRepository.findById(dto.getEventid());
	    if (event.isPresent()) {
	        Event evn = event.get();
	        if (!optional.isEmpty() || !dto.getTickets().isEmpty()) { // Check if there are tickets in dto
	            List<Ticket> tickets = OrganizerUtils.dtoToTicketEntity(dto.getTickets(), dto.getUserid()); // Use dto.getUserid() to pass userid to dtoToTicketEntity method
	            tickets.forEach(x -> x.setEvents(evn));
	            evn.setTickets(tickets);
	            eventRepository.save(evn);
	            return evn.getEventid();
	        }
	    }
	    throw new OrganizerException("Failed to save tickets: No tickets found for user with userid: " + dto.getUserid());
	}



	@Override
	public Integer saveEvents(EventListDto dto) {
	    Optional<Organizer> organizerOptional = organizerRepository.findById(dto.getOrganizerid());
	    if (organizerOptional.isPresent()) {
	        List<Event> events = new ArrayList<>();

	        // Check if dto.getEvnts() is not null
	        if (dto.getEvnts() != null) {
	            events = dto.getEvnts().stream().map(event -> {
	                Optional<Event> optional = eventRepository.findByTitleAndImageAndDescriptionAndStartDateAndEndDateAndLocationAndEventType(
	                        event.getTitle(), event.getImage(), event.getDescription(),
	                        event.getStartDate(), event.getEndDate(), event.getLocation(), event.getEventType());

	                if (optional.isEmpty()) {
	                    return OrganizerUtils.dtoToEventEntity(event);
	                } else {
	                    throw new EventException("Event already exists with title: " + event.getTitle());
	                }
	            }).collect(Collectors.toList());
	        }

	        Organizer organizer = organizerOptional.get();
	        events.forEach(x -> x.setOrganizer(organizer));
	        organizer.setEvents(events);

	        organizerRepository.save(organizer);

	        return organizer.getOrganizerid();
	    } else {
	        throw new OrganizerException("Organizer not registered");
	    }
	}

	@Override
	public Integer saveUser(UserDto dto) {
		Optional<User> optional = userRepository.findByEmail(dto.getEmail());
		if (!optional.isPresent()) {
			User user = OrganizerUtils.dtoToUserEntity(dto);
			try {
				userRepository.save(user);
			} catch (Exception e) {
				throw new OrganizerException("user email shoud be unique");
			}
			return user.getUserid();
		}
		throw new OrganizerException("user already present");
		}

//	@Override
//	public UserDto userLogin(UserDto dto) {
//         Optional<User> optional = userRepository.findByEmail(dto.getEmail());
//         if(optional.isPresent()) {
//        	 User user = optional.get();
//        	 if(user.getPassword().equals(dto.getPassword())) {
//        		 return OrganizerUtils.dtoToUserEntity(user);
//        	 }else{
//        		 
//        		throw new  OrganizerException("Invalid Password");
//        	 }
//         }
//		throw new OrganizerException("Invalid Email!");
//	}
	
	@Override
	public UserDto userLogin(UserDto dto) {
         Optional<User> optional = userRepository.findByEmail(dto.getEmail());
         if(optional.isPresent()) {
        	 User user = optional.get();
        	 if(user.getPassword().equals(dto.getPassword())) {
        		 return OrganizerUtils.UserEntityToDto(user);
        	 }
        	 else{
        		 
        		throw new  OrganizerException("Invalid Password");
        	 }
         }
		throw new OrganizerException("Invalid Email!");
	}
	@Override
	public OrganizerDto organizerLogin(OrganizerDto dto) {
        Optional<Organizer> optional1 = organizerRepository.findByEmail(dto.getEmail());
        if(optional1.isPresent()) {
        	Organizer organizer = optional1.get();
        	if(organizer.getPassword().equals(dto.getPassword())) {
        		return OrganizerUtils.OrganizerEntityToDto(organizer);
        	}else {
        		throw new OrganizerException("Invalid Organizer Password");
        	}
        }
        throw new OrganizerException("Invalid Organizer Email!");
	}
}
	
	
	
	
	
	
	
	
	
	
	
	



//	@Override
//	public Boolean loginUser(UserDto dto) {
//	
//			Optional<User> option=userRepository.findByEmail(dto.getEmail());
//			if(option.isPresent()) {
//				User user=option.get();
//				if(user.getPassword().equals(dto.getPassword())) {
//					return user.getIsOrganizer();
//				}
//				throw new OrganizerException("Incorrect Password");
//			}
//			throw new OrganizerException("User not Registered!");
//	}
//
//	@Override
//	public Boolean loginOrganizer(OrganizerDto dto) {
//		Optional<Organizer> option=organizerRepository.findByEmail(dto.getEmail());
//		if(option.isPresent()) {
//			Organizer organizer=option.get();
//			if(organizer.getPassword().equals(dto.getPassword())) {
//				return organizer.getIsOrganizer();
//			}
//			throw new OrganizerException("Incorrect Password");
//		}
//		throw new OrganizerException("Organizer not Registered!");
//	}

	






