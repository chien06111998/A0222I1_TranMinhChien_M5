package com.example.final_exam.service.impl;

import com.example.final_exam.model.Term;
import com.example.final_exam.repository.TermRepos;
import com.example.final_exam.service.ITermService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TermImpl implements ITermService {
    @Autowired
    TermRepos termRepos;
    @Override
    public List<Term> findAll() {
        return termRepos.findAll();
    }
}
