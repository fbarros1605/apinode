response = require('./base-response');

exports.findAll = (mapper) => async (ctx) => {
    const list = await mapper.findAll();
    if (list) {
        ctx.body = response(list, 200);
    }
}

exports.findOne = (mapper) => async (ctx) => {
    const model = await mapper.findOne(ctx.params.id);
    if (model) {
        ctx.body = response(model, 200);
    }
}

exports.findOrCreate = (mapper) => async (ctx) => {
    const data = ctx.request.body;
    try {
        if (data) {
            model = await mapper.findOrCreate(data.id, data);
            if (model) {
                ctx.status = 200;
                ctx.body = model;
            }
        }
    }
    catch (err) {
        if (ctx.status == 404) {
            ctx.status = 404;
            ctx.body = err.errors;
        }
    }
}

exports.create = (mapper) => async (ctx) => {
    const data = ctx.request.body;
    try {
        if (data) {
            model = await mapper.create(data);
            if (model) {
                ctx.status = 201;
                ctx.body = model;
            }
        }
    }
    catch (err) {
        if (ctx.status == 404) {
            ctx.status = 404;
            ctx.body = err.errors;
        }
    }
}

exports.update = (mapper) => async (ctx) => {
    const data = ctx.request.body;
    const id = ctx.params.id;
    try {
        if (data && id) {
            //se rowsAffected retornou alguma coisa, é porque fez o update.
            rowsAffected = await mapper.update(data, id);
            if (rowsAffected) {
                ctx.status = 200;
            }
        } else {
            ctx.status = 400;
        }

    } catch (err) {
        if (ctx.status == 404) {
            ctx.status = 404;
            ctx.body = err.errors;
        }
    }
}

exports.delete = (mapper) => async (ctx) => {
    const id = ctx.params.id;
    try {
        if (id) {
            deleted = await mapper.delete(id);
            if (deleted && deleted == 'OK') {
                ctx.status = 200;
                ctx.body = deleted;
            }
        } else {
            ctx.status = 400;
        }

    } catch (err) {
        if (ctx.status == 404) {
            ctx.status = 404;
            ctx.body = err.errors;
        }
    }
} 

exports.count = (mapper) => async (ctx) => {
    const model = await mapper.count();
    ctx.body = response(model, 200);
}
