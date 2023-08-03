const loginAuth = async(req, res, next) => {
    try {
    const token=req.header
    } catch (error) {
        console.log('error in login middleware ', error);
        throw error;
    }
}


module.exports = { loginAuth };