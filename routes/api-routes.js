const router = require('express').Router();
const contactController = require('../controllers/contactController');

router.get('/', (req, res) => {
    res.json({
        status: 'Api is working',
        message: 'Hello world!'
    });
});

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contact/:contact_id')
    .get(contactController.view)
    .put(contactController.update)
    .delete(contactController.remove);
    


module.exports = router;

