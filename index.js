var Check_Leap = (year) => 
{
 
  if(year%4 === 0) {
    
    if(year%400 !== 0 && year%100 === 0) {
      return "Non Leap Year";
    }
    
    return "Leap Year";
  }
    
  
  return "Non Leap Year";

};



var Perfect_Check = (N) => 
{
      let sum = 1;
      
      for(let i = 2; i <= N/2; i++)  {
        if(N/i === 0) {
          sum += i;
        }
      }
      
      if(sum == N) {
        return "YES"
      }
      
      return "NO";
};



var Reverse_Number = (N) => 
{
  let n = String(N).split("");
  
  return parseInt(n.reverse().join(""));
};


var Reverse_Number = (N) => 
{
  let n = String(N).split("");
  
  return parseInt(n.reverse().join(""));
};


var Minimal_Angle = (h, m) => 
{
    let a1 = 0, a2 = 0;
    
    a1 = Math.abs(((11/2)*m) - (30*h));
    a2 = Math.abs(360 - (30*h) + ((11/2)*m));
    
    if(a1 < a2) {
      return a1;
    }
    
    return a2;
    
};


var Substring_Check = (S1, S2) => 
{
    if(S1.includes(S2)) {
      return "YES";
    } 
    
    return "NO";
};