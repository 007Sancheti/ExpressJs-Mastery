const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('User List');
});

router.get('/new', (req, res) => {
    res.render('new', { firstName: 'Test' });
});

router.post('/', (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({ name: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log(error);
        res.render('new', {firstName: req.body.firstName})
    }
    console.log(req.body.firstName);
    res.send('Hi');
});

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user);
        res.send(
            `Get user with ID ${req.params.id} with name ${req.user.name}`
        );
    })
    .put((req, res) => {
        res.send(`Get user with ID ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Get user with ID ${req.params.id}`);
    });

const users = [{ name: 'Abhinav' }, { name: 'Ujjwal' }];

router.param('id', (req, res, next, id) => {
    req.user = users[id];
    next();
});

module.exports = router;
