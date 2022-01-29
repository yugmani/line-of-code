// Import stylesheets
import './style.css';

const array1 = ['a', 'c', 'e', 'g', 'c', 'k', 'e', 'c'];
const array2 = ['abc', 'def'];

// 1 Removing duplicates from an array
const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates(array1));
// ["a", "c", "e", "g", "k"]

// removes duplicate entries, keep in mind that it works only for entries with primitive values (string, number, bigint, boolean, undefined, symbol, and null). Preserves the order of the entries and returns a copy of the array.

// 2 Counting occurrences of each element.
const occurrenceMap = (arr) =>
  arr.reduce(
    (acc, current) => ((acc[current] = (acc[current] || 0) + 1), acc),
    {}
  );

console.log(occurrenceMap(array1));
// {a: 1, c: 3, e: 2, g: 1, k: 1};

//Returns an object where the keys are the array entries and the values the number of their occurrences.

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
