import mongoose from "mongoose";

async function connectaNaDataBase() {

    mongoose.connect("mongodb+srv://admin:admin123@cluster0.j79z6jl.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0")

        return mongoose.connection
}

export default connectaNaDataBase


