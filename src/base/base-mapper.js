const ApiClient = require('../base/api-client');
const apiClient = new ApiClient();
const uuidv1 = require('uuid/v1');
const config = require('../../config/index');

class baseMapper {

    constructor(model) {
        this.path = '../' + model + '/model';
        this.model = require(this.path);
        this.apiClient = apiClient;
        this.urlJira = config.urlJira;
    }

    async findAll(where) {
        //o include no find ou findAll faz com que os relacionamentos feitos no model, 
        //sejam exibidos no retorno. Remova o parâmetro e veja a diferença:
        //return await this.model.findAll();
        let param = {};
        if (where) {
            param = where
        }
        param.include = [{all: true, nested: true}];
        return await this.model.findAll(param);
        
        //return await this.model.findAll({where: p}, {include: [{all: true, nested: true}]});
    };

    async findOne(id) {
        return this.model.findByPk(id)
    };

    async findOrCreate(id, data, createId) {
        let ret = await this.model.findByPk(id)
        if (!ret) {
            if (createId) {
                data.id = uuidv1();
            }
            return this.model.create(data)
        } else {
            return ret;
        }
    };

    async create(data) {
        data.id = uuidv1();
        return this.model.create(data)
    };

    async update(data, id) {
        if (data && id) {
            this.data = data;
            return this.model.update(data, {
                where: { id: id },
                returning: true
            });
        }
    };

    async destroy(id) {
        if (id) {
            try {
                this.modelObject = await findOne(id);
                this.modelObject.destroy();
                return 'OK';
            } catch (err) {
                return false;
            }
        }
    };

    async count() {
        return this.model.count();
    };
}

module.exports = baseMapper;


