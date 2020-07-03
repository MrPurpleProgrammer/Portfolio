var rl = require('rocket-launcher');
//method chaining
//set fps 16, make and show figlet text for 1000ms,count down 3, launch a rocket
rl.frame(32).type("Initiating Portfolio",1000).delay(1000).count(3).launch();
