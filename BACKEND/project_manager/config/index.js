var configValues = require("./config");

module.exports = {
    getDbConnectString : function(){
        return (`mongodb://${configValues.ip}:${configValues.port}/${configValues.database_name}`);
    }
};