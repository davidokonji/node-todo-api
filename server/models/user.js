var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        minlenght: 1,
        trim: true
    }
});
module.exports = {User};

//Testing with the user 

// var newUser = new User({
//     email: '  davidokonji3@gmail.com '
// })

// newUser.save().then((res)=>{
//     console.log(JSON.stringify(res));
// },(err)=>{
//     console.log(err)
// });
