# ElementPresence V1.1 #

### Author: Andrea Lai (me@andrealai.com), ###

### Description: ###
Element presence is a simple function resolving a promise when an DOM element is found in the page.
The function not only looks for the specific selector provided as a param but also listen for any subsequent changes in the DOM that might lead to the injection of the DOM element we are looking for in the page.
It is also able to catch when the DOM element is injected in a page as part as another DOM element innerHTML ... so, 
no matter how or when the element is injected in the page, ElementPresence is going to find it!

Enjoy :) 

### Usages: ###

```
elementPresence('.element-class').then( ( element ) => { 
	myOtherFunction() 
});
```
