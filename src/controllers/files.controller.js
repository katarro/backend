const pool = require("../db");

const getAllFiles = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM files");
    res.status(200).send(result.rows);
  } catch (error) {
    console.error(error.message);
    res.json({ error: error.message });
  }
};

const getOneFile = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("SELECT * FROM files WHERE id = $1", [id]);

    if (result.rows.length > 0) {
      res.status(200).send(result.rows[0]);
    } else {
      res.status(404).send("El archivo no fue encontrado");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

const createFile = async (req, res) => {
  // Lee las porpiedades del objeto que estoy ingresando
  // hace el query para insertar
  // lee el resultado
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      "INSERT INTO files (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    console.log(result.rows[0]);
    res.send("Creando un archivo...");
  } catch (error) {
    console.error(error.message);
    res.json({ error: error.message });
  }
};
const updateFile = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;

    const result = await pool.query(
      "UPDATE files SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );
    console.log(result.rows[0]);
    if (result.rowCount.length === 0) {
      res.status(404).json({ message: "Archivo no encontrado" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.json({ error: error.message });
  }
};

const deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM files WHERE id = $1", [id]);

    if (result.rowCount === 0)
      return res.status(404).json({
        message: "Archivo no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllFiles: getAllFiles,
  getOneFile: getOneFile,
  createFile: createFile,
  updateFile: updateFile,
  deleteFile: deleteFile,
};
