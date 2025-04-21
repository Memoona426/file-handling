const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
};

const comparePasswords = async (providedPassword, storedHashedPassword) => {
    try {
        const match = await bcrypt.compare(providedPassword, storedHashedPassword);
        return match;
    } catch (error) {
        throw error;
    }
};

module.exports = { hashPassword, comparePasswords }