
const jwt = require('jsonwebtoken');

const generateJwt = (payload) => {
    const secretKey = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRES_IN;
    const token = jwt.sign(payload, secretKey, { expiresIn });
    return token;
};

const verifyJwt = (token) => {
    const secretKey = process.env.JWT_SECRET;
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        throw error;
    }
};

module.exports = { generateJwt, verifyJwt }
