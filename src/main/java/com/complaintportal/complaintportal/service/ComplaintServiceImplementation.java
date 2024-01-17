package com.complaintportal.complaintportal.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.complaintportal.Request.ComplaintRequest;
import com.complaintportal.complaintportal.model.Complaint;
import com.complaintportal.complaintportal.model.User;
import com.complaintportal.complaintportal.repository.ComplaintRepository;



@Service
public class ComplaintServiceImplementation implements ComplaintService {
  
	private ComplaintRepository complaintRepository;
	
	public ComplaintServiceImplementation(ComplaintRepository complaintRepository) {
		super();
		this.complaintRepository = complaintRepository;
	}
	@Override
	public Complaint createComplaint(ComplaintRequest req,User user) {
		
		
	    Complaint complaint=new Complaint();
		complaint.setUser(user);
		complaint.setComplaintDate(LocalDateTime.now());
		complaint.setCreatedAt(LocalDateTime.now());
		complaint.setDescription(req.getDescription());
		complaint.setDepartment(req.getDepartment());
		
		
		
	
		return complaintRepository.save(complaint);
		
	}
	@Override
	public List<Complaint> usersComplaintHistory(Long userId) {
		List<Complaint> complaints=complaintRepository.getUsersComplaints(userId);
		return complaints;

	}
	


	

}
