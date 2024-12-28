function foo(a, b) {
  // Type checking before addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return NaN; // Or throw an error
  }
}

console.log(foo(1, '1')); // Output: NaN
console.log(foo(1, 1)); //Output: 2