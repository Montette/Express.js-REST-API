const router = require('express').Router();
const contactController = require('../controllers/contactController');
const userController = require ('../controllers/userController');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.json({
        status: 'Api is working',
        message: 'Hello world!'
    });
});

router.route('/signup')
    .post(userController.signup);



router.route('/login')
    .post(userController.login)


router.use((req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(token) {
        jwt.verify(token, app.get('superSecret'), (error, decoded) => {
            if (error) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token'
                })
            };

            req.decoded = decoded;
            next();
        })
    } else {
        return res.json({
            success: false,
            message: 'No token provided'
        })
    }
})


router.route('/contacts')
    .get(contactController.get)
    .post(contactController.new);

router.route('/contact/:contact_id')
    .get(contactController.view)
    .put(contactController.update)
    .delete(contactController.remove);
    


module.exports = router;

