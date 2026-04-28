import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    //console.log("auth called");
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ msg: "No token" });
  }

  const token = header.split(" ")[1];
  //console.log(token);
  try {
    const decoded = jwt.verify(token, "secretkey");
    //console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) { console.log(err);
    res.status(401).json({ msg: "Invalid token" });
  }
};

export default auth;