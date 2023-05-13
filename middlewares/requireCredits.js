// next - is the next middleware in the chain of middlewares
module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return res.status(403).send({ error: 'Not enough credits' });
    }
    next();
};