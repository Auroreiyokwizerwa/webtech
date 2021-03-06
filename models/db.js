const mongoose = require('mongoose')
let uri = 'mongodb://localhost:27017/ironjiTest'

if (process.env.NODE_ENV === 'production') {
  uri = 'mongodb+srv://dataframe:Mlambe101@mongobkp.waqd2.mongodb.net/webrtc?retryWrites=true&w=majority'
}

mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

mongoose.connect(uri, options, err => {
  if (err) {
    throw new Error(err)
  }
})

module.exports = mongoose
