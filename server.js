import express from 'express';
const app=express()

// Middleware
app.use(express.json()); // For parsing JSON request bodies

// Routes
app.get('/Home', (req, res) => {
    res.send("Home.jsx")
  console.log('Home started');
});
app.get('/Seg_guide', (req, res) => {
  res.send('Seg_guide page');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});