import express from "express";
import cors from "cors";
import mongoose from "mongoose";


const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const port = process.env.PORT || 5000;
// const port = 'https://localhost:5000/'


const URL = "mongodb+srv://veer:veerpass@cluster0.ynr1vhb.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery',false)
mongoose.connect(URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {

    console.log("DataBase Connected Succesfully")

}).catch((error) => {

    console.log("Failed to connect ===> ", error)

});

const userSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    subject : {
        type : String,
    },
    message : {
        type : String,
    }
})

const User = new mongoose.model('User', userSchema)



// Routes

app.post("/cont", (request, response) => {
    const {name, email, subject, message} = request.body
    const user = new User({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
    user.save((error) => {
        if(error){
            response.send(error)
        }else{
            response.send({message: "Thank you for contacting me."})
        }
    })
});

app.listen(port, () => {
    console.log(`Server is Running succesfully on port ${port}`)
});