class CalcController {
  constructor() {
    // Display da calculadora
    this._displayCalc = "0";
    // Data mostrada na calculadora
    this._dataAtual;
  }

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(valor) {
    this._displayCalc = valor;
  }

  get dataAtual() {
    return this.__dataAtual;
  }

  set dataAtual(valor) {
    this.__dataAtual = valor;
  }
}