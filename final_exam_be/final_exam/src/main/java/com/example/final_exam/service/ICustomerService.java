package com.example.final_exam.service;

import com.example.final_exam.model.BankPassbook;
import com.example.final_exam.model.Customer;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ICustomerService {
    List<Customer> findAll();
    ResponseEntity<Customer> searchNameCustomer(String name, Pageable pageable);

}
