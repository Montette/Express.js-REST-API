const Contact = require('../models/contactModel');

exports.index =  (req, res) => {
    Contact.get((error, data) => {
        if(error) {
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

    })
};

exports.new =  (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        surname: req.nody.surname,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone
    }); 

    contact.save((error) => {
        if(error) {
            res.json({
                status: 'error',
                message: 'Something went wrong'
            })
        };
        res.json({
            status: 'success',
            message: 'contact savesd susscesfully',
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
}

