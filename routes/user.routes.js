const router = require('express');
const authController = require('../controllers/auth.controller');

router.post("/register", authController.signUp);

module.exports = router;