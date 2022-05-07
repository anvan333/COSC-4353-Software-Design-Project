const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  /**
 * Info Schema
 */
const UserSchema = new Schema({
    full_name_id: {
    type: String, required: true 
  },
  first_street: {
    type: String, required: true 
  },
  sec_street: {
    type: String, required: true 
  },
  city_id: {
    type: String, required: true 
  },
    zip: {
    type: Number, default: true
  },
  state_id: {
    type: String, required: true 
  },
  username: {
    type: String, required: true 
  }
});

module.exports = mongoose.model('User', UserSchema);