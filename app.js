let express = require('express');
const path = require('path');
let app = express();
const cors = require('cors');
const resultsController = require('./results/resultsController');
const athletesController = require('./athletes/athletesController');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/results', resultsController);
app.use('/athletes', athletesController);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(function (req, res) {
    res.status(404).send("Sorry can't find that API route!")
});

app.listen(3000, () => console.log('Listening on port 3000!'));
