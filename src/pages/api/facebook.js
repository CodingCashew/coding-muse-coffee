import clientPromise from "../../../lib/mongodb";
// import bcrypt from "bcrypt";
// const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken'
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

const handler = async (req, res) => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.CLIENT_ID_FB,
        clientSecret: process.env.CLIENT_SECRET_FB,
        callbackURL:
          "http://localhost:3000/api/facebook/follow-your-heart-english",
      },
      function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    )
  );

  // first time logging in with Facebook
  // try {
  //   const { email } = req.body;
  //   const hashedPassword = await bcrypt.hash(req.body.password, 10)
  //   const client = await clientPromise;
  //   const db = client.db("Langship");
  //   const user = await db.collection("Users").insertOne({ email: email, password: hashedPassword});
  //   res.json(user);
  // } catch (e) {
  //   console.error(e);
  // }
  // has previously logged in with Facebook
  // try {
  //   const { email } = req.body;
  //   const hash = await bcrypt.hash(req.body.password, 10)
  //   const client = await clientPromise;
  //   const db = client.db("Langship");
  //   const user = await db.collection("Users").findOne({ email: email } );
  //   if (user) {
  //     const isValid = await bcrypt.compare(req.body.password, user.password)
  //     if (!isValid) {
  //       res.json('Incorrect email or password');
  //     } else {
  //       res.json('Success!! Woot, woot!');
  //     }
  //   }
  // } catch (e) {
  //   console.error(e);
  // }
};

export default handler;
