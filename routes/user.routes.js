const express = require('express');

const {userRegistration, userLogin} = require('../controllers/user.controller');

const router = express.Router();

router.post("/registration", userRegistration);
router.post("/login", userLogin);


module.exports = router;