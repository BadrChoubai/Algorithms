const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  let dateEntered = new Date(currentDate);
  let dateExpires = new Date(expirationDate);
  let isNotExpired = dateEntered <= dateExpires;
  let isValid = enteredCode === correctCode;  
  return isValid && isNotExpired;
};

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015");
checkCoupon("123a", "123", "July 9, 2015", "July 2, 2015");
