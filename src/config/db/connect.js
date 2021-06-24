const mongoose = require('mongoose');

async function connect() {
    
  try {
      await mongoose.connect(
        'mongodb+srv://congvinh:Congvinh@cv9firstblogproject.4ooie.mongodb.net/demo_blog?retryWrites=true&w=majority'
      , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('connect successfully...');
  } catch (error) {
    console.log('connect failed...');
  }
}

module.exports = { connect };