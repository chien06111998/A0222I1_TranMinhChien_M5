package com.example.final_exam.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCustomer;
    private String nameCustomer;
    @JsonIgnore
    @OneToMany(mappedBy = "idCustomer")
    List<BankPassbook> bankPassbookList;

    public Customer() {
    }

    public Customer(Integer idCustomer, String nameCustoemr, List<BankPassbook> bankPassbookList) {
        this.idCustomer = idCustomer;
        this.nameCustomer = nameCustoemr;
        this.bankPassbookList = bankPassbookList;
    }

    public Integer getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(Integer idCustomer) {
        this.idCustomer = idCustomer;
    }

    public String getNameCustoemr() {
        return nameCustomer;
    }

    public void setNameCustoemr(String nameCustoemr) {
        this.nameCustomer = nameCustoemr;
    }

    public List<BankPassbook> getBankPassbookList() {
        return bankPassbookList;
    }

    public void setBankPassbookList(List<BankPassbook> bankPassbookList) {
        this.bankPassbookList = bankPassbookList;
    }
}
