/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 var calculatorModule = (function(){
  var memory = 0;
  var total = 0;

  var calculator = {
    load : setTotal,
    getTotal : returnTotal,
    add : add,
    subtract : sub,
    multiply : multiply, 
    divide : divide,
    recallMemory : returnMemory,
    saveMemory : totalToMemory,
    clearMemory : clearMemory,
    validate : validate
  };

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function setTotal(x){
    validate(x);
    total = x;
    return total;
   }

  /**
   * Return the value of `total`
   * @return { Number }
   */
   function returnTotal(){
    return total;
   }

   

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function add(x){
    validate(x);
    total += x;
    return total;
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function sub(x){
    validate(x);
    total -= x;
    return total;
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function multiply(x){
    validate(x);
    total *= x;
    return total;
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function divide(x){
    validate(x);
    total /= x;
    return total;
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function returnMemory(){
    return memory;
   }

  /**
   * Stores the value of `total` to `memory`
   */
   function totalToMemory(){
    memory = total;

   }

  /**
   * Clear the value stored at `memory`
   */
   function clearMemory(){
    memory = 0;
   }
  /**
   * Validation
   */
   function validate(x){
    if(typeof x != "number"){
      alert("not a numerical input, please try again");
    }
   }

  return calculator;
});