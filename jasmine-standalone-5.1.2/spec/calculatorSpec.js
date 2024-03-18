describe('InfiniteNumber', function() {
    /** This is describe for add function
     */
    describe('add', function() {
      it('should add two arrays of equal length', function() {
        const numberObj = new InfiniteNumber([1, 2, 3]);
        const result = numberObj.add([4, 5, 6]);
        expect(result).toBe('579');
      });
  
      it('should add two arrays where one is longer than the other', function() {
        const numberObj = new InfiniteNumber([1, 2]);
        const result = numberObj.add([4, 5, 6]);
        expect(result).toBe('468');
      });
  
      it('should add two arrays where one is shorter than the other', function() {
        const numberObj = new InfiniteNumber([4, 5, 6]);
        const result = numberObj.add([1, 2]);
        expect(result).toBe('468');
      });
  
      it('should handle carrying over', function() {
        const numberObj = new InfiniteNumber([1]);
        const result = numberObj.add([9, 9]);
        expect(result).toBe('100');
      });
  
      it('should handle empty array', function() {
        const numberObj = new InfiniteNumber([1, 2, 3]);
        const result = numberObj.add([]);
        expect(result).toEqual([1,2,3]);
      });
  
      it('should throw error for non-integer elements in inputArray', function() {
        const numberObj = new InfiniteNumber([1, 2, 3]);
        expect(() => numberObj.add([1, 'a', 3])).toThrowError('enter a integer');
      });
  
      it('should throw error for inputArray containing values less than 0', function() {
        const numberObj = new InfiniteNumber([1, 2, 3]);
        expect(() => numberObj.add([1, -2, 3])).toThrowError('enter a integer');
      });
  
      it('should throw error for inputArray containing values greater than 9', function() {
        const numberObj = new InfiniteNumber([1, 2, 3]);
        expect(() => numberObj.add([1, 12, 3])).toThrowError('enter a integer');
      });
    });


    // This is describe for subtract function
    describe('subtract', function() {
        it('should subtract two arrays where first is greater', function() {
          const numberObj = new InfiniteNumber([7, 5]);
          const result = numberObj.subtract([0, 5]);
          expect(result).toBe('70');
        });
    
        it('should subtract two arrays where second is greater', function() {
          const numberObj = new InfiniteNumber([0, 5]);
          const result = numberObj.subtract([7, 5]);
          expect(result).toBe('-70');
        });
    
        it('should subtract two arrays of equal length', function() {
          const numberObj = new InfiniteNumber([1, 2, 3]);
          const result = numberObj.subtract([4, 5, 6]);
          expect(result).toBe('-333');
        });
    
        it('should subtract two arrays where one is longer than the other', function() {
          const numberObj = new InfiniteNumber([4, 5, 6]);
          const result = numberObj.subtract([1, 2]);
          expect(result).toBe('444');
        });
    
        it('should subtract two arrays where one is shorter than the other', function() {
          const numberObj = new InfiniteNumber([1, 2]);
          const result = numberObj.subtract([4, 5, 6]);
          expect(result).toBe('-444');
        });
    
        it('should handle empty array', function() {
          const numberObj = new InfiniteNumber([1, 2, 3]);
          const result = numberObj.subtract([]);
          expect(result).toEqual([1,2,3]);
        });
    
        it('should throw error for non-integer elements in inputArray', function() {
          const numberObj = new InfiniteNumber([1, 2, 3]);
          expect(() => numberObj.subtract([1, 'a', 3])).toThrowError('enter a integer');
        });
    
        it('should throw error for inputArray containing values less than 0', function() {
          const numberObj = new InfiniteNumber([1, 2, 3]);
          expect(() => numberObj.subtract([1, -2, 3])).toThrowError('enter a integer');
        });
    
        it('should throw error for inputArray containing values greater than 9', function() {
          const numberObj = new InfiniteNumber([1, 2, 3]);
          expect(() => numberObj.subtract([1, 12, 3])).toThrowError('enter a integer');
        });
      });

      // This is describe for multiply function
      describe('multiply', function() {
        it('should multiply two positive arrays', function() {
          const numberObj = new InfiniteNumber([1, 2]);
          const result = numberObj.multiply([3, 4]);
          expect(result).toBe('408');
        });
    
        it('should multiply positive and negative arrays', function() {
          const numberObj = new InfiniteNumber([1, 2]);
          const result = numberObj.multiply([-3, 4]);
          expect(result).toBe('-408');
        });
    
        it('should handle multiplication by zero', function() {
          const numberObj = new InfiniteNumber([1, 2]);
          const result1 = numberObj.multiply([0]);
          const result2 = numberObj.multiply([0, 0]);
          expect(result1).toBe(0);
          expect(result2).toBe('000');
        });
    
        it('should handle multiplication of array with zero', function() {
          const numberObj = new InfiniteNumber([0]);
          const result = numberObj.multiply([1, 2, 3]);
          expect(result).toEqual(0);
        });
    
        it('should handle empty array', function() {
          const numberObj = new InfiniteNumber([1, 2, 3]);
          const result = numberObj.multiply([]);
          expect(result).toEqual([1,2,3]);
        });
    
        it('should throw error for non-integer elements in inputArray', function() {
          const numberObj = new InfiniteNumber([1, 2, 3]);
          expect(() => numberObj.multiply([1, 'a', 3])).toThrowError('enter a integer');
        });
      });

      // This is describe for divide function
      describe('divide', function() {
        it('should divide when dividend is greater than divisor', function() {
          const numberObj1 = new InfiniteNumber([4, 8]);
          const result1 = numberObj1.divide([2]);
          expect(result1).toBe('24');
        });
    
        it('should handle division by zero', function() {
          const numberObj = new InfiniteNumber([1, 2, 3]);
          expect(() => numberObj.divide([0])).toThrowError('infinity');
        });
    
        it('should handle empty array', function() {
          const numberObj = new InfiniteNumber([1, 2, 3]);
          const result = numberObj.divide([]);
          expect(result).toEqual([1, 2, 3]);
        });
    
        it('should throw error for non-integer elements in inputArray', function() {
          const numberObj = new InfiniteNumber([1, 2, 3]);
          expect(() => numberObj.divide([1, 'a', 3])).toThrowError('enter a integer');
        });
    
        it('should throw error when divisor is greater than dividend', function() {
          const numberObj = new InfiniteNumber([5, 6]);
          expect(() => numberObj.divide([7, 8])).toThrowError('divisor is greater than dividend');
        });
    
        it('should handle large numbers', function() {
          const numberObj4 = new InfiniteNumber([1, 0, 0, 0, 0, 0, 0, 0]);
          const result4 = numberObj4.divide([1, 0]);
          expect(result4).toBe('1000000');
        });
      });
  });