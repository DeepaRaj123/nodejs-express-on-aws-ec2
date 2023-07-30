'use strict';



const showwelcomeMessage =async (req, res, next) => {
    res.json('This is Perfection Electronics API'); 
  }
   
module.exports = {
    showwelcomeMessage
}
