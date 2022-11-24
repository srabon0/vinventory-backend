const mongoose = require('mongoose');

const dbConn = ()=> {
    mongoose.connect(process.env.DATABASE_URI).then(
        () => { 
            console.log("DB connection successfull")
            /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ },
        err => {
            console.log(err) /** handle initial connection error */ }
      );
}

module.exports = {
    dbConn
}