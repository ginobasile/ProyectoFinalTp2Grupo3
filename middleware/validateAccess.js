import { verifyToken } from "../utils/tokens.js";


const validateAccess = (req, res, next) => {
  try {
    const cookies= req.headers.cookie || ""
    const { token } = convertCookiesToJson(cookies);
    if (!token) throw new Error("Acceso denegado");
    const { payload } = verifyToken(token);
    if (!payload) throw new Error("Acceso denegado");
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};

function convertCookiesToJson(cookieString) {
  const cookies = cookieString.split('; ');

  const jsonToken = {};

  cookies.forEach((cookie) => {
    const [name, value] = cookie.split('=');
    jsonToken[name.trim()] = value;
  });

  return jsonToken;
}

export default validateAccess
