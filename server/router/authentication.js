const jwt = require("jsonwebtoken")
const express = require("express");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs")
const router = express.Router();

router.get("/", (req, resp) => {
  console.log("homepage");
  resp.send("homepage");
});
// using Promises------------

// router.post("/register",(req, resp) => {
//   // console.log(req.body.name);
//   const { name, email, phone, work, password, cpassword } = req.body; //object destructuring
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return resp.status(422).json({ error: "please enter all fields" }); //422-unprocessable entry
//   }
//   User.findOne({ email: email })
//     .then((userexist) => {
//       if (userexist) {
//         return resp.status(422).json({ error: "user is already registered" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           return resp.status(201).json({ message: "Registration Successful" });
//         })
//         .catch((err) => {
//          return  resp.status(500).json({ error: "Registration Failed" });

//         });
//     })
//     .catch((err) => console.log(err));

//   // resp.json({ message: req.body });
//   // console.log({ message: req.body });
// });

// using async await------------

router.post("/register", async (req, resp) => {
  // console.log(req.body.name);
  const { name, email, phone, work, password, cpassword } = req.body; //object destructuring
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return resp.status(422).json({ error: "please enter all fields" }); //422-unprocessable entry
  }

  try {
    const userexist = await User.findOne({ email: email });
    if (userexist) {
      return resp.status(422).json({ error: "user is already registered" });
    } else if (password != cpassword) {
      return resp
        .status(422)
        .json({ error: "please enter both the password same" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();
      return resp.status(201).json({ message: "Registration Successful" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route
router.post("/login", async (req, resp) => {
  // console.log(req.body);
  // resp.json(req.body  );
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return resp.status(400).json({ error: "Please enter all the data" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken()
      console.log(token)

      if (isMatch) {
        resp.json({ message: "User signin successfully" });
      } else {
        resp.status(400).json({ error: "Please enter valid credentials" });
      }
    }
    else {
      resp.status(400).json({ error: "Please enter valid credentials" });
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
