const app = require('./app');
const mongoose = require('mongoose');
const config = require("./config/config");

let server=config.port;

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));

const PORT = process.env.PORT_NO || 3000
app.listen(server, () => {
  console.log(`Server listening on port ${PORT}`);
});
