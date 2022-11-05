const mongoose=require("mongoose")
const DB = process.env.DATABASE;
const PORT = process.env.PORT;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => console.log(`no connection`));
