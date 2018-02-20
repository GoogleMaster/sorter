class Sorter {
  constructor() {
    // your implementation
      this.elements = [];
      this.count = 0;
  }

  add(element) {
    // your implementation
      this.count = this.elements.push(element);
  }

  at(index) {
    // your implementation
      return this.elements[index];
  }

  get length() {
    // your implementation
      return this.count;
  }

  toArray() {
    // your implementation
      return this.elements;
  }

  sort(indices) {
    // your implementation
      var i;
      var testSortArray = [];
      indices.sort(function (x, y) {return x-y;})
      for(i = 0; i < indices.length; i++){
          testSortArray.push(this.elements[indices[i]]);
      }
      testSortArray.sort(function (x, y) {return x-y;});
      for(i = 0; i < testSortArray.length; i++) {
          this.elements[indices[i]] = testSortArray[i];
      }
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;