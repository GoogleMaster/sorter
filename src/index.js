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
      var testSortArray = [];
      for(var i = 0; i < indices.length; i++){
          testSortArray.push(this.elements[i]);
      }
      for(i = 0; i < testSortArray.length; i++){
          var min = i;
          for (var j = i + 1; j < testSortArray.length; j++){
              if(testSortArray[j] < testSortArray[min]){
                  min = j;
              }
          }
          var k = testSortArray[min];
          testSortArray[min] = testSortArray[i];
          testSortArray[i] = k;
      }
      for(i = 0; i < testSortArray.length; i++) {
          this.elements.splice(indices[i], 1, testSortArray[i]);
      }
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;