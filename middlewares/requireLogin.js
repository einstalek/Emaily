// next - is the next middleware in the chain of middlewares
module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'Have to be logged in for that' });
    }
    next();
};