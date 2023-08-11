const { Router } = require("express");
const pool = require("../db");
const router = Router();
const {
  getAllFiles,
  getOneFile,
  updateFile,
  createFile,
  deleteFile,
} = require("../controllers/files.controller");

// GET ALL
router.get("/files", getAllFiles);

// GET ONE
router.get("/files/:id", getOneFile);

// POST: AGREGAR
router.post("/files", createFile);

// PUT: ACTUALIZAR
router.put("/files/:id", updateFile);

// DELETE: BORRAR
router.delete("/files/:id", deleteFile);

module.exports = router;
