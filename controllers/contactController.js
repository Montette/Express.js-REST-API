const Contact = require('../models/contactModel');

exports.get = (req, res) => {
    const limit = req.query.limit ? Number(req.query.limit) : 0;

    Contact.find((error, data) => {

        if (error) {
            res.json({
                status: 'error',
                message: 'Something went wrong'
            })
        };
        res.json({
            status: 'success',
            message: 'contacs retrieved susscesfully',
            data
        });

    }).limit(limit);
};

exports.new = (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone
    });

    contact.save((error) => {
        if (error) {
            res.json({
                status: 'error',
                message: 'Something went wrong'
            })
        };
        res.json({
            status: 'success',
            message: 'contact saved susscesfully',
            data: contact
        });
    })

};

exports.view = (req, res) => {
    Contact.findById(req.params.contact_id, (error, contact) => {
        if (error) {
            res.json({
                status: 'error',
                message: 'Something went wrong'
            })
        };
        res.json({
            status: 'success',
            message: 'contact found succesfully',
            data: contact
        })
    })
};

exports.update = (req, res) => {

    Contact.findById(req.params.contact_id, (error, contact) => {

        if (error) {
            res.json({
                status: 'error',
                message: 'Cannot find contact with this id in database'
            })
        };


        if (req.body._id) {
            delete req.body._id;
        }
        for (let b in req.body) {
            if (contact[b]) {
                contact[b] = req.body[b];
            }
        }

        contact.save((error) => {

            if (error) {
                res.json({
                    status: 'error',
                    message: 'Cannot update this contact'
                })
            };

            res.json({
                status: 'success',
                message: 'contact updated succesfully',
                data: contact
            })
        })

    })
};

exports.remove = (req, res) => {
    Contact.remove({
        _id: req.params.contact_id
    }, (error, contact) => {

        if (error) res.send(error);

        res.json({
            status: 'success',
            message: 'succesfully deleted contact'
        });

    });
}