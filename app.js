let express = require('express');
let app = express();
const cors = require('cors');
const resultsController = require('./results/resultsController');
const athletesController = require('./athletes/athletesController');

app.use(cors());
app.use('/results', resultsController);
app.use('/athletes', athletesController);

app.use(function (req, res) {
    res.status(404).send("Sorry can't find that API route!")
});

app.listen(3003, () => console.log('Listening on port 3003!'));
