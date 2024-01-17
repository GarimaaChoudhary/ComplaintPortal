package com.complaintportal.complaintportal.service;

import java.util.List;

import com.complaintportal.complaintportal.Exception.ComplaintException;
import com.complaintportal.complaintportal.Request.ComplaintRequest;
import com.complaintportal.complaintportal.model.Complaint;
import com.complaintportal.complaintportal.model.User;



public interface ComplaintService {

	public List<Complaint> usersComplaintHistory(Long userId);
	
	public Complaint createComplaint(ComplaintRequest req,User user);
}
