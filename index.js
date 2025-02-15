const express = require("express");
const Producto = require("./models/Producto");
const cors = require("cors");
const { where } = require("sequelize");

const app = express();

app.use(express.json());

app.use(cors());

app.listen(5000, () => {
  console.log("ejecutando en puerto 5000");
});

// ----------------------------metodos de Productos-------------------------------//
app.get("/producto", async (req, res) => {
  try {
    //SELECT * FROM PRODUCTO
    const producto = await Producto.findAll();
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ Error: "Ocurrio un error en la peticion" });
  }
});

app.post("/producto", async (req, res) => {
  try {
    console.log(req.body);
    //insert into producto (id,nombre, precio,isv,img) values ('','','','','')
    const producto = await Producto.create(req.body);
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ Error: "Ocurrio un error en la peticion" });
  }
});

app.put("/producto/:id", async (req, res) => {
  try {
    //UPDATE PRODUCTO SET nombre = '', precio = '', isv = '', img = '' WHERE id = 'id'
    const [updated] = await Producto.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      res.status(200).json({ mensaje: "Registro actualizado" });
    } else {
      res.status(400).json({ mensaje: "Registro no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ Error: "Ocurrio un error en la peticion" });
  }
});
