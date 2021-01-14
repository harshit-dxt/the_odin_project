const sumAll = function(num1, num2){
  let sum = 0;

  if(typeof num1 !== 'number' || typeof num2 !== 'number') 
    return 'ERROR';
  
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);


  if(start < 0) return 'ERROR';

  for(let i = start; i <= end; ++i)  sum += i;
  return sum;
}

module.exports = sumAll;