const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String
    email: String
    password: String
    saveBooks: [Book]
  }
  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  type Query {
    me(username: String): User
  }
`;

module.exports = typeDefs;
