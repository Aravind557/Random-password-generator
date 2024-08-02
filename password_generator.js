 function generatorPassword(length,includesLowerCase,includesUpperCase,includesNumbers,includesSpecialChar){
  
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz" ;
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
  const numberChars    = "0123456789";
  const specialChars  = "!@#$%^&*()_+=-,";

  let allowedChars = "";
  let password = "";

  allowedChars+= includesLowerCase? lowerCaseChars : "" ;
  allowedChars+= includesUpperCase? upperCaseChars : "" ;
  allowedChars+= includesNumbers? numberChars : "" ;
  allowedChars+= includesSpecialChar? specialChars : "" ;

  if(length<=0 || allowedChars.length===0){
    return `(Please enter atleast one character)`
  }
  
  for(let i=0; i<length; i++){
    const randomIndex = Math.floor(Math.random()* allowedChars.length);
    password+= allowedChars[randomIndex];
  }
   return password;

 } 
 
 const passwordLength = 8;
 const includesLowerCase = true;
 const includesUpperCase = true;
 const includesNumbers = true;
 const includesSpecialChar = true;

 const password = generatorPassword(passwordLength,includesLowerCase,includesUpperCase,includesNumbers,includesSpecialChar);

  console.log(`Generated password: ${password}`);

