const { User } = require('../models/user.model');
const userService = require('../services/user.service');

let resetUserPortfolio = async (req, res) => {    
    let user = await userService.resetUserPortflio(req.body.userId);
    res.json({user: user});
}

module.exports = {
    resetUserPortfolio,
}