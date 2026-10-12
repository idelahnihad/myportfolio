import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";
const router = express.Router();
router
  .route("/api/qualifications")
  .get(qualificationCtrl.list)
  .post(qualificationCtrl.create);
router.route("/api/qualifications/:qualificationId").get(qualificationCtrl.read);
router.route("/api/qualifications/:qualificationId").put(qualificationCtrl.update);
router
  .route("/api/qualifications/:qualificationId")
  .delete(qualificationCtrl.remove);
router.route("/api/qualifications").delete(qualificationCtrl.removeAll);
router.param("qualificationId", qualificationCtrl.qualificationByID);
export default router;
