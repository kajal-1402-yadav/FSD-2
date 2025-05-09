const multer = require('multer');
const express = require('express');
const app = express();

// Multer storage configuration
const store = multer.diskStorage({
    destination: 'single',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// Upload middleware for multiple files
const upload = multer({ storage: store }).array('myfiles', 10); // allow up to 10 files

// Serve static files from ../public
app.use(express.static('../public', { index: 'multer.html' }));

// Handle multiple file uploads
app.post('/data', upload, (req, res) => {
    if (req.files) {
        for (i of req.files) {
            res.write(`file ${i.originalname} is uploaded in ${i.destination}`)
            
        }
        res.send()
    } else {
        res.send('No files uploaded');
    }
});

app.listen(3009, () => {
    console.log('Server running on http://localhost:3009');
});
