'use strict';



const showwelcomeMessage =async (req, res, next) => {
    res.json('This is MeenakshiControlSystem API'); 
  }
   
module.exports = {
    showwelcomeMessage
}