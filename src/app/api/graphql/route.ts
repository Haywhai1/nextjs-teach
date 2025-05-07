/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import gql from "graphql-tag";

const typeDefs = gql`
  type Blog {
    id: ID!
    title: String!
    content: String!
    author: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    blogs: [Blog!]!
    blog(id: ID!): Blog
  }
`;

const blogs = [
  {
    id: "1",
    title: "First Blog",
    content: "This is the content of the first blog.",
    createdAt: "2025-04-23T10:29:14.699+00:00",
    updatedAt: "2025-04-23T10:29:14.699+00:00",
  },
  {
    id: "2",
    title: "Second Blog",
    content: "This is the content of the second blog.",
    createdAt: "2025-04-23T10:29:14.699+00:00",
    updatedAt: "2025-04-23T10:29:14.699+00:00",
  },
];

const resolvers = {
  Query: {
    blogs: () => blogs,
    blog: (_: any, { id }: { id: string }) => {
      return blogs.find((blog) => blog.id === id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(server);

export const GET = async (req: Request) => {
  return handler(req);
};

export const POST = async (req: Request) => {
  return handler(req);
};
