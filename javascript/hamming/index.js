// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.


function Hamming (sequence1, sequence2) {
    this.compute = function(sequence1, sequence2) {
        if (sequence1.length != sequence2.length) {
            throw("DNA strands must be of equal length.")
        }
        var diff = 0;
        for (i = 0; i < sequence1.length; i++) {
          if (sequence1[i] != sequence2[i]) {
            diff = diff + 1;
          }
        }
        return diff;
    }
}

module.exports = Hamming;
