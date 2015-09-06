var total = 0,
numArray = process.argv.slice(2);

numArray.forEach(function(number){
  total += Number(number);
})

console.log(total)