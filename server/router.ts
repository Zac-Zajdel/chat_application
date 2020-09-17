import express, { Request, Response } from 'express';
import mongoose = require('mongoose');
import User from "./src/models/users";

const router = express.Router();

router.get('/add-user', (req: Request, res: Response) => {
  const user = new User({
    first_name: 'Zac',
    last_name: 'Zajdel',
    username: 'zaczajdel213',
    email: 'zaczajdel213@gmail.com',
    password: 'Password',
    gender: "M",
    birthdate: "02-13-1998"
  });

  user.save().then(result => {
    console.log(result);
  }).catch(error => {
    console.log(error)
  });
});

router.get('/', (req: Request, res: Response) => {
  console.log("Hello World");
});

module.exports = router;