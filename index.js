const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require("body-parser");

const keys = require('./config/keys');

require('./models/user');
require('./models/survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/billlingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Will serve production assets
    app.use(express.static('client/build'));

    // Will serve the index.html if the route isn't recognized
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT);
