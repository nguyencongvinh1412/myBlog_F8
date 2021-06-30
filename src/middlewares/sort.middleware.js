module.exports.sortMiddleware = function(req, res, next) {
    res.locals._sort = {
        enable: false,
        column: 'undefined',
        type: 'default'
    }

    if(req.query.hasOwnProperty('sort')) {
        Object.assign(res.locals._sort, {
            enable: true,
            column: req.query.column,
            type: req.query.type
        });
    }

    return next();
}