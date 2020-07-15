const baseMapper = require('../base/base-mapper');
class countryMapper extends baseMapper {
  constructor(model) {
    super(model); //to execute the parent constructor
  }
}
module.exports = countryMapper;