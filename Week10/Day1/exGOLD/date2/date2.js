function getDaysLived(birthdate) {
    // Step 1: Convert the birthdate string to a Date object
    const birthDateObj = new Date(birthdate);
  
    // Step 2: Get the current date as a Date object
    const currentDate = new Date();
  
    // Step 3: Calculate the difference between the two dates in milliseconds
    const timeDifference = currentDate - birthDateObj;
  
    // Step 4: Convert the milliseconds to days
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  
    // Round the result to get a whole number of days
    const roundedDaysDifference = Math.floor(daysDifference);
  
    return roundedDaysDifference;
  }

  
  
  
module.exports = {
    getDaysLived
}