const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());  // Enable CORS
app.use(express.json());

let menuItems = [
  { id: 1, name: "Cheese Pizza", price: 10, description: "Classic cheese pizza with mozzarella cheese" },
  { id: 2, name: "Pepperoni Pizza", price: 12, description: "Pepperoni pizza with spicy pepperoni slices" },
  { id: 3, name: "Margherita Pizza", price: 11, description: "Margherita pizza with fresh basil and tomatoes" },
  { id: 4, name: "BBQ Chicken Pizza", price: 14, description: "BBQ chicken pizza with smoky BBQ sauce and grilled chicken" },
  { id: 5, name: "Veggie Pizza", price: 13, description: "Veggie pizza with bell peppers, onions, olives, and mushrooms" },
  { id: 6, name: "Beef Burger", price: 8, description: "Juicy beef burger with lettuce, tomato, and cheese" },
  { id: 7, name: "Chicken Burger", price: 9, description: "Grilled chicken burger with mayo and pickles" },
  { id: 8, name: "Veggie Burger", price: 7, description: "Delicious veggie burger with a blend of vegetables and spices" },
  { id: 9, name: "Caesar Salad", price: 6, description: "Classic Caesar salad with Romaine lettuce, and Parmesan cheese" },
  { id: 10, name: "Greek Salad", price: 7, description: "Fresh Greek salad with olives, feta cheese, and cucumbers" },
  { id: 11, name: "Spaghetti Bolognese", price: 15, description: "Spaghetti with rich Bolognese sauce and Parmesan cheese" },
  { id: 12, name: "Chicken Alfredo", price: 16, description: "Creamy Alfredo pasta with grilled chicken and Parmesan cheese" }
];

const orders = [];

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.post('/api/orders', (req, res) => {
  const order = req.body;
  
  // Check if the order is not empty
  if (order.length > 0) {
    orders.push(order);
    res.status(201).json(order);
  } else {
    res.status(400).json({ error: 'Order cannot be empty' });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
