/*
create a specific controller, if you needs implement something
*/

exports.listCitiesPerState = (mapper) => async (ctx) => {
    const model = await mapper.listCitiesPerState(ctx.params.id);
    if (model) {
        ctx.body = response(model, 200);
    }
}

exports.countCities = (mapper) => async (ctx) => {
    const model = await mapper.countCities(ctx.params.id);
    if (model) {
        ctx.body = response(model, 200);
    }
}
