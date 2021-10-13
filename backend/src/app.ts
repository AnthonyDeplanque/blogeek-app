require('dotenv').config();
const cors = require('cors');
const path = require('path');



import { router } from './routes/index';
const express = require('express');
const app = express();

const port = process.env.PORT || 1234;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use('/file-storage', express.static('file-storage'));

router(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

