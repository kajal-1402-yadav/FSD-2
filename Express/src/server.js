
const express = require('express');
const app = express();
const details = require('./data');
// app.use('/',details);

// app.use('/',details)
app.get('/', (req, res) => {
    res.json(details);
});

app.get('/api/id/:id', (req, res) => {
    const { id } = req.params;
    const person = details.find(detail => detail.id === parseInt(id));
    
    if (person) {
        res.json(person);
    } else {
        res.status(404).send('No details found for the given ID');
    }
});

app.get('/api/branch/:branch', (req, res) => {
    const { branch } = req.params;
    const branchDetails = details.filter(detail => detail.branch.toLowerCase() === branch.toLowerCase());
    
    if (branchDetails.length > 0) {
        res.json(branchDetails);
    } else {
        res.status(404).send('No details found for the given branch');
    }
});

app.listen(3000)