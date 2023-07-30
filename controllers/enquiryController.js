'use strict';



const showwelcomeMessage =async (req, res, next) => {
    res.json('This is Perfection API'); 
  }
   
module.exports = {
    showwelcomeMessage
}