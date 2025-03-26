async function validation(req, res, next) {
 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    const { email } = req.body

    function verificarEmail(email){
   return emailRegex.test(email);
}
   try{
if(!verificarEmail(email) || !email ){
   throw new Error('email invalido');
   
}
next();
}catch(Error){
    return res.status(401).json({message: Error.message})
}
}
export default validation