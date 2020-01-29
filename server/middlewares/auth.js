const jwt = require('jsonwebtoken');
// ====================================
// Verify Token
// ====================================
let verifyToken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }
        req.user = decoded.user;
        next();
    });
};
// ====================================
// Verify Admin Role
// ====================================

let verifyAdmin_Role = (req, res, next) => {
    let user = req.user;

    if (user.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'The user most be an administrator  to perform this task'
            }
        })
    }

}

// ====================================
// Verify Img Tokens
// ====================================

let verifyTokenImg = (req, res, next) => {
    let token = req.query.token;
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    mesage: 'no valid token provided'
                }
            });
        }
        req.user = decoded.user;
        next();
    });
}

// ====================================
// Export App Modules 
// ====================================
module.exports = { verifyToken, verifyAdmin_Role, verifyTokenImg }