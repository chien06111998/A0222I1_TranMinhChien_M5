package com.example.final_exam.service;

import com.example.final_exam.model.BankPassbook;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public interface IBankPassbookService {
    BankPassbook create(BankPassbook bankPassbook);

    Optional<BankPassbook> delete(Integer id);

    Page<BankPassbook> findAll(Pageable pageable);

    Optional<BankPassbook> findById(Integer id);

    ResponseEntity<BankPassbook> search(Integer id, Pageable pageable);
}
