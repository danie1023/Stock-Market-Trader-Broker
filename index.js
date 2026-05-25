const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Elite Stock Broker API is running!');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Simple test response for now
  res.json({
    message: 'Login successful (demo)',
    user: { email },
    token: 'demo-jwt-token-12345'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
