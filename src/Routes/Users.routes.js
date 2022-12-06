const {Router} = require('express');
const {ValidateUser,CreateUser} = require('../Controllers/Users.controllers');

const router = Router();

router.post('/Api/ValidateUser', ValidateUser);

router.post('/Api/CreateUser', CreateUser);

router.get('/', (req, res)=>{
    res.sendFile(`${process.cwd()}/src/Public/index.html`);
})

module.exports.router = router;