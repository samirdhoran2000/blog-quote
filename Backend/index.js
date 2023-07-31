const express = require("express");
const app = express();
const {db}=require('./model/index.js')
const PORT = process.env.PORT || 3000;

const {router:authorRouter} =require('./routes/author.js')

app.use(express.json());
app.use("/author", authorRouter)



app.listen(PORT, () => {
    db();
  console.log(`server is running on http://127.0.0.1:${PORT}`);
});
