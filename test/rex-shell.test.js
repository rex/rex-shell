/*###############################################################################
#           
#             _ __ _____  __   Welcome to the      _             
#            | '__/ _ \ \/ / ___ __ ___ ____  _ __| |_ ___ _ __  
#            | | |  __/>  < / -_) _/ _ (_-< || (_-<  _/ -_) '  \ 
#            |_|  \___/_/\_\\___\__\___/__/\_, /__/\__\___|_|_|_|
#                                          |__/                  
#
# The rex-* ecosystem is a collection of like-minded modules for Node.js/NPM
#   that allow developers to reduce their time spent developing by a wide margin. 
#   
#   Header File Version: 0.0.1, 06/08/2013
# 
# The MIT License (MIT)
# 
# Copyright (c) 2013 Pierce Moore <me@prex.io>
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
# 
#######*/
var scli = require('../lib/rex-shell');

scli.log("Running rex-shell Test Suite!");

scli("This is a rex-shell call without a specific function!");

scli.config.hideName();
scli.log("I am a sample log message!");
scli.log("I am one of multiple log messages!", "I am another of multiple log messages!");

scli.error("I am a sample error message!");
scli.error("I am one of multiple error messages!", "I am another of multiple error messages!");

scli.warn("I am a sample warn message!");
scli.warn("I am one of multiple warn messages!", "I am another of multiple warn messages!");

scli.ok("I am a sample ok message!");
scli.ok("I am one of multiple ok messages!", "I am another of multiple ok messages!");

scli.config.appName("Bananas");
scli.config.showName();
scli.success("I am a sample success message!");
scli.success("I am one of multiple success messages!", "I am another of multiple success messages!");

scli.put("Application Error","error", "App error 1", "App error 2", { error : { name : "App 3" } });
scli.put("App error 1","log", "App error 2", { error : { name : "App 3" } });

scli.config.set({
	messages : {
		log : "LOGGY LOG!",
		error : "You fucked up.",
		success : "Shit went right!",
		warning : "WATCH YO ASS FOO!",
		ok : "Shit went right!"
	}
});

scli.log("I should have a different log message");
scli.error("I should be different as well");
scli.success("It's all good here!");
scli.ok("Also good here!");
scli.warn("Warning message, ahoy!");

scli.$.red("This text should be light red");
scli.$.green("This text should be light green");
scli.$.yellow("This text should be light yellow");
scli.$.blue("This text should be light blue");
scli.$.magenta("This text should be light magenta");
scli.$.cyan("This text should be light cyan");
scli.$.white("This text should be light white");
scli.$.RED("This text should be bold red");
scli.$.GREEN("This text should be bold green");
scli.$.YELLOW("This text should be bold yellow");
scli.$.BLUE("This text should be bold blue");
scli.$.MAGENTA("This text should be bold magenta");
scli.$.CYAN("This text should be bold cyan");
scli.$.WHITE("This text should be bold white");