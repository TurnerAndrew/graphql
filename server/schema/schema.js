//the schema will define types
//define relationships between types
//define root queries
//root queries define the entry points to the graph

//graphql requires a schema which describes the structure of the graph
const graphql = require('graphql')

//function in graphql that will define types of data
const { GraphQLObjectType, GraphQLString } = graphql

//creating a new type of object that can be retrieved
//needs a name and fields - fields are functions so they can relate to other types
//fields will be objects that declare they type of the field which is specific to GraphQL
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    //fields define where the entry points will be - the start of the queries
    fields: {
        book: {
            type: BookType,
            //args define what arguments will be required for the query and what that query will be
            args: { id: {type: GraphQLString}},
            //resolve function gets data from db or other source
            resolve(parent, args){
                args.id
            }
        }
    }
})