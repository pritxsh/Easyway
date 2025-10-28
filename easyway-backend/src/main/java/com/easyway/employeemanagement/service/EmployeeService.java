package com.easyway.employeemanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.easyway.employeemanagement.exception.ResourceNotFoundException;
import com.easyway.employeemanagement.model.Employee;
import com.easyway.employeemanagement.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository repository;
	
	
	// Create
	public Employee save(Employee emp) {
		
		return repository.save(emp);
	}
	
	// Update
	public Employee update(Long id, Employee emp) {
		Employee existingemp = repository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not found with the id "+id));
		
		existingemp.setName(emp.getName());
		existingemp.setEmail(emp.getEmail());
		existingemp.setDepartment(emp.getDepartment());
		existingemp.setSalary(emp.getSalary());
		
		
		return repository.save(existingemp);
		
	}
	
	// Retrieve/Get by Id
	
	
	public Employee getId(Long id) {
	
		return repository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not found with id "+id));
	}
	
	// get all
	
	public Page<Employee> getAll(Pageable pageable){
		
		return repository.findAll(pageable);
	}
	
	// delete
	
	public void delete(Long id) {
		
		if(!repository.existsById(id)) {
			throw new ResourceNotFoundException("Employee no found with id "+id);
		}
		repository.deleteById(id);
	}
	  
}
