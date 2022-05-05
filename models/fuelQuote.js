const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  /**
 * UserInfo Schema
 */
const UserInfoSchema = new Schema({
    gallons: {
    type: Number, required: true
  },
  delivery_address: {
    type: String, required: true
  },
  delivery_date: {
    type: Date, required: true
  },
  price_per: {
    
    type: Number, required: true 
  },
  total: {
    type: Number, required: true 
  },
  username: {
    type: Number, required: true 
  }
});

module.exports = mongoose.model('UserInfo', userInfoSchema);