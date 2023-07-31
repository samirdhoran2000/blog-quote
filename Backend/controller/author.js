const createAuthor = async(req, res) => {
    
    res.status(200).json({
        msg: 'author is created successfully ',
        data: "data"
    });
}
const getAuthor = async(req, res) => {
    
    res.status(200).json({
        msg: 'get single author successfully ',
        data: "data"
    });
}

module.exports = { createAuthor, getAuthor };