const CracoAlias = require("craco-alias");

module.exports = {
    plugins : [
        {
            plugin : CracoAlias,
            options : {
                source : "jsconfig",
                jsConfigPath : "jsconfig.path.json"
            }
        }
    ]
}
