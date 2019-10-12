const crypto = require("crypto");
module.exports.sha256 = x =>
    crypto
        .createHash("sha256")
        .update(x, "utf8")
        .digest("hex");
