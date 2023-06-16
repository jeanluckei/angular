import { Component, OnInit } from '@angular/core';

import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private num1: string;
  private num2: string;
  private result: number;
  private operation: string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.clear();
  }

  /**
   *
   */
  clear(): void {
    this.num1 = '0';
    this.num2 = null;
    this.result = null;
    this.operation = null;
  }

  addNumber(number: string): void {
    if (this.operation === null) {
      this.num1 = this.concatNumber(this.num1, number);
    } else {
      this.num2 = this.concatNumber(this.num2, number);
    }
  }

  concatNumber(currNum: string, concatNum: string): string {

    if (currNum === '0' || currNum === null) {
      currNum = '';
    }

    if (concatNum === '.' && currNum === '') {
      return '0.';
    }

    if (concatNum === '.' && currNum.indexOf('.') > -1) {
      return currNum;
    }

    return currNum + concatNum;
  }

  defineOperation(operation: string): void {

    if (this.operation === null) {
      this.operation = operation;
      return;
    }

    if (this.num2 !== null) {
      this.result = this.calculatorService.calculate(
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.operation);
      this.operation = operation;
      this.num1 = this.result.toString();
      this.num2 = null;
      this.result = null;
    }
  }

  calculate(): void {
    if (this.num2 === null) {
      return;
    }

    this.result = this.calculatorService.calculate(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operation
    );
  }

  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }
    if (this.num2 !== null) {
      return this.num2;
    }
    return this.num1;
  }

}
