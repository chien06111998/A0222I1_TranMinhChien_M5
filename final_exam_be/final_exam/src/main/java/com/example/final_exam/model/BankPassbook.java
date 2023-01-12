package com.example.final_exam.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bank_passbook")
public class BankPassbook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @DateTimeFormat(iso= DateTimeFormat.ISO.DATE)
    private Date dateCreate;
    @DateTimeFormat(iso= DateTimeFormat.ISO.DATE)
    // dung date sql là được rồi. nó converter lôi ko tạo đc object
    private Date depositDate;
    private Double money;
    private Double interestRate;
    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "id_customer", referencedColumnName = "idCustomer")
    private Customer idCustomer;
    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "id_term", referencedColumnName = "idTerm")
    private Term idTerm;

    public BankPassbook() {
    }

    public BankPassbook(Integer id, Date dateCreate, Date depositDate, Double money, Double interestRate, Customer idCustomer, Term idTerm) {
        this.id = id;
        this.dateCreate = dateCreate;
        this.depositDate = depositDate;
        this.money = money;
        this.interestRate = interestRate;
        this.idCustomer = idCustomer;
        this.idTerm = idTerm;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDateCreate() {
        return dateCreate;
    }

    public void setDateCreate(Date dateCreate) {
        this.dateCreate = dateCreate;
    }

    public Date getDepositDate() {
        return depositDate;
    }

    public void setDepositDate(Date depositDate) {
        this.depositDate = depositDate;
    }

    public Double getMoney() {
        return money;
    }

    public void setMoney(Double money) {
        this.money = money;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(Double interestRate) {
        this.interestRate = interestRate;
    }

    public Customer getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(Customer idCustomer) {
        this.idCustomer = idCustomer;
    }

    public Term getIdTerm() {
        return idTerm;
    }

    public void setIdTerm(Term idTerm) {
        this.idTerm = idTerm;
    }
}
