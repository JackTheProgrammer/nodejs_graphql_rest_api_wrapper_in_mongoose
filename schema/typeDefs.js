const {gql} = require("apollo-server");

exports.typeDefs = gql`
input UpdateStudentInput{
    id: ID!
    email: String!
}
input CreateStudentInput{
    name: String!
    email: String!
}
type Student{
    _id: ID!
    name: String!
    email: String!
    dateOfCreation: String!
}
type Query{
    getStudents: [Student!]!
    getStudent(id: ID!): Student!
}
type Mutation{
    createStudent(input: CreateStudentInput!): Student!
    updateStudent(input: UpdateStudentInput!): Student!
    deleteStudent(id: ID!): String!
}
`