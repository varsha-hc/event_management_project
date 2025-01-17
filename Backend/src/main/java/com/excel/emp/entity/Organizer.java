package com.excel.emp.entity;

import java.time.LocalDate;
import java.util.List;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="organizer_table")
public class Organizer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer organizerid;
	
	
	private Boolean isOrganizer;
	private String name;
	private LocalDate dob;
	private String mobileno;
	@Column(unique=true)
	private String email;
	private String password;
	
	@OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,mappedBy = "organizer")
	private List<Event> events;
}
