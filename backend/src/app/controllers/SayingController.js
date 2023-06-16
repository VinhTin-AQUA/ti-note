const db = require("../models/index");

const Saying = db.niceSaying;
const Op = db.Op;

class SayingController {
  // [get] /saying
  async getSaying(req, res, next) {
    try {
      const sayings = await Saying.findAll({ raw: true });
      res.send(sayings);
    } catch (error) {
      console.log(error);
    }
  }

  // [posr] /saying/create-saying
  async createSaing(req, res, next) {
    try {
      const sayingData = {
        saying_item: req.body.saying_item,
        linkImg: req.body.linkImg,
      };
      const newSaying = await Saying.create(sayingData);
      res.send(newSaying);
    } catch (error) {
      console.log(error);
    }
  }

  // [put] /saying/update/:saying_id
  async updateSaying(req, res, next) {
    try {
      const saying_id = req.params.saying_id;

      const data = {
        saying_item: req.body.saying_item,
      };

      const dataUpdate = await Saying.update(data, {
        where: {
          saying_id: saying_id,
        },
      });
      res.send(dataUpdate);
    } catch (error) {
      console.log(error);
    }
  }

  // [delete] /saying/delete-saying/:saying_id
  async deleteSaying(req, res, next) {
    try {
      const saying_id = req.params.saying_id;

      const dataDelete = await Saying.destroy({
        where: {
          saying_id: saying_id,
        },
      });

      res.send(saying_id);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new SayingController();
