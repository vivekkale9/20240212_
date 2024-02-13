/* My Class-based implementation of an infinite precision Integer. */

class InfiniteNumber {

    /** An internal member Array to contain the digits of the Infinite Integer.
     * @private
     * @type {Array<Number>}
     */
    _internalArray = []

    // The array to store the result
    operationsResult = []
  
    constructor(inputObject) {
  
      if (typeof inputObject === "number") {
        console.log("You sent a number")
  
        // TODO validate the number and only then initialize the _internalArray
        if(!Number.isInteger(inputObject) || inputObject<=0){
            throw new Error("enter a valid number")
        }
  
        // check for integral values only
        if ((inputObject % 1) != 0) {
          throw new Error("Input needs to be an integral value.")
        }

        while (inputObject != 0) {
          this._internalArray.unshift(inputObject % 10)
          inputObject = Math.floor(inputObject / 10)
        }
      } else if (typeof inputObject === "string") {
        console.log("You sent a String")
  
        // TODO validate the String and only then initialize the _internalArray
        for (let char of inputObject) {
            let digit = Number(char);
            
            // if the number is valid then push it to the array
            if (!Number.isNaN(digit) && digit > 0) {
                this._internalArray.push(digit);
            } else {
                console.log(`Invalid digit: ${char}`);
            }
        }
  
    } else if (Array.isArray(inputObject)) { 
        console.log("You sent an Array")
  
        // TODO validate the individual elements of the inputArray and initialize
        // the _internalArray
        for(let i = 0;i<=inputObject.length-1;i++){
            if(!Number.isInteger(inputObject[i]) ||
             inputObject[i]<0 || inputObject[i]>9){
              throw new Error("enter a integer")
            }
        }

        // to handle empty array
        if(inputObject.length===0){
            return inputObject
        }

        // to initialize the array
        this._internalArray = inputObject
        
      } else if (typeof inputObject === "object") {
        console.log("You sent an Object")
  
        // TO check if this object has getInternalArray() and make a deep copy
        // and assign it to local _internalArray
        getInternalArray(inputObject)

        // initialize the array
        _internalArray = object_to_array
  
      } else {
        console.log("You sent some bullshit!")
  
        throw new Error(`Constuctor of IniniteNumber does not support this data
          `+` type ${typeof inputObject}`)
      } 
  
    }

  /** Helper method to return the _internalArray variable which contains the
   * Inifnite precision Integer.
   * @returns {Array<Number>} the internal array representing individual digits
   */
  getInternalArray(inputObject) {
    let object_to_array = Object.values(inputObject)
    for(let i=0;i<object_to_array.length;i++){
        if(!Number.isInteger(this._internalArray[i]) || 
        this._internalArray[i]<0 || this._internalArray[i]>9){
            throw new Error("enter a integer")
        }
    }
    return object_to_array
  }

  /** Helper method to return the representation of this Infinite Precision
   * @param {number[]} arrayToString the array to convert to string
   * @returns {String} the result in the form of a string
   */
  getNumberAsString(arrayToString) {
    // TODO, concatenate the contents of _internalArray to a string and return
    let result = arrayToString.join('')
    return result
  }

  /**This is a method to add the number array
   * @param {number[]} inputArray the second array that we want to add
   * @returns {String} the result of addition
   * @throws {Error} if there is some error while adding
   */
  add(inputArray){
    //to handle the case where number should be integer
    //and in between the digits 0 and 9
    for (let i = 0; i <= inputArray.length - 1; i++) {
      if (!Number.isInteger(inputArray[i]) || inputArray[i] < 0 || inputArray[i] > 9) {
        throw new Error("enter a integer");
      }
    }

    // to handle empty array
    if (inputArray.length === 0) {
      return this._internalArray;
    }

    // for the ease of using ahead
    let ogLen1 = this._internalArray.length - 1;
    let ogLen2 = inputArray.length - 1;
    // the carry variable
    let carry = 0;
    // if the this._internalArray.length is greater than inputArray.length
    while (inputArray.length < this._internalArray.length) {
      inputArray.unshift(0);
    }

    // if the inputArray.length is greater than this._internalArray.length
    while (this._internalArray.length < inputArray.length) {
      this._internalArray.unshift(0);
    }

    // if the this._internalArray.length is greater than inputArray.length
    if (this._internalArray.length > inputArray.length) {
      // while loop to iterate from the back till i reaches 0

      while (ogLen1 >= 0) {
        // the sum variable
        let sum = this._internalArray[ogLen1] + inputArray[ogLen1] + carry;
        this.operationsResult.unshift(sum % 10);

        carry = Math.floor(sum / 10);
        ogLen1--;
      }
      // if after the iteration is over there is some carry then add it
      if (carry > 0) {
        this.operationsResult.unshift(carry);
      }


      return this.getNumberAsString(this.operationsResult);
    }
    // if the inputArray.length is greater than this._internalArray.length
    else {
      // while loop to iterate from the back till i reaches 0
      while (ogLen2 >= 0) {
        // the sum variable
        let sum = this._internalArray[ogLen2] + inputArray[ogLen2] + carry;
        this.operationsResult.unshift(sum % 10);
        carry = Math.floor(sum / 10);
        ogLen2--;
      }
      // if after the iteration is over there is some carry then add it
      if (carry > 0) {
        this.operationsResult.unshift(carry);
      }

      return this.getNumberAsString(this.operationsResult);
    }
  }

