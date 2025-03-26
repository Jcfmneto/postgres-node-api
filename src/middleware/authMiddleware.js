import jwt from 'jsonwebtoken';
import { jsonSecret } from '../jsonSecret.js';

function authMiddleware(req, res, next) {
    const token = req.cookies.jwt_token;

    if (!token) {
        return res.status(401).json({ error: 'Acesso não autorizado' });
    }

    try {
       
        const decoded = jwt.verify(token, jsonSecret);
        
       
        req.user = {
            id: decoded.id,
            email: decoded.email
            
        };

        next();
    } catch (err) {
        return res.status(401).json({ 
            error: 'Token inválido ou expirado',
            details: err.message 
        });
    }
}

export default authMiddleware;