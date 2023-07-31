const { Router } =  require("express")
const router = Router()


// GET ALL
router.get('/files',(req,res)=>{
    res.send("Obteniendo todos los archivo...")
})

// GET ONE
router.get('/files:id',(req,res)=>{
    res.send("Obteniendo un archivo...")
})

// POST: AGREGAR
router.post('/files',(req,res)=>{
    res.send("Agregando un archivo...")
})

// PUT: ACTUALIZAR
router.put('/files',(req,res)=>{
    res.send("Actualizando un archivo...")
})

// DELETE: BORRAR
router.delete('/files',(req,res)=>{
    res.send("Borrando un archivo...")
})

module.exports = router