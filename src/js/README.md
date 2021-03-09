# JS Module Pattern
Inspired by: CSS-Tricks

Credit to: Chris Coyier

https://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition

JavaScript is interesting in that it enforces no particular structure upon you. "Bring Your Own Organization", if you will. As I write more and more JavaScript in web app sites, this becomes more and more interesting. How you structure your JavaScript is very important because:

Done right, it makes code easier to understand for others and yourself re-visting your own code.

Having a decided-upon structure helps keep future code clean and encourages your declared best practices.

It makes your code testable.

Before I go any further, let it be known that I am far from a master of JavaScript. There are a lot of smart folks in the JavaScript world that have been doing and talking about this for longer than I knew what a div was.

This has been a topic in my mind lately because I've been writing a lot more JavaScript for CodePen, which is very JavaScript heavy. We've been using the "Module Pattern" since the beginning and it's been serving us quite well I think.

Then I posted this article about the making of the Treehouse ad, and within it I also used the Module Pattern for the JavaScript there. Louis Lazaris chimed in that this is how he's been liking to write JavaScript lately too, and started a bit of a discussion. Louis followed it up with an article explaining his preferred structural pattern.

## The Concept
It's easier to understand concepts like this if there is an example to build from. Let's say we're building a news widget. It lists some news articles, and has a button in which you can load more news articles.

### The Module
Humble beginnings:

```js
var NewsWidget = {

};
```

Just an object. I like my JavaScript variables starting with a lowercase character, but Modules get an uppercase first character. Just a convention that helps code readability.

### Settings
The news widget will likely have some significant numbers associated with it (e.g. how many articles in it). Also, some significant elements (DOM nodes) that will need to be accessed regularly.

There will be a number of sub-functions of this module that do small specific things. Many of those may need access to these settings and "cached" elements. So, we'll make the settings available to each of them.

```js
var s,
NewsWidget = {

  settings: {
    numArticles: 5,
    articleList: $("#article-list")
  }

};
```

We'll get to the sub-function access in a second.

### Init Function
To "kick things off" we'll have just one function be called. This will be consistent across all modules, so you know exactly where to look when you start reading the code and figuring out what happens when.

```js
var s,
NewsWidget = {

  settings: {
    numArticles: 5,
    articleList: $("#article-list"),
    moreButton: $("#more-button")
  },

  init: function() {
    // kick things off
    s = this.settings;
  }

};
```

The first thing the init function will do is set the variable s (which we declared at the same level as the Module) to be a pointer to the settings. Because of where s was declared, this means all sub-functions of the Module will have access to the settings. Nice.

### Binding UI Actions
Alex Vasquez set up a convention for us at CodePen where we would have a function just for binding the UI events. You never write any code that "does stuff" when you bind, you just do the binding and then call another appropriately named sub-function.

```js
var s,
NewsWidget = {

  settings: {
    numArticles: 5,
    articleList: $("#article-list"),
    moreButton: $("#more-button")
  },

  init: function() {
    s = this.settings;
    this.bindUIActions();
  },

  bindUIActions: function() {
    s.moreButton.on("click", function() {
      NewsWidget.getMoreArticles(s.numArticles);
    });
  },

  getMoreArticles: function(numToGet) {
    // $.ajax or something
    // using numToGet as param
  }

};
```

### Combining Files
Chances are the news widget isn't the only JavaScript you'll have on a page. There will be lots of Modules you'll need to load. Perhaps the news widget is on every page of your site, so belongs in a global.js file. This global.js file will ultimately be a a bunch of Modules concatenated, and then a big kick off party.

There are all kinds of ways to handle this concatenation stuff. It could be a dev tool like CodeKit and it's ability to do appends/prepends. It could be some fancy Grunt.js build script thing.

At CodePen we use Ruby on Rails and it's asset pipeline. So for us, the global.js file would be something like:

```js
//= require common/library.js

//= require module/news-widget.js
//= require module/some-other-widget.js

(function() {

  NewsWidget.init();

  SomeOtherModule.init();

})();
```

### That's All Folks
Pretty darn satisfying way to write JavaScript, I think. It satisfies the three points I made about the importance of structure.

Regarding the testing point, I know that wasn't discussed much, but I'm sure you can imagine how having smaller specific functions in change of specific tasks are easier to write assertions for. That's how most JavaScript testing is done (e.g. Jasmine). For instance, in some form of code or another: "I assert that when this function gets this value this other thing happens and is equal to some other value."

This is the tip of the iceberg. I've only just started it, but Learning JavaScript Design Patterns (free to read online!) by Addy Osmani looks to be going a lot deeper down this rabbit hole.
