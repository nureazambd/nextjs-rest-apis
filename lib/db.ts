import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () =>{
    const connectionState = mongoose.connection.readyState;

    if(connectionState === 1){
        console.log("Allrady connected");
        
    }
    if(connectionState === 2){
        console.log("Connecting...");
    }

    try{
        mongoose.connect(MONGODB_URI!,{
            dbName: "restapinext14",
            bufferCommands: false
        })
        console.log("Connected");
        
    }catch(error){
        console.log("Error in connecting to db",error);
        throw new Error("Error connection to database");
    }
};

export default connect;
