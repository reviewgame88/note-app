var myApp = require('../models/myAppModel');

function getList(res) {
    myApp.find(function (err, note) {
        if (err) {
            throw err;
        } else {
            res.json(note);
        }
    });
}

module.exports = function (app) {
    
    app.get('/api/get_list', function (req, res) {
        getList(res);
    });


    app.post("/api/note", function (req, res) {
        var note = {
            title: req.body.title,
            content: req.body.content,
            create_time : (Math.floor(Date.now() / 1000))
        };
        //console.log(2222);
        myApp.create(note, function (err, note) {
            if (err) {
                throw err;
            } else {
                getList(res);
            }
        });

    });

    app.put("/api/updateNote", function (req, res) {
        if (!req.body.id) {
            res.status(500).send("ID is required");
        } else {
            myApp.update({
                _id: req.body.id
            }, {
                title: req.body.title,
                content: req.body.content
            }, function (err, note) {
                if (err) {
                    throw err;
                } else {
                    getList(res);
                }
            });
        }
    });

    app.delete("/api/deleteNote/:id", function (req, res) {
        myApp.remove({
            _id : req.params.id
        }, function(err, note){
            if(err){
                throw err;
            }else{
                getList(res);
            } 
        });
    });
}