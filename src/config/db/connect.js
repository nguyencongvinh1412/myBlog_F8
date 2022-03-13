const mongoose = require('mongoose');

async function connect() {
    
  try {
      await mongoose.connect(
        process.env.MONGOOSE_URL
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