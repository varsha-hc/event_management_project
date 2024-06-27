package com.excel.emp.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.excel.emp.entity.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {
	Optional<Event> findByTitleAndImageAndDescriptionAndStartDateAndEndDateAndLocationAndEventType(String title, String image,
			String description, LocalDate startDate, LocalDate endDate, String location, String eventType);
	
	Optional<Event> findById(Integer eventid);

	List<Event> findAll();
	
	List<Event> findAllByLocation(String location);
	
	List<Event> findAllByEventType(String eventType);

	List<Event> findByStartDateAfter(LocalDate startDate);

	Optional<Event> findByTitle(String title);

	Optional<Event> save(Optional<Event> event);
	
	Optional<Event> findByEventid(Integer eventid);

}
