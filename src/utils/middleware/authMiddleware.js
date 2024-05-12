const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret';  // Ensure this is the same secret used when signing the JWT

const authMiddleware = (req, res, next) => {
    // Get the token from the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer Token
    if (token == null) {
        return res.status(401).send('No token provided');
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send('Invalid token');
        }

        req.user = user; // Add the user payload to the request object
        next(); // Pass control to the next middleware function
    });
};

module.exports = authMiddleware;
