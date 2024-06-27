package com.excel.emp.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.emp.entity.Organizer;


public interface OrganizerRepository extends JpaRepository<Organizer, Integer> {
Optional<Organizer> findByOrganizerid(Integer organizerid);

Optional<Organizer> findByEmail(String email);

Optional<Organizer> findByName(String name);


}
