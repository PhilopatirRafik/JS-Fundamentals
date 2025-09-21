let arg = process.argv[2];
let num = parseInt(arg);

if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + num);
}
