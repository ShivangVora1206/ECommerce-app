const mongoose = require('mongoose');

module.exports = function (){
    mongoose.connect("URI")
.then(()=>{
    console.log("connected to db");
}).catch(()=>{
    console.log("error connecting to db");
})
}
