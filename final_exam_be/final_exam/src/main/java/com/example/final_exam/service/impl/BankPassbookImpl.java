package com.example.final_exam.service.impl;

import com.example.final_exam.model.BankPassbook;
import com.example.final_exam.repository.BankPassbookRepos;
import com.example.final_exam.repository.CustomerRepos;
import com.example.final_exam.repository.TermRepos;
import com.example.final_exam.service.IBankPassbookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BankPassbookImpl implements IBankPassbookService {
    @Autowired
    CustomerRepos customerRepos;
    @Autowired
    TermRepos termRepos;
    @Autowired
    BankPassbookRepos bankPassbookRepos;

    @Override
    public BankPassbook create(BankPassbook bankPassbook) {
        customerRepos.findAll();
        termRepos.findAll();
        return bankPassbookRepos.save(bankPassbook);
    }

    @Override
    public Optional<BankPassbook> delete(Integer id) {
        bankPassbookRepos.deleteById(id);
        return null;
    }

    @Override
    public Page<BankPassbook> findAll(Pageable pageable) {
        return bankPassbookRepos.findAll(pageable);
    }

    @Override
    public Optional<BankPassbook> findById(Integer id) {
        return bankPassbookRepos.findById(id);
    }

    @Override
    public ResponseEntity<BankPassbook> search(Integer id, Pageable pageable) {
        return (ResponseEntity<BankPassbook>) bankPassbookRepos.findAllByIdContaining(id, pageable);
    }
}
