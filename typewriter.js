const sentence = "hello there from lighthouse labs";

let count;
for (const char of sentence) {
  if (count === undefined) {
    count = 50;
  }
  setTimeout(() => {
    process.stdout.write(char);
  }, count);
  count += 50;
}
setTimeout(() => {
  console.log();
}, count);