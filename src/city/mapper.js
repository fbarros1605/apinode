const baseMapper = require('../base/base-mapper');
class stateMapper extends baseMapper {
  constructor(model) {
    super(model); //to execute the parent constructor
  }

  async listCitiesPerState(state_id) {
    if (state_id) {
      return super.findAll({ where: {idstate: state_id }})
    }
  };

  async countCities() {
      return this.model.count()
  };

}
module.exports = stateMapper;