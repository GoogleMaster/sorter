class Sorter {
  constructor() {
    // your implementation
      this.elements = [];
  }

  add(element) {
    // your implementation
      this.elements.push(element);
  }

  at(index) {
    // your implementation
      return this.elements[index];
  }

  get length() {
    // your implementation
      return this.elements.length;
  }

  toArray() {
    // your implementation
      return this.elements;
  }

  sort(indices) {
    // your implementation
      var i;
      var testSortArray = [];
      indices.sort(function (x, y) {return x-y;});
      for(i = 0; i < indices.length; i++){
          testSortArray.push(this.elements[indices[i]]);
      }
      //testSortArray.sort(function (x, y) {return x-y;});
      testSortArray.sort(this.compareFunction || ((left, right) => left - right));
      for(i = 0; i < testSortArray.length; i++) {
          this.elements[indices[i]] = testSortArray[i];
      }
  }

  setComparator(compareFunction) {
    // your implementation
      this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;