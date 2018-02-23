const Bean = require('./models/Bean');

require('dotenv').config();
require('./config/db');

Bean.remove({})
.then(function() {
    return Bean.create([
        { 
           name: "Any Bean Name", 
           description: "Beans! BEANS!",
           price: 3 
        }, 
        { 
            name: "Lima Beans", 
            description: "yum", 
            price: 123
        }, 
        { 
            name: "Cool", 
            description: "#trill", 
            price: 4
        }
    ])
})
.then(function(beans) {
    console.log(beans);
    process.exit();
})
