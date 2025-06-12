import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    image : String,
    log : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    }
},
)

const userSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    userLog : [logSchema],
})

const UserLog = mongoose.models.userLogs || mongoose.model("userLogs", userSchema);
export default UserLog;