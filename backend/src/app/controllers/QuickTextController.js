const db = require("../models");

const QuickText = db.quickText;

class QuickTextController {
  // [get] /quick-text
  async getQuickText(req, res, next) {
    try {
      const text = await QuickText.findAll({ raw: true });
      res.send(text[0]);
    } catch (error) {
      console.log(error);
    }
  }

  // [post] /quick-text/save-quick-text/:quicktext_id
  async saveQuickText(req,res,next) {
    try {
      const quicktext_id = req.params.quicktext_id;

      const quicktextData = {
        item: req.body.item
      }
      
  
      if(quicktext_id === "-1") {
        const quicktext = await QuickText.create(quicktextData);
        res.send(quicktext);
      } else {
        const quicktext = await QuickText.update(quicktextData, {
          where: {
            quicktext_id: quicktext_id
          }
        });
        res.send(quicktext);
      }
      

    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new QuickTextController();
