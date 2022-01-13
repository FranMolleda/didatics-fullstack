const News = require("../models/news");
const { validationResult } = require("express-validator");

exports.getNews = async (req, res) => {
  try {
    const allNews = await News.find().sort({
      date: -1,
    });
    res.json(allNews);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};

exports.postNews = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({
      errores: errores.array(),
    });
  }

  const report = req.body;

  // Revisar y quitar al crear el id desde el front

  const randomId = Math.floor(Math.random() * (1000000000 - 1)) + 1;

  try {
    const newNews = await new News(report);

    // Revisar y quitar al crear el id desde el front
    if (req.body.id) {
      newNews.id = req.body.id;
    } else {
      newNews.id = randomId;
    }

    await newNews.save();
  } catch (error) {
    console.log(error);
  }

  res.send(report);
};

exports.putNews = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({
      errores: errores.array(),
    });
  }

  const report = await News.findById(req.params.id);

  if (!report) {
    return res.status(404).json({
      msg: "News not found",
    });
  }

  const reportUpdated = req.body;

  try {
    const newsUpdated = await News.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      reportUpdated,
      {
        new: true,
      }
    );
    return res.status(200).send(newsUpdated);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const report = await News.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        msg: "News not found",
      });
    }

    await News.findOneAndRemove({
      _id: req.params.id,
    });
    res.json({
      msg: "News delete ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Server Error",
    });
  }
};
