module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Oring', '*')
    res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, content-Type, Accept')
    next()
}