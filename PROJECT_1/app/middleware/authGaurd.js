const { verifyJwt } = require("../config/jwt");
const authGuard = async (req, res, next) => {
  try {
    const header = req.headers["authorization"];
    if (!header)
      return res
        .status(401)
        .json({ message: "Access denied, no token provided." });

    const token = header.includes("Bearer") ? header.split(" ")[1] : header;

    const verify = verifyJwt(token);
    if (!verify) {
      return res.status(401).json({
        message: "Access denied, token is invalid.",
      });
    }

    const id = verify.id;

    req.id = id;
    return next();
  } catch (error) {
    return unAuthenticateResponse(res, error);
  }
};

module.exports = { authGuard };
