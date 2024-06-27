package com.excel.emp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.excel.emp.response.CommonResponse;
import com.excel.emp.dto.TicketListDto;
import com.excel.emp.dto.UserDto;
import com.excel.emp.dto.TicketDto;
import com.excel.emp.dto.EventDto;
import com.excel.emp.dto.EventListDto;
import com.excel.emp.dto.OrganizerDto;
import com.excel.emp.service.EventService;
import com.excel.emp.service.OrganizerService;

@RestController
@CrossOrigin
public class RegisterController {

	@Autowired
	private OrganizerService organizerService;
	
	@Autowired
	private EventService eventService;

	@GetMapping(path = "/getorganizer")
	public ResponseEntity<CommonResponse<List<OrganizerDto>>> getOrganizer() {
		List<OrganizerDto> organizer = organizerService.getOrganizer();
		return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<List<OrganizerDto>>builder()
				.isError(false).data(organizer).message("Data fethed").build());
	}

	@GetMapping(path = "/organizer/{email}")
	public ResponseEntity<CommonResponse<OrganizerDto>> getByEmail(@PathVariable String email) {
		OrganizerDto organizer = organizerService.getByEmailId(email);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<OrganizerDto>builder().data(organizer)
				.message("Data fetched based on emailId").isError(false).build());

	}

	@GetMapping(path = "/org/{name}")
	public ResponseEntity<CommonResponse<OrganizerDto>> getByName(@PathVariable String name) {
		OrganizerDto organizer = organizerService.getByName(name);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<OrganizerDto>builder().data(organizer)
				.message("Data fetched based on name").isError(false).build());
	}

	@PutMapping(path = "/updateorganiser")
	public ResponseEntity<CommonResponse<String>> updateOrganiser(@RequestBody OrganizerDto dto) {
		String email = organizerService.updateOrganiser(dto);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(email)
				.message("Email Updated Successfully!!").isError(false).build());
	}

	@PutMapping(path = "/updatepassword")
	public ResponseEntity<CommonResponse<String>> savePassword(@RequestBody OrganizerDto dto) {
		String password = organizerService.updatePassword(dto);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(password)
				.message("Password updated Sucessfully").isError(false).build());
	}

	@DeleteMapping(path = "/organizer/delete")
	public ResponseEntity<CommonResponse<String>> deleteOrganizer(@RequestBody OrganizerDto dto) {
	organizerService.deleteOrganizer(dto);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.message("Organizer deleted Sucessfully").isError(false).build());
	}

//-------------------------------------post---------------------------------------------//
	
	@PostMapping(path = "/postorganizer")
	public ResponseEntity<CommonResponse<OrganizerDto>> saveOrganizer(@RequestBody OrganizerDto dto) {
		OrganizerDto orgid = organizerService.saveOrganizer(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(
				CommonResponse.<OrganizerDto>builder().isError(false).data(orgid).message("Organizer registered").build());
	}
	
	@PostMapping(path = "/postticketregister")
	public ResponseEntity<CommonResponse<Integer>> saveTicket(@RequestBody TicketListDto dto) {
		Integer ticketid = organizerService.saveTickets(dto);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<Integer>builder().data(ticketid).isError(false)
				.message("Ticket added succesfully").build());
	}

	@PostMapping("/posteventregister")
	public ResponseEntity<CommonResponse<Integer>> saveEvent(@RequestBody EventListDto dto) {
		Integer eventid = organizerService.saveEvents(dto);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(CommonResponse.<Integer>builder().data(eventid)
				.isError(false).message("Event created Successfully").build());
	}

	@PostMapping("/postuserregister")
	public ResponseEntity<CommonResponse<Integer>> saveUser(@RequestBody com.excel.emp.dto.UserDto dto) {
		Integer userid = organizerService.saveUser(dto);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(CommonResponse.<Integer>builder().data(userid)
						.isError(false).message("user registered").build());

	}

	@PostMapping(path="/userLogin")
	public ResponseEntity<CommonResponse<UserDto>> postUserLogin(@RequestBody UserDto dto){
		UserDto email = organizerService.userLogin(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponse.<UserDto>builder().data(email)
				.isError(false).message("User Login Successfull").build());
	}
	
	@PostMapping(path="/organizerLogin")
	public ResponseEntity<CommonResponse<OrganizerDto>> postOrganizerLogin(@RequestBody OrganizerDto dto){
		OrganizerDto email = organizerService.organizerLogin(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponse.<OrganizerDto>builder().data(email)
				.isError(false).message("Organizer Login Successfull").build());
	}
