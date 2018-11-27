const calculateYears = (principal, interest, tax, desired) => {
  let years = 0;
  if(principal === desired){
    years = 0;
  }
  let start = principal;
  while(start < desired){
    let calcInt = start * interest;
    let calcTax = calcInt * tax
    let sum = start + calcInt - calcTax;
    start === sum;
    start += calcInt - calcTax;
    years++;
  
    }
  return years;
};

calculateYears(1000,0.01625,0.18,1200)/*?*/;