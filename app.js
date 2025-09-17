import express from 'express';
import users from './users.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users/count', async (req, res) => {
  const userCount = await users.getUserCount();
  res.send(userCount);
})

app.get('/users', async (req, res) => {
  const usersData = await users.getUsers();
  res.send(usersData);
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id
  const userData = await users.getUser(id);
  res.send(userData);
})

app.post('/users', async (req, res) => {
  const user = await users.createUser(req.body);
  res.statusCode(201).send(user);
})

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.statusCode(500).send('Something broke!');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Express server is listening on PORT ', PORT);
})