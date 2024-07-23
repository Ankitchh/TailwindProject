const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const formData = req.body;
    saveFormData(formData);
    res.sendFile(path.join(__dirname, 'public', 'thankyou.html'));
});


function saveFormData(formData) {
    let data = [];
    try {
        const jsonData = fs.readFileSync(path.join(__dirname, 'public', 'form-data.json'), 'utf8');
        data = JSON.parse(jsonData);
    } catch (err) {
        console.error('Error reading JSON file:', err);
    }
    data.push(formData);
    try {
        fs.writeFileSync(path.join(__dirname, 'public', 'form-data.json'), JSON.stringify(data, null, 2));
        console.log('Form data saved successfully.');
    } catch (err) {
        console.error('Error writing JSON file:', err);
    }
}

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
