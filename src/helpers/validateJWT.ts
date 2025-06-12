import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

//O token vem no cabeçalho Authorization como:
//Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
function validate(authToken: string) {
    const token = authToken.split(' ')[1]; // extrai só o token
    const decoded = jwt.verify(token,process.env.JWT_SECRET as string);
    return decoded;
}

export default validate;