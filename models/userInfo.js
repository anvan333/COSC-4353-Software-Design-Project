// const mongoose = require('mongoose'),
//   Schema = mongoose.Schema;
//   /**
//  * UserInfo Schema
//  */
// const UserInfoSchema = new Schema({
//   username: {
//     type: String, required: true
//   },
//   password: {
//     type: String, required: true
//   },
//   new_user: {
//     type: Boolean, default: true
//   }
// });

// module.exports = mongoose.model('UserInfo', userInfoSchema);

const userInfoSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  new_user: { type: Boolean, default: true},
  first_time: {type: Boolean, default: true}
});

const UserInfo = mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfo; 