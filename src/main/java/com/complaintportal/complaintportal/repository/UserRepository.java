package com.complaintportal.complaintportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.complaintportal.model.User;



public interface UserRepository extends JpaRepository<User,Long> {
	
	public User findByEmail(String email);
	

}
