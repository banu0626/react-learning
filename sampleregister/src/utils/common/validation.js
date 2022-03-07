export const isValidEmailAddress = (email) => {
    if (email && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return true;
    }
    return false;
  };
  export const isValidPhoneNumber=(number)=>{
      if(number && number.match(/^[6-9]\d{9}$/)){
          return true;
      }
      return false;
  }