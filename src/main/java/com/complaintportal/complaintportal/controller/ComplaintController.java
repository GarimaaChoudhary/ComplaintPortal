package com.complaintportal.complaintportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.complaintportal.complaintportal.Exception.ComplaintException;
import com.complaintportal.complaintportal.Exception.UserException;
import com.complaintportal.complaintportal.Request.ComplaintRequest;
import com.complaintportal.complaintportal.model.Complaint;
import com.complaintportal.complaintportal.model.User;
import com.complaintportal.complaintportal.service.ComplaintService;
import com.complaintportal.complaintportal.service.UserService;


@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {




  @Autowired
  private UserService userService;
  
  @Autowired
  private ComplaintService complaintService;

    @PostMapping("/create")
   public ResponseEntity<Complaint>createComplaint(@RequestBody ComplaintRequest req,@RequestHeader("Authorization")String jwt)throws UserException{
	
	User user=userService.findUserProfileByJwt(jwt);
	Complaint complaint=complaintService.createComplaint(req,user);
	System.out.println("complaint"+complaint);
	return new ResponseEntity<Complaint>(complaint,HttpStatus.CREATED);
	
}

@GetMapping("/user")
public ResponseEntity<List<Complaint>>usersComplaintHistory(
	@RequestHeader("Authorization")String jwt)throws UserException{
		User user=userService.findUserProfileByJwt(jwt);
		List<Complaint> complaint = complaintService.usersComplaintHistory(user.getId());
		return new ResponseEntity<>(complaint,HttpStatus.CREATED);
	}



}