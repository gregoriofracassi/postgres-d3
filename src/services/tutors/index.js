import express from "express";
import models from "../../db/index.js";
const Tutor = models.Tutor;
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Tutor.bulkCreate([
        { name: "Diego", surname: "Banovaz" },
        { name: "Riccardo", surname: "Gulin" },
        { name: "Stefano", surname: "Mizeli" },
      ]);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  });

export default router;
