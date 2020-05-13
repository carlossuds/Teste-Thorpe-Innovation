/* eslint-disable no-underscore-dangle */
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import User from '../schemas/User';
import ToDo from '../schemas/ToDo';

class ToDoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation failed');
    }

    const user = await User.findById(req.userId);

    const todoExists = await ToDo.findOne({
      $and: [{ title: req.body.title }, { user: user }],
    });

    if (todoExists)
      return res.status(400).json({ error: 'ToDo already exists' });

    const todo = await ToDo.create({ user: user, title: req.body.title });

    return res.json(todo);
  }

  async index(req, res) {
    const user = await User.findById(req.userId);

    const todos = await ToDo.find({ user });

    return res.json(todos);
  }

  async destroy(req, res) {
    const todo = await ToDo.findById(req.params._id);

    await todo.remove();

    return res.json({ msg: `ToDo ${todo.title} was deleted!` });
  }
}
export default new ToDoController();
