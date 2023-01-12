package com.example.final_exam.repository;

import com.example.final_exam.model.BankPassbook;
import com.example.final_exam.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin("http://localhost:4200/")
public interface CustomerRepos extends JpaRepository<Customer, Integer> {
    Page<Customer> findAllByNameCustoemr(String name, Pageable pageable);

}
