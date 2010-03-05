process.mixin(GLOBAL, require("sys"));
var postgres = require("./postgres");

var c = postgres.createConnection("host=localhost dbname=ryan");

c.addListener("connect", function () {
  puts("connected");
  puts(c.readyState);
});

c.addListener("close", function (e) {
  puts("connection closed.");
  if (e) {
    puts("error: " + e.message);
  }
});

c.query("select * from test;", function (rows) {
  puts("result1:");
  p(rows);
});

c.query("select * from test limit 1;", function (rows) {
  puts("result2:");
  p(rows);
});

c.query("select ____ from test limit 1;", function (rows) {
  if (false /* error */ )  {
    puts("error! "+ e.message);
    puts("full: "+ e.full);
    puts("severity: "+ e.severity);
    c.close();
    return;
  }
  puts("result3:");
  p(rows);
});
