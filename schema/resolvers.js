const { data } = require("../data/data");
//resolvers
const resolvers = {
  Query: {
    GetUsers: () => data,
    GetUser: (parent, args) => {
      const { id } = args;
      let user = data.find((res) => res.id == id);
      return user;
    },
  },
  Mutation: {
    AddUser: (parent, args) => {
      const { name, age, sex, creditscore } = args;
      const newUser = {
        id: data.length + 1,
        name,
        age,
        sex,
        creditscore,
      };
      data.push(newUser);
      return newUser;
    },
    SubUser: (parent, args) => {
      const { id } = args;
      let user = data.find((res) => res.id === id);
      let index = data.indexOf(user);
      data.splice(index, 1);
      return user;
    },
    UpdateUser: (parent, args) => {
      const { id, name, age, sex, creditscore } = args;
      const newUser = {
        id,
        name,
        age,
        sex,
        creditscore,
      };
      let userx = data.find((res) => res.id === id);
      let index = data.indexOf(userx);
      data[index] = newUser;
      return newUser;
    },
  },
};

module.exports = { resolvers };
