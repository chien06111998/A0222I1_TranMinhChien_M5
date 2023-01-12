package com.example.final_exam.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "term")
public class Term {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idTerm;
    private String term;
    @JsonIgnore
    @OneToMany(mappedBy = "idTerm")
    List<BankPassbook> bankPassbookList;

    public Term() {
    }

    public Term(Integer idTerm, String term, List<BankPassbook> bankPassbookList) {
        this.idTerm = idTerm;
        this.term = term;
        this.bankPassbookList = bankPassbookList;
    }

    public Integer getIdTerm() {
        return idTerm;
    }

    public void setIdTerm(Integer idTerm) {
        this.idTerm = idTerm;
    }

    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public List<BankPassbook> getBankPassbookList() {
        return bankPassbookList;
    }

    public void setBankPassbookList(List<BankPassbook> bankPassbookList) {
        this.bankPassbookList = bankPassbookList;
    }
}
