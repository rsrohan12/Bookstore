// used to connect with mongoDB compass

import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv" 
import cors from "cors"
import bookRoute from "../Backend/route/book.route.js"
import userRoute from "../Backend/route/user.route.js"

const app = express()

app.use(cors())
app.use(express.json()) // for parsing the api json

dotenv.config()

const port = process.env.PORT || 4000
const URI = process.env.MongoDBURI

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}
// defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})