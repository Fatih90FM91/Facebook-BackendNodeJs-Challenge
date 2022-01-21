const mongoose = require('mongoose');

let cloud = 'mongodb+srv://fatihProject:19900203@webdevops.s7xwh.mongodb.net/facebookChallengeDB';
let local = 'mongodb://localhost/nodejs';

mongoose.connect(cloud)
        .then( () => {
            console.log('DB connected')
        })
        .catch( err => {
            console.log(err)
        })