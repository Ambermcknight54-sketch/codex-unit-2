// Level 14 — Debugging broken loops
// TODO: Repair the 10 broken `for` loop snippets below so each parses and prints the intended sequence.
// Each snippet is intentionally broken; students should fix one at a time.

1; //Fixed: Added missing closing parenthesis ')' in the loop header
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. Fixed: Added missing initialization keyword 'let'
for (let j = 0; j < 3; j++) {
  console.log(j);
}

// 3. Fixed: Changed commas to semicolons ';' to separate expressions
for (let k = 1; k <= 5; k++) {
  console.log(k);
}

// 4. Fixed: Added the missing updater/increment expression (count++) to prevent an infinite loop
for (let count = 0; count < 4; count++) {
  console.log(count);
}

// 5. Fixed: Added missing opening curly brace '{' for the loop body block
for (let val = 10; val > 5; val--) {
  console.log(val);
}

// 6. Fixed: Corrected the condition operator from assignment (=) to a comparison (<=)
for (let num = 1; num <= 3; num++) {
  console.log(num);
}

// 7. Fixed: Corrected the decrement direction (step--) so the loop counts down toward the limit
for (let step = 5; step >= 1; step--) {
  console.log(step);
}

// 8. Fixed: Consolidated onto standard single-statement lines and added the missing closing brace '}'
for (let index = 0; index < 2; index++) {
  console.log(index);
}

// 9. Fixed: Corrected the loop condition variable name to match the initializer variable (item)
for (let item = 0; item < 4; item++) {
  console.log(item);
}

// 10. Fixed: Changed the expression separator from a colon to a semicolon ';'
for (let score = 10; score <= 30; score += 10) {
  console.log(score);
}
