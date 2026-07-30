const express = require('express');
const app = express();
const products=require("./data/products");
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render("home");
});

app.get('/products', (req, res) => {
    res.render("product", { products });
});

app.get('/create', (req, res) => {
    res.render("create");
});
app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        price: parseFloat(req.body.price)
    };
    products.push(newProduct);
    res.redirect('/products');
});

app.post("/products/delete/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = products.findIndex(product => product.id === id);

    if (index !== -1) {
        products.splice(index, 1);
    }

    res.redirect("/products");
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(product => product.id === id);

    res.render("show", { product });
});

app.get('/products/:id/edit', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(product => product.id === id);
    res.render("edit", { product });
});
app.post("/products/:id/edit", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).send("Product not found");
    }

    product.name = req.body.name;
    product.image = req.body.image;
    product.description = req.body.description;
    product.price = Number(req.body.price);

    res.redirect(`/products/${id}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});