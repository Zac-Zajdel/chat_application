import { Console } from 'console';
import express, { Request, Response } from 'express';
import mongoose = require('mongoose');
import { reduceEachLeadingCommentRange } from 'typescript';
import User from "./src/models/users";

const router = express.Router();

router.get('/add-user', (req: Request, res: Response) => {
  const user = new User({
    first_name: 'Zac',
    last_name: 'Zajdel',
    username: 'zaczajdel2131',
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

router.post('/login', (req: Request, res: Response) => {
  console.log(req.body);
  res.status(202).send('Success');
});

module.exports = router;