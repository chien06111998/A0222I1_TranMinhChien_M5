package com.example.final_exam.controller;

import com.example.final_exam.model.BankPassbook;
import com.example.final_exam.model.Customer;
import com.example.final_exam.service.impl.BankPassbookImpl;
import com.example.final_exam.service.impl.CustomerImpl;
import com.example.final_exam.service.impl.TermImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("bank")
public class BankPassBookController {
    @Autowired
    BankPassbookImpl bankPassbookService;
    @Autowired
    CustomerImpl customerService;
    @Autowired
    TermImpl term;

    @GetMapping("/list")
    public ResponseEntity<Page<BankPassbook>> showList(@PageableDefault(size = 5) Pageable page){
        return new ResponseEntity<>(bankPassbookService.findAll(page), HttpStatus.ACCEPTED);
    }

    @PostMapping("/create")
    public ResponseEntity<BankPassbook> create(@RequestBody BankPassbook bankPassbook) {
        return new ResponseEntity<>(bankPassbookService.create(bankPassbook), HttpStatus.CREATED);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<BankPassbook> edit(@PathVariable("id") Integer id, @RequestBody BankPassbook bankPassbook, BindingResult bindingResult) {
        Optional<BankPassbook> bankPassbookOptional = bankPassbookService.findById(id);
        if (!bankPassbookOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            if(!bindingResult.hasErrors()) {
                bankPassbookService.create(bankPassbook);
                return new ResponseEntity<>(HttpStatus.OK);
            }else {
                return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED);
            }
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deletePackage(@PathVariable("id") Integer id) {
        Optional<BankPassbook> pck = bankPassbookService.findById(id);
        if (!pck.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            bankPassbookService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/search")
    public ResponseEntity<BankPassbook> search(@RequestParam("id") Integer id, Pageable pageable) {
        return bankPassbookService.search(id, pageable);
    }

    @GetMapping("/nameSeach")
    public ResponseEntity<Customer> searchNameCustomer(@RequestParam("name") String name, Pageable pageable) {
        return customerService.searchNameCustomer(name, pageable);
    }
}
