# launch.ly jQuery Plugin for Counter

jQuery Plugin for displaying counter

## Getting Started

Create the DIV container to display the counter

```html
<div id="counter">0</div>
```

Then load the jQuery

```html
<script type="text/javascript" src="//code.jquery.com/jquery-1.10.1.min.js"></script>
```

Then load the counter jQuery plugin

```html
<script src="jquery.launchly-counter.js"></script>
```

Then start calling the counter

```html
<script>
jQuery(function($) {
  var counter = $('#counter').launchlyCounter({
    start: 0,
    end: 100,
    duration: 5000
  });
  
  counter.go(1);
});
</script>
```