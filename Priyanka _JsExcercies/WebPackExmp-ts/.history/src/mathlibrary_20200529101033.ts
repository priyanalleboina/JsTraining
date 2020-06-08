class MathLibrary {
    constructor() {
    }
    validate(num1, num2) {
      //if (typeof num1 != 'number' || typeof num2 != 'number')
      if(isNaN(num1) || isNaN(num2)) {
        return false;
      }
      return true;
    }
    add(num1, num2) {
      return num1+num2; //return number
    }
    multiplication(num1, num2) {
      return String(num1*num2); //converts to string and returns
    }
    subtraction(num1, num2) {
      var sub = num1-num2;
      return sub.toString(); //converts to string and returns
    }
    division(num1, num2) {
      if (num2 == 0) return 0;
      return num1/num2; //return number
    }
  }
  
  const mathLibrary = new MathLibrary()
  export default mathLibrary;