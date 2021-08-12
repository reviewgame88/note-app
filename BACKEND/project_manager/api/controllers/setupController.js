var myApp = require('../models/myAppModel');

module.exports = function(app){
    app.get('/api/create_data', function (req, res){
        var seedMyApp =  [
            {
                title : "Học Nodejs",
                content : "Học Nodejs"
            },
            {
                title : "Học AngularJs",
                content : "Học AngularJs"
            },
            {
                title : "Viết ứng dụng hoàn chỉnh",
                content : "Viết ứng dụng hoàn chỉnh"
            }
        ]

        myApp.create(seedMyApp, function (err, result){
            res.send(result);
        });
    });
};