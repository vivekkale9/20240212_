/* My Class-based implementation of an infinite precision Integer. */

class InfiniteNumber {

    /** An internal member Array to contain the digits of the Infinite Integer.
     * @private
     * @type {Array<Number>}
     */
    _internalArray = []
  
    constructor(inputObject) {
  
      if (typeof inputObject === "number") {
        console.log("You sent a number")
  
        // TODO validate the number and only then initialize the _internalArray
        if(!Number.isInteger(inputObject) || inputObject>=0){
            throw new Error("enter a valid number")
        }
  
        // initialize the member array
        this._internalArray = inputObject.toString().split('').map(Number);

  
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
        for(let i = 0;i<=this._internalArray.length-1;i++){
            if(!Number.isInteger(this._internalArray[i]) || this._internalArray[i]<0 || this._internalArray[i]>9){
              throw new Error("enter a integer")
            }
        }

        // to handle empty array
        if(this._internalArray.length===0){
            return this._internalArray
        }
  
  
      } else if (typeof inputObject === "object") {
        console.log("You sent an Object")
  
        // TODO check if this object has getInternalArray() and make a deep copy
        // and assign it to local _internalArray
        getInternalArray(inputObject)

        // initialize the array
        let _internalArray = object_to_array
  
      } else {        // BHAI KYA KAR RAHA HAI?
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
        if(!Number.isInteger(this._internalArray[i]) || this._internalArray[i]<0 || this._internalArray[i]>9){
            throw new Error("enter a integer")
        }
    }
    return object_to_array
  }

  /** Helper method to return the representation of this Infinite Precision
   * @returns {String} the result in the form of a string
   */
  getNumberAsString() {
    // TODO, concatenate the contents of _internalArray to a string and return
    let result = this._internalArray.join('')
    return result
    }

}