package com.example.final_exam.service.impl;

import com.example.final_exam.model.BankPassbook;
import com.example.final_exam.model.Customer;
import com.example.final_exam.repository.CustomerRepos;
import com.example.final_exam.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerImpl implements ICustomerService {
    @Autowired
    CustomerRepos customerRepos;
    @Override
    public List<Customer> findAll() {
        return customerRepos.findAll();
    }

    @Override
    public ResponseEntity<Customer> searchNameCustomer(String name, Pageable pageable) {
        return (ResponseEntity<Customer>) customerRepos.findAllByNameCustoemr(name, pageable);
    }
}
