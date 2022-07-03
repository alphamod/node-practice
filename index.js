const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Welcome to Node Server",
  });
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "syed",
    },
    {
      name: "john",
    },
    {
      name: "foo",
    },
  ];

  res.send({
    data: users,
    success: true,
    message: "users data sent successfully"
  })
});

app.post("/login", (req, res)=>{
    //login logic
})

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
