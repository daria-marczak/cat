var fs = require("fs");
var StatMode = require("stat-mode");
var colors = require("colors");

fs.stat("./cat_and_dog.jpg", function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile("./text.txt", "utf-8", function (err, data) {
    console.log("Data before being overwritten" .blue);
    console.log(data);
    fs.appendFile("./text.txt", "\nCliff Martinez son of placenta from the knick", function(err) {
        if (err) throw err;
        console.log("Saved!".blue);
        fs.readFile("./text.txt", "utf-8", function(err, data) {
            console.log("Data after being overwritten".red);
            console.log(data);
        });
    });
});

fs.readdir("../", "utf-8", function (err, files) {
    fs.writeFile("./message.txt", files, "utf-8", function(err){
        if (err) throw err;
        console.log("Saved");
        console.log(files);
    });
});
