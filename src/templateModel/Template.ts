import Calculator from "../calculatorModel/Calculator";
interface templateProperties {
  num1Element: HTMLInputElement;
  num2Element: HTMLInputElement;
  buttonElements: NodeListOf<HTMLButtonElement>;
  resultElement: HTMLSpanElement;
  num1: number;
  num2: number;
  result: number;
  applyEvents(): void;
  displayResult(result: string): void;
}

export default class Template implements templateProperties {
  num1Element: HTMLInputElement;
  num2Element: HTMLInputElement;
  resultElement: HTMLSpanElement;
  num1: number;
  num2: number;
  buttonElements: NodeListOf<HTMLButtonElement>;
  result: number;
  instance: Calculator;
  static instance: Template = new Template();

  private constructor() {
    this.num1Element = document.querySelector("#num1") as HTMLInputElement;
    this.num2Element = document.querySelector("#num2") as HTMLInputElement;
    this.resultElement = document.querySelector("#result") as HTMLSpanElement;
    this.buttonElements = document.querySelectorAll(
      ".calButton"
    ) as NodeListOf<HTMLButtonElement>;
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
    this.instance = Calculator.instance;
  }

  applyEvents = () => {
    this.buttonElements.forEach((button) =>
      button.addEventListener("click", (e) => {
        this.num1 = parseInt(this.num1Element.value);
        this.num2 = parseInt(this.num2Element.value);
        const buttonType: string = (e.target as HTMLButtonElement).id;
        switch (buttonType) {
          case "add":
            this.result = this.instance.add(this.num1, this.num2);
            break;
          case "subtract":
            this.result = this.instance.subtract(this.num1, this.num2);
            break;
          case "multiply":
            this.result = this.instance.multiply(this.num1, this.num2);
            break;
          case "divide":
            this.result = this.instance.divide(this.num1, this.num2);
            break;
          default:
            console.log("Invalid button");
        }
        this.displayResult(String(this.result));
      })
    );
  };
  displayResult(result: string): void {
    this.resultElement.innerText = result;
  }
}
