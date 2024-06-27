package com.excel.emp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.excel.emp.entity.Ticket;
import java.util.List;



@Repository

public interface TicketRepository extends JpaRepository<Ticket, Integer> {
	Optional<Ticket> findById(Integer id);

	Optional<Ticket> findByEventsEventid(Integer eventid);
	Optional<Ticket> findByTicketid(Integer ticketid);
	List<Ticket> findByUserUserid(Integer userid);
}


