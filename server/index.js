const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')


app.use(bodyParser.json());
app.use(cors);
app.use(bodyParser.urlencoded({extended:true}))





// Mongodb
const db = 'mongodb+srv://Admin:Admin123@cluster0.bzxopzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const Product = mongoose.model('Product', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String
}));

// CRUD
const SaleSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  }
});

const Sale = mongoose.model('Sale', SaleSchema);
// Create
app.post('/api/products', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      description
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Read
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Read
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

// Update
app.put('/api/products/:id', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'not found' });
    }

    product.name = name;
    product.price = price;
    product.description = description;

    product = await product.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

// Delete
app.delete('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'not found' });
    }

    await product.remove();

    res.json({ msg: 'removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

const PORT = process.env.PORT || 1111;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
