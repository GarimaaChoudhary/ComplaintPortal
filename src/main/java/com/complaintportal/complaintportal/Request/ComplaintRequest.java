package com.complaintportal.complaintportal.Request;

public class ComplaintRequest {
    private String description;
    private String department;
	public String getDescription() {
		return description;
	}
	public void setDescrption(String description) {
		this.description = description;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
}
