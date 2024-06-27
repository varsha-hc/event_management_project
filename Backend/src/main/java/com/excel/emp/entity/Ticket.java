package com.excel.emp.entity;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="ticket_table")
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer  ticketid;
	
	private Double price;


	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private User user;
	@JoinColumn(name="eventid")
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private Event events;
}
