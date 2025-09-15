const evens = [];
for (let i = 2; i <= 140; i += 2) {
  evens.push(i);
}
console.log(evens.join(' '));
alert("1 dan 140 gacha bo'lgan juft sonlar:\n" + evens.join(' '));

const odds = [];
for (let i = 101; i <= 239; i += 2) {
  odds.push(i);
}
console.log(odds.join(' '));
alert("100 dan 240 gacha bo'lgan toq sonlar:\n" + odds.join(' '));

const divisibleBy7 = [];
for (let i = 40; i <= 180; i++) {
  if (i % 7 === 0) divisibleBy7.push(i);
}
console.log(divisibleBy7.join(' '));
alert("40 dan 180 gacha bo'lgan sonlar ichidan 7 ga bo'linadiganlar:\n" + divisibleBy7.join(' '));

const results = [];
for (let i = 50; i <= 440; i++) {
  if (i % 11 === 0) results.push(i);
}
console.log(results.join(' '));
alert("50 dan 440 gacha bo'lgan, 11 ga bo'linadigan sonlar:\n" + results.join(' '));

const divisibleBy25 = [];
for (let i = 90; i <= 210; i++) {
  if (i % 25 === 0) divisibleBy25.push(i);
}
console.log(divisibleBy25.join(' '));
alert("90 dan 210 gacha bo'lgan, 25 ga bo'linadigan sonlar:\n" + divisibleBy25.join(' '));

const divisibleBy5and9 = [];
for (let i = 25; i <= 690; i++) {
  if (i % 5 === 0 && i % 9 === 0) divisibleBy5and9.push(i);
}
console.log(divisibleBy5and9.join(' '));
alert("25 dan 690 gacha bo'lgan sonlar ichida 5 ga va 9 ga bo'linadiganlar:\n" + divisibleBy5and9.join(' '));

const divisibleByAll = [];
for (let i = 1; i <= 4000; i++) {
  if (i % 11 === 0 && i % 3 === 0 && i % 9 === 0) divisibleByAll.push(i);
}
console.log(divisibleByAll.join(' '));
alert("1 dan 4000 gacha bo'lgan sonlar ichida 11 ga, 3 ga va 9 ga bo'linadiganlar:\n" + divisibleByAll.join(' '));
