'use strict';

function get_letter_interval(number_a, number_b) {
  let result=[];
  /*var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if(number_a<=number_b)
  {
    for(let i=number_a;i<=number_b;i++)
    {
      result.push(letter[i-1]);
    }
  }
  else{
    for(let i=number_a;i>=number_b;i--)
    {
      result.push(letter[i-1]);
    }
  }*/
  if(number_a<=number_b)
  {
    for(let i=number_a;i<=number_b;i++)
    {
      result.push(String.fromCharCode(96+i));
    }
  }
  else{
    for(let i=number_a;i>=number_b;i--)
    {
      result.push(String.fromCharCode(96+i));
    }
  }
  return result;
}

module.exports = get_letter_interval;
