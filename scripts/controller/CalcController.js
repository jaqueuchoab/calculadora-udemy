class CalcController {
  constructor() {

    this._operation = [];
    this._locale = 'pt-BR';
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this.currentDate;
    this.initialize();
    this.initButtonsEvents();
  }

  initialize() {
    this.setDisplayDateTime();
    setInterval(()=>{
      this.setDisplayDateTime()
    }, 1000);
  }

  addEventListenerAll(element, events, func) {
    let eventsArray = events.split(' ');
    eventsArray.forEach(event => {
      element.addEventListener(event, func, false);
    });
  }

  addOperation(value) {
    this._operation.push(value);
    console.log(this._operation);
  }

  clearAll() {
    this._operation = [];
  }

  clearEntry() {
    this._operation.pop();
  }

  setError() {
    this.displayCalc = "Error";
  }

  execActionButton(valueButton) {
    switch(valueButton) {
      case 'ac':
        this.clearAll();
        break;
      case 'ce':
        this.clearEntry();
        break;
      case 'soma':
        this.clearAll();
        break; 
      case 'subtracao':
        this.clearAll();
        break;
      case 'multiplicacao':
        this.clearAll();
        break;
      case 'divisao':
        this.clearAll();
        break; 
      case 'porcento':
        this.clearAll();
        break;
      case 'igual':
        this.clearAll();
        break; 
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.addOperation(parseInt(value));
        break;
      default: 
        this.setError();
        break; 
    }
  }

  initButtonsEvents() {
    let buttons = document.querySelectorAll("#buttons > g, #parts > g");

    buttons.forEach((btn, index)=> {
      this.addEventListenerAll(btn, 'click drag', e => {
        let textButton = btn.className.baseVal.replace("btn-", "");
        this.execActionButton(textButton);
      });

      this.addEventListenerAll(btn, 'mouseover mousedown mouseup', e => {
        btn.style.cursor = "pointer";
      });
    });
  }

  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displayTime() {
    return this._timeEl;
  }

  set displayTime(value) {
    this._timeEl.innerHTML = value;
  }

  get displayDate() {
    return this._dateEl;
  }

  set displayDate(value) {
    this._dateEl.innerHTML = value;
  }

  get displayCalc() {
    return this._displayCalcEl;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(value) {
    this._currentDate = value;
  }
}