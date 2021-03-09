## The Markup Basics
The basic markup for all sections look something like this:
```html
<div class="layout hero">
    <div class="wrapper">
        <div class="content">

        </div>
    </div>
</div>
```

In the example above, we are defining a hero section with a second class name along side of the layout class.

This allows us to create margin bottoms on all of our `.layout` section, creating the building blocks for our page..

It is important to understand that `.wrapper` is defined globally as your container. This means that every section, using the markup above, will adopt the globaly wrapper i.e. `max-width: 1024px;`

What if you're trying to acheive a fullscreen hero?

```html
<div class="layout hero">
    <div class="bg-img" style="background-image: url('img/balloon.jpg')"></div>
    <div class="wrapper">
        <div class="content">

        </div>
    </div>
</div>
```

The example above will allow you to position the hero background image absolute inside of the layout. Using a `<div>` instead of place the background image on the layout class allows the freedom to animate or move the background image i.e. parallax

Here's an example of the SCSS.

```sass
.layout.hero {
	position: relative;
	height: 100vh;
	.bg-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
}
```

Let's take this a step further and show how the content the hero content may work.

```html
<div class="layout hero">
    <div class="bg-img" style="background-image: url('img/balloon.jpg')"></div>
    <div class="wrapper">
        <div class="content">
            <h2>Lorem ipsum dolor </h2>
            <p>Excepteur sint occaecat cupidatat non proident..</p>
        </div>
    </div>
</div>
```

In the example above, let's say the design calls for the content to be positioned centered both vertically and horizontally. This can be acheived by targeting the content like this.

```sass
.layout.hero {
	position: relative;
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
}
```
Easy peasy!

Let's continue to look at some examples of other layouts.

## Accordion
```html
<div class="layout accordion">
    <div class="wrapper">
        <div class="content">
            <ul class="acc-list">
                <li class="acc-item">
                    <h3 class="title">Lorem ipsum dolor </h3>
                    <div class="acc-content">
                        <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
```

## Basic Content
```html
<div class="layout basic-content">
    <div class="wrapper">
        <div class="content">
            <h2>Lorem ipsum dolor </h2>
            <p>Excepteur sint occaecat cupidatat non proident..</p>
        </div>
    </div>
</div>
```

## CTA
```html
<div class="layout cta">
    <div class="wrapper">
        <div class="content">
            <h2>Lorem ipsum dolor </h2>
            <p>Excepteur sint occaecat cupidatat non proident..</p>
        </div>
    </div>
</div>
```