const express = require("express");
const cors = require('cors');
require('dotenv').config();
const app = express();
const {db}=require('./model/index.js')
const PORT = process.env.PORT || 3000;

const {router:authorRouter} =require('./routes/author.js')
const { router: blogRouter } = require("./routes/blog.js");
const { loginAuth } = require("./middleware/auth.js");
app.use(cors({
origin:'*'
}))
app.use(express.json());
app.use("/author", authorRouter);
app.use("/blog", loginAuth, blogRouter);



app.listen(PORT, () => {
    db();
  console.log(`server is running on http://127.0.0.1:${PORT}`);
});
