package com.complaintportal.complaintportal.service;

import com.complaintportal.complaintportal.Exception.UserException;
import com.complaintportal.complaintportal.model.User;

public interface UserService {

	public User findUserById(Long userId)throws UserException;
	
	public User findUserProfileByJwt(String jwt)throws UserException;
}
