const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    comment : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Types.ObjectId,
        ref: 'userData',
        required : true
    },
    blogId : {
        type : mongoose.Types.ObjectId,
        ref: 'blogData',
        required : true
    },

}) 
commentSchema.set('timestamps', true)

module.exports = mongoose.model('commentData', commentSchema)
