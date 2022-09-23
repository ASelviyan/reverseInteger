//PROBLEM
// given a integer return that integer in reverse 
// this input will be a 32-bit ineteger
// return the reverse integer if the reverse interger is a 32-bit size 
// if its bigger then 32 bit then return 0

//CONSTRAINTS
// the x has to be bigger and equal then -2^31 or smaller and equal to 2^31





var reverse = function(x) {
    let negative = false
    // if the number is negative then turn the negavtive to true 
    if(x < 0){
        negative = true 
        // and turn the number into a positive
    }
    x = Math.abs(x)
// turn the integer into a string with toString() method  
    let string = x.toString()
    
// turn the string into an array weith split() method
    let numberArray = string.split("")
    
// use the reverse method to reverse the numbers in the array 
    let reverseArray = numberArray.reverse()
// put the numbers back together with join() method
     let joined = reverseArray.join('')
      console.log('joined', joined)
// change the string back into a number with Number() method 
    let reversedNum = Number(joined)
      console.log(reversedNum)
    
// if the number is bigger then Math.pow(2,32) then return 0
    if(reversedNum < Math.pow(2,31)){
        // if the number was negative then turn into a negative before returning 
        if(negative == true){
            return -reversedNum
        }
        return reversedNum
        // if not bigger then that then return the reverse number 
    }else {
        return 0
    }




};