package com.complaintportal.complaintportal.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.complaintportal.complaintportal.Exception.UserException;
import com.complaintportal.complaintportal.config.JwtProvider;
import com.complaintportal.complaintportal.model.User;
import com.complaintportal.complaintportal.repository.UserRepository;



@Service
public class UserServiceImplementation implements UserService {

	
	private UserRepository userRepository;
	private JwtProvider jwtProvider;
	
	
	
	public UserServiceImplementation(UserRepository userRepository,JwtProvider jwtProvider) {
		this.userRepository=userRepository;
		this.jwtProvider=jwtProvider;
	}
	@Override
	public User findUserById(Long userId) throws UserException {
		Optional<User>user=userRepository.findById(userId);
		if(user.isPresent()) {
			return user.get();
		}
		throw new UserException("user not found with is"+userId);
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
	  String email=jwtProvider.getEmailFromToken(jwt);
	  
	  User user=userRepository.findByEmail(email);
	  
	  if(user==null) {
		  throw new UserException("usernot found with email"+email);
	  }
		return user;
	}
	

}