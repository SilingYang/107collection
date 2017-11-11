'use strict';

function get_letter_interval_2(number_a, number_b) {
 
  var result = [];
  /*let fir_a=number_a/26;
  let sec_a=number_a%26;
  let fir_b=number_b/26;
  let sec_b=number_b%26;
  if(number_a<=number_b)
  {

    if(number_a<27)
    {
      if(number_b<27)
      {
        for(let i=number_a;i<=number_b;i++)
        {
          result.push(String.fromCharCode(96+i));
        }
      }
      else
      {
        for(let i=number_a;i<27;i++)
        {
          result.push(String.fromCharCode(96+i));
        }
        for(let i=27;i<=number_b;i++)
        {
          let fir=i/26;
          let sec=i%26;
          result.push(String.fromCharCode(96+fir)+String.fromCharCode(96+sec));
        }
      }//else
    }
    else{//number_a>=27
      for(let i=number_a;i<=number_b;i++)
      {
        let fir=i/26;
        let sec=i%26;
        result.push(String.fromCharCode(96+fir)+String.fromCharCode(96+sec));
      }

    }
  }
  else
  {//number_a>number_b
    if(number_b<27)
    {
      if(number_a<27)
      {
        for(let i=number_a;i>=number_b;i--)
        {
          result.push(String.fromCharCode(96+i));
        }
      }
      else
      {//number_a>27
        for(let i=number_a;i>=27;i--)
        {
          let fir=i/26;
          let sec=i%26;
          result.push(String.fromCharCode(96+fir)+String.fromCharCode(96+sec));
        }
        for(let i=26;i>-number_b;i--)
        {
          result.push(String.fromCharCode(96+i));
        }
      }

    }
    else{//b>=27
      for(let i=number_a;i>=number_b;i--)
      {
        let fir=i/26;
        let sec=i%26;
        result.push(String.fromCharCode(96+fir)+String.fromCharCode(96+sec));
      }
    }

  }
  return result;*/
  if(number_a<=number_b)
  {
    for(let i=number_a;i<=number_b;i++)
    {
      if(i<27)
      {
        result.push(String.fromCharCode(96+i));
        
      }
      else{
        let fir=Math.floor((i-27)/26);
        let sec=(i-27)%26;
        result.push(String.fromCharCode(97+fir)+String.fromCharCode(97+sec));
      }
    }
  }
  else 
  {
    for(let i=number_a;i>=number_b;i--)
    {
      if(i<27)
      {
        result.push(String.fromCharCode(96+i));
        
      }
      else{
        let fir=(i-27)/26;
        let sec=(i-27)%26;
        result.push(String.fromCharCode(97+fir)+String.fromCharCode(97+sec));
      }
    }
  }
}

module.exports = get_letter_interval_2;

