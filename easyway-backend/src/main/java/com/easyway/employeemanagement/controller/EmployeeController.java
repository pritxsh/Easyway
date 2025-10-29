package com.easyway.employeemanagement.controller;

import java.net.http.HttpResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.easyway.employeemanagement.model.Employee;
import com.easyway.employeemanagement.service.EmployeeService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/employees")
@Validated
// @CrossOrigin(origins = "http://localhost:5173") 
public class EmployeeController {

	@Autowired
	 private EmployeeService empservice;
	
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmpbyId(@PathVariable Long id) {
		
		return ResponseEntity.ok(empservice.getId(id));
	}
	
	@GetMapping
	public ResponseEntity<Page<Employee>> getEmp(@RequestParam(defaultValue = "0") int page,
			                                      @RequestParam(defaultValue = "5") int size,
			                                      @RequestParam(defaultValue = "id") String sortBy){
		
		Pageable pageable = PageRequest.of(page, size,Sort.by(sortBy));
		
		return ResponseEntity.ok(empservice.getAll(pageable));
		
	}
	
	@PostMapping
	public ResponseEntity<Employee> addEmp(@Valid @RequestBody Employee emp) {
	
		 Employee saveemp = empservice.save(emp);
		return  new ResponseEntity<>(saveemp,HttpStatus.CREATED);
	}
	
	
	@PutMapping("/{id}")
	public ResponseEntity<Employee> updateEmp(@PathVariable Long id,  @Valid @RequestBody Employee emp ){
		
		
		return ResponseEntity.ok(empservice.update(id, emp));
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> deleteEmp(@PathVariable Long id){
		
		empservice.delete(id);
		
		return ResponseEntity.noContent().build();
	}
}










