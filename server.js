const {ApolloServer} = require("apollo-server");

const {typeDefs} = require("./schema/typeDefs");
const {Query} = require("./resolvers/query");
const {Mutation} = require("./resolvers/mutation");

const StudentRestAPI = require("./data/datasource.rest");

const server = new ApolloServer({
    typeDefs,
    resolvers : {
        Query,
        Mutation
    },
    dataSources: () => {
        return {
            studentAPI: new StudentRestAPI()
        };
    }
});

server.listen().then(({url}) => {
    console.log(`Listening at url: ${url}`);
});