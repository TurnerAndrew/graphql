const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express()

//setup a main endpoint that will listen for graphql queries, and use express-graphql to handle them
//graphql requires a schema, which is contained in a folder in the server directory
app.use('/graphql', graphqlHTTP({

}))

app.listen(5418, () => console.log(`listening on 5418`))