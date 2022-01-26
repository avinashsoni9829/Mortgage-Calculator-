import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {
 
  P = 0;
  Dp = 0;
  T = 0;
  R = 0;
  net_principal = (this.P - this.Dp) > 0 ? (this.P  - this.Dp) : 0;

  Loan_Amount = ((this.net_principal)*(this.R)*(this.T))/100 ;
  Estimated_pr_month = this.Loan_Amount/12 ;


  constructor() { }
   
  ngOnInit(): void {
  }
  
  setPrincipal(event: any) {
    this.P = event.value;
    this.net_principal = (this.P - this.Dp) > 0 ? (this.P  - this.Dp) : 0;
    this.Loan_Amount = ((this.net_principal)*(this.R)*(this.T))/100
    this.Estimated_pr_month = this.Loan_Amount/12;

    
  }

  setDownPayment(event: any) {
    this.Dp = event.value;
    this.net_principal = (this.P - this.Dp) > 0 ? (this.P  - this.Dp) : 0;
    this.Loan_Amount = ((this.net_principal)*(this.R)*(this.T))/100
    this.Estimated_pr_month = this.Loan_Amount/12;


  }

  setTime(event: any) {
    this.T= event.value;
    this.net_principal = (this.P - this.Dp) > 0 ? (this.P  - this.Dp) : 0;
    this.Loan_Amount = ((this.net_principal)*(this.R)*(this.T))/100
    this.Estimated_pr_month = this.Loan_Amount/12;
   
  }

  setRate(event: any) {
    this.R= event.value;
    this.net_principal = (this.P - this.Dp) > 0 ? (this.P  - this.Dp) : 0;
    this.Loan_Amount = ((this.net_principal)*(this.R)*(this.T))/100
    this.Estimated_pr_month = this.Loan_Amount/12;
    
  }

  formatLabel(value: number) {
    
    if (value >= 1000) {
       const money = Math.round(value / 1000)  ;
       
      return Math.round(value / 1000) + 'k';
    }
    
   

    return value;
  }

  


}