//----------------------------------get----------------------------------------------//

	@GetMapping(path = "/event/{location}")
	public ResponseEntity<CommonResponse<List<EventDto>>> getByLocation(@PathVariable String location) {
		List<EventDto> events = eventService.getLocation(location);
		return ResponseEntity.ok(CommonResponse.<List<EventDto>>builder().data(events).isError(false)
				.message("Found all the events").build());
	}
	@GetMapping(path="events")
	public ResponseEntity<CommonResponse<List<EventDto>>> getByEventId(@RequestParam(name = "eventType") String eventType){
		List<EventDto> types = eventService.getAllEvents(eventType);
		return ResponseEntity.ok(CommonResponse.<List<EventDto>>builder()
				.data(types).isError(false).message("Found all event types").build());
		
	}
	
	@GetMapping(path="/event")
	public ResponseEntity<CommonResponse<EventDto>> getEventId(@RequestBody EventDto eventid){
		EventDto event = eventService.getEventId(eventid);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<EventDto>builder().data(event)
				.isError(false).message("Found all events").build());
	}
	
	@GetMapping(path="/ticket")
	public ResponseEntity<CommonResponse<TicketDto>> getTicketId(@RequestBody TicketDto ticketid){
		TicketDto ticket= eventService.getTicketId(ticketid);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<TicketDto>builder().data(ticket)
				.isError(false).message("Found all events").build());
	}
	
//----------------------------------update-------------------------------------------//
	@PutMapping(path = "/updateticket")
	public ResponseEntity<CommonResponse<Integer>> updateTicket(@RequestBody TicketDto dto) {
			Integer ticketid = eventService.updateTicket(dto);
			return ResponseEntity.ok(CommonResponse.<Integer>builder()
					.data(ticketid).isError(false)
					.message("Ticket updated Succesfully")
					.build());

		}

	@PutMapping(path = "/updateevent")
	public ResponseEntity<CommonResponse<EventDto>> updateEvent(@RequestBody EventDto dto) {
			EventDto event = eventService.updateEvent(dto);
			return ResponseEntity.ok(CommonResponse.<EventDto>builder().data(event).isError(false)
					.message("Event updated Succesfully").build());

		}
//----------------------------delete---------------------------------------------------//
	
 @DeleteMapping(path="/deleteevent")
	public ResponseEntity<CommonResponse<Integer>> deleteEvent(@RequestBody EventDto dto){
		 eventService.deleteEvent(dto);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<Integer>builder()
				.data(null).message("Event deleted successfully")
				.isError(false).build());
	}
	
	@DeleteMapping(path="/ticket1")
	public ResponseEntity<CommonResponse<TicketDto>> deleteTicketId(@RequestBody TicketDto dto){
		TicketDto deleteTicket=	eventService.deleteTicket(dto);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<TicketDto>builder()
				.data(deleteTicket).message("Ticket data deleted successfully").isError(false)
				.build());
		
	}
//---------------------------------------------------------------------------------------//	
	
	@GetMapping(path = "/allEvents")
	public ResponseEntity<CommonResponse<List<EventDto>>> getAllEvents(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(CommonResponse.<List<EventDto>>builder()
						.data(eventService.getAllEvents()).isError(false)
						.message("Get all the book").build());
	}
	
	
}
