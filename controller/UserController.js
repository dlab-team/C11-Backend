const { User } = require('../models');

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving users' });
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving user' });
    }
  },

  createUser: async (req, res) => {
    const { first_name, last_name, email } = req.body;
    try {
      const newUser = await User.create({
        first_name,
        last_name,
        email,
      });
      res.json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating user' });
    }
  },

  updateUser: async (req, res) => {
    const userId = req.params.id;
    const { first_name, last_name, email } = req.body;
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        await user.save();
        res.json(user);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating user' });
    }
  },

  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        await user.destroy();
        res.json({ message: 'User deleted successfully' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting user' });
    }
  },
};

module.exports = UserController;
