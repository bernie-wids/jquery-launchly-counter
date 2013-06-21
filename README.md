# launch.ly jQuery Plugin for Counter

jQuery Plugin for displaying counter

## Getting Started

In your web page:

```html
<div id="counter">0</div>
<script src="jquery.js"></script>
<script src="jquery.launchly-counter.js"></script>
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
