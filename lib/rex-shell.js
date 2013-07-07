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
var __ = require('underscore')
	, package = require('../package')

var config = {
	appName : function(newName) {
		if(newName) {
			__.extend(this.app, { name : newName, showName : true });
		} else {
			if( this.app.showName )
				return this.app.name + ": ";
			else
				return "";
		}
	},
	set : function(settings) {
		__.extend(this, settings);
	},
	hideName : function() {
		this.app.showName = false;
	},
	showName : function() {
		this.app.showName = true;
	},
	setName : function(newName) {
		__.extend(this.app, { name : newName, showName : true });
	},
	nameVisible : true,
	app : {
		name : "rex-shell",
		showName : true
	},
	messages : {
		log : "Log",
		error : "Error",
		success : "Success",
		warning : "Warning",
		ok : "OK"
	}
};

// ಠ_ಠ
var $ = {
	// Utility methods
	bracket : function(m) { return $$.b("[ " + config.appName() + m + $$.b(" ]") )},

	// Specific methods for messages
	log : function(m) { return this.bracket( $$.c(m) ) },
	success : function(m) { return this.bracket( $$.g(m) ) },
	ok : function(m) { return this.bracket( $$.g(m) ) },
	error : function(m) { return this.bracket( $$.R(m) ) },
	warning : function(m) { return this.bracket( $$.y(m) ) },

	/**
	 * Semantic color function mappings
	 */
	red : function(m) { l($$.r(m)) },
	green : function(m) { l($$.g(m)) },
	yellow : function(m) { l($$.y(m)) },
	blue : function(m) { l($$.b(m)) },
	magenta : function(m) { l($$.m(m)) },
	cyan : function(m) { l($$.c(m)) },
	white : function(m) { l($$.w(m)) },
	RED : function(m) { l($$.R(m)) },
	GREEN : function(m) { l($$.G(m)) },
	YELLOW : function(m) { l($$.Y(m)) },
	BLUE : function(m) { l($$.B(m)) },
	MAGENTA : function(m) { l($$.M(m)) },
	CYAN : function(m) { l($$.C(m)) },
	WHITE : function(m) { l($$.W(m)) }

};
	
/**
 * Color functions
 */
var t = "\033[0m";
var $$ = {
	t : "\033[0m", // Reset colors to default terminal color
	// regular colors
	k : function(m) { return "\033[0;30m" + m + t },	// black
	r : function(m) { return "\033[0;31m" + m + t },	// red
	g : function(m) { return "\033[0;32m" + m + t },	// green
	y : function(m) { return "\033[0;33m" + m + t },	// yellow
	b : function(m) { return "\033[0;34m" + m + t },	// blue
	m : function(m) { return "\033[0;35m" + m + t },	// magenta
	c : function(m) { return "\033[0;36m" + m + t },	// cyan
	w : function(m) { return "\033[0;37m" + m + t },	// white
	
	//emphasized (bolded) colors
	K : function(m) { return "\033[1;30m" + m + t },
	R : function(m) { return "\033[1;31m" + m + t },
	G : function(m) { return "\033[1;32m" + m + t },
	Y : function(m) { return "\033[1;33m" + m + t },
	B : function(m) { return "\033[1;34m" + m + t },
	M : function(m) { return "\033[1;35m" + m + t },
	C : function(m) { return "\033[1;36m" + m + t },
	W : function(m) { return "\033[1;37m" + m + t }
};

var getMeta = function(args) {
	var meta,title;
	meta = __.first(args,2);
	return {
		title : meta[0],
		type : meta[1],
		args : __.rest(args,2)
	};
};

var l = function(message) {
	console.log(message);
};

var write = function( items, type, title ) {
	var typeString = $[type](title);
	var toConsole = [ typeString ];
	__.each(items, function(item) {
		toConsole.push(item);
	});
	console.log.apply(null, toConsole);
};

var standard = function(args, type) {
	write(args, type, config.messages[type]);
};
var custom = function(args) {
	var meta = getMeta(args);
	write(meta.args, meta.type, meta.title);
};

module.exports = function() {
	standard(arguments,"log");
};

__.extend(module.exports, {
	put : function() {
		custom(arguments);
	},
	lg : function(){
		standard(arguments,"log");
	},
	log : function() {
		standard(arguments,"log");
	},
	error : function() {
		standard(arguments, "error");
	},
	success : function() {
		standard(arguments, "success");
	},
	warn : function() {
		standard(arguments, "warning");
	},
	ok : function() {
		standard(arguments, "ok");
	},
	config : config,
	$ : $,
	$$ : $$,
	write : write,
	version : package.version,
	package : package
});