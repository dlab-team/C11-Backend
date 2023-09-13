// import admin from "firebase-admin";
const authenticate = async (req, res, next) => {
  const token = req.header("Authorization");
  
  if (!token) {
    return res.status(401).json({ message: "Acceso no autorizado" });
  }
  next()
  /*
  try {
    // Verificar el token usando Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Almacena la información del usuario en la solicitud
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
  */
};

export default authenticate;