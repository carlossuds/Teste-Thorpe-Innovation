/* eslint-disable no-underscore-dangle */
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import User from '../schemas/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation failed');
    }

    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const user = await User.create(req.body);

    return res.json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      oldPassword: Yup.string().required().min(6),
      password: Yup.string().required().min(6),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation failed');
    }
    const { oldPassword } = req.body;

    const user = await User.findById(req.userId);

    if (oldPassword && !(await bcrypt.compare(oldPassword, user.password))) {
      res.status(400).json({ error: 'Wrong password' });
    }

    if (!req.userId) return res.status(401).json('Non authorized');

    await user.updateOne({
      ...req.body,
      password: await bcrypt.hash(req.body.password, 8),
    });

    return res.json(`${user.email}'s profile updated!`);
  }

  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  }

  async destroy(req, res) {
    const user = await User.findById(req.userId);

    if (!req.userId) return res.status(401).json('Non authorized');

    await user.remove();

    return res.json({ msg: `User ${user.email} was deleted!` });
  }
}
export default new UserController();
