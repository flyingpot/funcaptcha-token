const fun = require("funcaptcha")

module.exports = (req, res) => {
    fun.getToken({
        pkey: "35536E1E-65B4-4D96-9D97-6ADB7EFF8147", // The public key
        surl: "https://tcr9i.chat.openai.com", // OPTIONAL: Some websites can have a custom service URL
    }).then(token => {
        res.send(token);
    })
};
  