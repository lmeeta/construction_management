import express from "express";

import {
  PostConstructManage,
  GetManage,
  PatchManage,
  DeleteManage,
} from "../controller/ConstructController.js";

const ConstructRoutes = express.Router();

ConstructRoutes.post("/construct", PostConstructManage);
ConstructRoutes.get("/constructions", GetManage);
ConstructRoutes.patch("/construct/:id", PatchManage);
ConstructRoutes.delete("/construct/:id", DeleteManage);

export default ConstructRoutes;
