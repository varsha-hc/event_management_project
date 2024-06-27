package com.excel.emp.entity;

import java.time.LocalDate;
import java.util.List;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name="evnt_table")
public class Event {
	
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer eventid;
   
    private String image;
	private String title;
	private String description;
	private String location;
	private LocalDate startDate;
	private LocalDate endDate;
	private String eventType;
	

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Organizer organizer;
	
	@OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,mappedBy = "events")
	private List<Ticket> tickets;
}