  /**This is a method to subtract the number array
   * @param {number[]} inputArray the second array that we want to subtract
   * @returns {String} the result of subtraction
   * @throws {Error} if there is some error while subtracting
   */
  subtract(inputArray){
    //to handle the case where number should be integer
    //and in between the digits 0 and 9
    for (let i = 0; i <= inputArray.length - 1; i++) {
      if (!Number.isInteger(inputArray[i]) || inputArray[i] < 0 || inputArray[i] > 9) {
        throw new Error("enter a integer");
      }
    }

    // to handle empty array
    if (inputArray.length === 0) {
      return this._internalArray;
    }

    // for the ease
    let trueLen1 = this._internalArray.length - 1;
    let trueLen2 = inputArray.length - 1;

    let borrow = 0;

    // for checking which array is greater in terms of value
    let arr1Number = parseInt(this._internalArray.join(""), 10);
    let arr2Number = parseInt(inputArray.join(""), 10);

    // if the array 1 is smaller than array 2
    // then reverse the subtraction i.e subtract array 1 from array 2 and -ve
    if (trueLen1 < trueLen2 || arr1Number < arr2Number) {
      // if the inputArray.length is greater than this._internalArray.length
      if (trueLen1 < trueLen2) {
        for (let h = 0; h < trueLen2 - trueLen1; h++) {
          this._internalArray.unshift(0);
        }
      }

      while (trueLen2 >= 0) {
        let diff;
        // if we have borrowed something then subtract 1 from the this._internalArray[i]
        if (borrow === 1) {
          inputArray[trueLen2] = inputArray[trueLen2] - borrow;
          borrow = 0;
        }
        // if the element in inputArray is less than the element in this._internalArray
        // then borrow from previous
        if (inputArray[trueLen2] < this._internalArray[trueLen2]) {
          inputArray[trueLen2] = inputArray[trueLen2] + 10;
          borrow = 1;
          diff = inputArray[trueLen2] - this._internalArray[trueLen2];
          this.operationsResult.unshift(diff);
          trueLen2--;
        } else {
          let diff = inputArray[trueLen2] - this._internalArray[trueLen2];
          this.operationsResult.unshift(diff);
          trueLen2--;
        }
      }
      // Remove leading zeros from the result
      if (this.operationsResult[0] === 0) {
        this.operationsResult.shift();
      }
      // to give negative sign to first number
      this.operationsResult[0] = this.operationsResult[0] * -1;

      return this.getNumberAsString(this.operationsResult);
    }
    // normal case where the array 1 is greater
    else {
      // if the this._internalArray.length is greater than inputArray.length
      if (trueLen1 > trueLen2) {
        for (let h = 0; h < trueLen1 - trueLen2; h++) {
          inputArray.unshift(0);
        }
      }
      while (trueLen1 >= 0) {
        // if we have borrowed something then subtract 1 from the this._internalArray[i]
        if (borrow === 1) {
          this._internalArray[trueLen1] = this._internalArray[trueLen1] - borrow;
          borrow = 0;
        }
        // if the element in this._internalArray is less than the element in inputArray
        // then borrow from previous
        if (inputArray[trueLen1] > this._internalArray[trueLen1]) {
          this._internalArray[trueLen1] = this._internalArray[trueLen1] + 10;
          borrow = 1;
          let diff = this._internalArray[trueLen1] - inputArray[trueLen1];
          this.operationsResult.unshift(diff);
          trueLen1--;
        } else {
          let diff = this._internalArray[trueLen1] - inputArray[trueLen1];
          this.operationsResult.unshift(diff);
          trueLen1--;
        }
      }

      // Remove leading zeros from the result
      if (this.operationsResult[0] === 0) {
        this.operationsResult.shift();
      }
      return this.getNumberAsString(this.operationsResult);
    }
  }

  /**This is a method to subtract the number array
   * @param {number[]} inputArray the second array that we want to subtract
   * @returns {String} the result of subtraction
   * @throws {Error} if there is some error while subtracting
   */
  multiply(inputArray){
    //to handle the case where number should be integer
    for (let i = 0; i <= inputArray.length - 1; i++) {
      if (!Number.isInteger(inputArray[i])) {
        throw new Error("enter a integer");
      }
    }
    // to handle empty array
    if (inputArray.length === 0) {
      return this._internalArray;
    }

    // to handle is one of the array is 0
    if (
      (this._internalArray.length === 1 && this._internalArray[0] === 0) ||
      (inputArray.length === 1 && inputArray[0] === 0)
    ) {
      return 0;
    }

    // to handle the case where the element is negative
    let mark = 0;
    if (this._internalArray[0] < 0 && inputArray[0] < 0) {
      this._internalArray[0] = -this._internalArray[0];
      inputArray[0] = -inputArray[0];
    } else if (this._internalArray[0] < 0) {
      this._internalArray[0] = -this._internalArray[0];
      mark = 1;
    } else if (inputArray[0] < 0) {
      inputArray[0] = -inputArray[0];
      mark = 1;
    }

    // Initialize the result array with zeros
    this.operationsResult = Array(this._internalArray.length + inputArray.length).fill(0);

    // Iterate through the digits of this._internalArray
    for (let i = this._internalArray.length - 1; i >= 0; i--) {
      // Iterate through the digits of inputArray
      for (let j = inputArray.length - 1; j >= 0; j--) {
        // Calculate the product
        let product = this._internalArray[i] * inputArray[j];
        let position = i + j + 1; // Position of the place in the result array
        let sum = this.operationsResult[position] + product; // Add the product to the current value at the position
        this.operationsResult[position] = sum % 10; // Update the ones place of the result
        this.operationsResult[position - 1] += Math.floor(sum / 10); // Carry over the tens place
      }
    }
    // to remove the leading zeros
    if (this.operationsResult[0] === 0) {
      this.operationsResult.shift();
    }

    if (mark == 1) {
      this.operationsResult.unshift("-");
    }
    return this.operationsResult.join("");
  }
}

let array1 = [1,2]
let array2 = [-5]
const numberObj = new InfiniteNumber(array1);
console.log(numberObj.multiply(array2));