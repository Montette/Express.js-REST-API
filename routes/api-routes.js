const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'Api is working',
        message: 'Hello world'
    });
});

router.get('/hej', (req, res) => {
    res.json({
        status: 'Api is working!!!!',
        message: 'Hello world!!!!'
    });
});

module.exports = router;

