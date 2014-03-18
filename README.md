ContentSlider
=============

a small jQuery based Content Slider with a navigation bar


HowTo
=============

Just add the Slider HTML to your website. You will have to at a Navigation element for each content element. ( I will work on a version which will generate the navigation)

```html
     <!-- SLIDER START-->
        <div id="slider-wrap">
            <div id="slider-navigation">
                <ul id="slider-navi">
                    <li class="slider-navItem"><a href="#">Link for Content 1</a></li>
                </ul>
            </div>
            <div id="slider-contentWrap">
                <div id="slider-contentContainer">
                    <div  class="slider-content"><h3>Content 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
					</p>
                     </div>

                </div>
            </div>
        </div>
        <!-- SLIDER END -->
```


Now just add 
```javascript
	$('#slider-wrap').contentSlider();
```

to your code and you are all set.


Options
=========
- contentSize : set the desired content size in px. Default is set to 800px
- slidingSpeed : set the speed to change between content in ms
- animateType : default is "swing". if you include jQueryUI you can choose from all animation Types
