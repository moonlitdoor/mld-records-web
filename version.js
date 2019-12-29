let exec = require("child_process").exec;
let fs = require("fs");
let cmd1 = "git describe --tags";
let cmd2 = "git status --porcelain";

let data = {
    version: null,
    date: new Date().getTime()
};

exec(cmd1, function (error, stdout1) {
    exec(cmd2, function (error, stdout2) {
        if (stdout2.trim().length > 0) {
            data.version = stdout1.trim() + "-SNAPSHOT";
        } else {
            data.version = stdout1.trim();
        }
        console.log(data);
        // fs.writeFileSync("./hosting/src/about.json", JSON.stringify(data));
        fs.writeFileSync("./functions/src/about.ts", "const about = " + JSON.stringify(data) + ";\nexport default about;\n");
    });

});
