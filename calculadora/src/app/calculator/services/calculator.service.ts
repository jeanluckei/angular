/**
 * Service responsible for executing calculator operations
 *
 * @author Jean Tolotti<jean_tolotti@hotmail.com>
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  // Static operation values
  static readonly SUM: string = '+';
  static readonly SUB: string = '-';
  static readonly DIV: string = '/';
  static readonly MUL: string = '*';

  constructor() { }

  /**
   * Method that calculates the mathematic operation.
   *
   * @param num1 number
   * @param num2 number
   * @param ope string
   * @returns number
   */
  calculate(num1: number, num2: number, ope: string): number {
    let res: number;

    switch(ope) {
      case CalculatorService.SUM:
        res = num1 + num2;
        break;
      case CalculatorService.SUB:
        res = num1 - num2;
        break;
      case CalculatorService.DIV:
        res = num1 / num2;
        break;
      case CalculatorService.MUL:
        res = num1 * num2;
        break;
      default:
        res = 0;
    }

    return res;
  }
}
