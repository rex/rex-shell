rex-shell  [![Build Status](https://travis-ci.org/rex/rex-shell.png?branch=master)](https://travis-ci.org/rex/rex-shell)
===
A lightweight library for Node.js that will help developers display nice, pretty, colored messages in the console.

How to use it
---

1) Require it

```` js
var cli = require('rex-shell');
````

2) Use that sheezy like this:

#### At its **most** simple, you can just send messages directly from that.
```` js
cli("This will send a log message to the console");
````

Remember: Log *as many* things as you want!
---
Don't worry about whether the message is a string, object, integer, whatever. It doesn't matter at all. Any arguments you pass to rex-shell will get logged properly, no matter what. It's all about rapid development, baby!

```` js
cli("String", 42, false, ["a", 1, {foo : bar}], { baz : { bax : zap } });
````
Outputs
````
[ rex-shell: Log ] String 42 false [a, 1, {foo : bar}] { baz : { bax : zap } }
````
*sigh* Yeah, I know. Soak it up, baby. rex-shell gon' be gooood to you. 

Alright let's get to the good stuff.
---

#### Simple logs
```` js
cli.log("An event happened that you shouldn't be worried about");
cli.lg("Save yourself a whole letter when calling this! You're welcome.");
````

> **Rather Important Note:**
As far as I can tell, most of the time people just need basic log messages. The above 3 functions **will** make that happen, and are **identical**. I just tried to get more options for people to be comfortable.
````js
cli("Your log message here!");
cli.log("Your log message here!");
cli.lg("Your log message here!");
````
So yeah. Just giving you a heads up. Because I'm a nice guy like that. Anyway, carry on.

#### Warnings
```` js
cli.warn("Something happened that wasn't an error that you should be worried about.";
````

#### Errors
```` js
cli.error("Yeah, something actually went wrong here :(");
````

#### Success / OK
```` js
cli.ok("This is a message telling you it is all good in the hood!");
cli.success("This is an identical message, just using the word success to make people feel better");
````
> **Note:**
Similar to the `log()` functions above, these two success functions have identical output.
```` js
cli.ok("Success message");
cli.success("Success message");
````

That's not enough for you, eh? Ugh. Fine.
---

#### Extensible configuration options

The configuration file looks a little like this
```` js
var config = {
  nameVisible : true,
  app : {
    name : "rex-shell",
    showName : true
  },
  messages : {
    log : "Log",
    error : " Error",
    success : "Success",
    warning : "Warning",
    ok : "OK"
  }
};
````

And **HERE** is how you can make this module work better for you.

#### Change the application name that shows in log messages
Right now, all messages are prepended with `rex-shell` when they are displayed. If you want to set that to your own application name, and I highly recommend that you do, you can run this command:

```` js
cli.config.appName("Your App Name Here");
````

Which will change the output of `cli.log("Your log here");` to
```` 
[ Your App Name Here: Log ] Your log here
````

#### If you want to just hide the name entirely, you can!

```` js
cli.config.hideName();
````

Which will change the output of `cli.log("Your log here");` to
````
[ Log ] Your log here
````

#### And if you already hid it but want to bring it back, you can do that too!

```` js
cli.config.showName();
````

Which will change the output of `cli.log("Your log here");` back to
````
[ Your App Name Here: Log ] Your log here
````

#### Change the message names!
Want to get crazy and change the default words that are used in console messages? Being a generous guy, I am going to let you do that as well.

```` js
cli.config.set({
  messages : {
    log : "LOGGY LOG!",
    error : "You fucked up.",
    success : "Shit went right!",
    warning : "WATCH YO ASS FOO!",
    ok : "Shit went right!"
  }
});
````

Now, running a basic `cli.log("Your log message here");` command (assuming you already changed your application name) will output:
````
[ Your App Name Here: LOGGY LOG! ] Your log message here
````

Is that seriously still not enough? YOU are a pain in the ass. Fine.
---

#### Directly access color functions using `$`.

> **Note:** The lowercase functions are regular text, the UPPERCASE functions are the bolded versions

*IMPORTANT:* Unlike the standard calls, the direct `$` color functions only accept a **single string** as an argument. No objects, no arrays, none of it. Just one single thing that you can put in the center of a string. Sorry.

````
cli.$.red("All this text will be red");
cli.$.MAGENTA("All this text will be bolded magenta");
````

Here's the full list of colors and their functions:

Color | Light | Bold/Bright
-------|-------|--------
Red | `cli.$.red()` | `cli.$.RED()`
Green | `cli.$.green()` | `cli.$.GREEN()`
Yello | `cli.$.yellow()` | `cli.$.YELLOW()`
Blue | `cli.$.blue()` | `cli.$.BLUE()`
Magenta | `cli.$.magenta()` | `cli.$.MAGENTA()`
Cyan | `cli.$.cyan()` | `cli.$.CYAN()`
White | `cli.$.white()` | `cli.$.WHITE()`


Full API Reference
---

> All functions below assume that you have already required rex-shell as `var cli = require('rex-shell');`

Function | Parameters | Output Color | Purpose
------|------|-------|-------
`cli()` | Anything | Cyan | Standard log message
`cli.log()` | Anything | Cyan | Standard log message
`cli.lg()` | Anything | Cyan | Standard log message
`cli.ok` | Anything | Green | Success message
`cli.success()` | Anything | Green | Success message
`cli.error()` | Anything | Red | Error message
`cli.warn()` | Anything | Yellow | Warning message
`cli.config.appName()` | `String`: New Name | -- | Sets application name used in output
`cli.config.set()` | `Object`: New Settings | -- | Changes configuration object. See above!
`cli.config.hideName()` | -- | -- | Removes application name from future console output
`cli.config.showName()` | -- | -- | Shows application name in future console output
`cli.$.red()` | `String`: Message | Light Red | Log message without frills in one color
`cli.$.RED()` | `String`: Message | Bright/Bold Red | Log message without frills in one color
`cli.$.green()` | `String`: Message | Light Green | Log message without frills in one color
`cli.$.GREEN()` | `String`: Message | Bright/Bold Green | Log message without frills in one color
`cli.$.yellow()` | `String`: Message | Light Yellow | Log message without frills in one color
`cli.$.YELLOW()` | `String`: Message | Bright/Bold Yellow | Log message without frills in one color
`cli.$.blue()` | `String`: Message | Light Blue | Log message without frills in one color
`cli.$.BLUE()` | `String`: Message | Bright/Bold Blue | Log message without frills in one color
`cli.$.magenta()` | `String`: Message | Light Magenta | Log message without frills in one color
`cli.$.MAGENTA()` | `String`: Message | Bright/Bold Magenta | Log message without frills in one color
`cli.$.cyan()` | `String`: Message | Light Cyan | Log message without frills in one color
`cli.$.CYAN()` | `String`: Message | Bright/Bold Cyan | Log message without frills in one color
`cli.$.white()` | `String`: Message | Light White | Log message without frills in one color
`cli.$.WHITE()` | `String`: Message | Bright/Bold White | Log message without frills in one color


#### [Pierce Moore](http://prex.io)  
Email : **[me@prex.io](mailto:me@prex.io)**  
Twitter : **[@kiapierce](https://twitter.com/kiapierce)**
