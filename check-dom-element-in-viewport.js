// http://stackoverflow.com/a/7557433/740233
    isElementInViewport = function(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    
    
    

up vote
672
down vote
favorite
403
Is there an efficient way to tell if a DOM element (in an HTML document) is currently visible (appears in the viewport)?

(The question regards Firefox)

html firefox dom
shareimprove this question
edited Feb 13 '09 at 7:52
asked Sep 23 '08 at 21:24

benzaita
3,61731421
14	 	
Clarification: Visible, as in within the currently displayed rectangle. Visible, as in not hidden or display: none? Visible, as in not behind something else in the Z-order? – Adam Wright Sep 23 '08 at 21:31
3	 	
as in within the currently displayed rectangle. Thanks. Rephrased. – benzaita Sep 23 '08 at 21:40
  	 	
Could you update the title also? – EoghanM Dec 2 '08 at 23:48
1	 	
Note that all of the answers here will give you a false positive for items that are outside the visible area of their parent element (e.h. with overflow hidden) but inside the viewport area. – Andy E Mar 4 '13 at 13:48
  	 	
I've added my own solution that solves this problem – Andy E Mar 4 '13 at 14:18
show 2 more comments
23 Answers
active oldest votes
up vote
259
down vote
accepted
Update: Time marches on and so have our browsers. This technique is no longer recommended and you should use @Dan's solution below (https://stackoverflow.com/a/7557433/5628) if you do not need to support IE<7.

Original solution (now outdated):

This will check if the element is entirely visible in the current viewport:

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}
You could modify this simply to determine if any part of the element is visible in the viewport:

function elementInViewport2(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}
shareimprove this answer
edited May 23 at 12:10

Community♦
11
answered Sep 24 '08 at 2:40

Prestaul
58.5k86677
1	 	
Original function posted had a mistake. Needed to save the width/height before reassigning el... – Prestaul Sep 24 '08 at 2:56
6	 	
What if the element lives in a scrollable div and scrolled out of a view?? – amartynov Mar 6 '11 at 8:42
2	 	
Please review a newer version of the script below – Dan Sep 26 '11 at 15:29
1	 	
Also curious about @amartynov's question. Anyone know how to simply tell if an element is hidden due to overflow of an ancestor element? Bonus if this can be detected regardless of how deeply nested the child is. – Eric Nguyen Nov 7 '12 at 23:51
1	 	
@deadManN recursing through the DOM is notoriously slow. That is reason enough, but the browser vendors have also created getBoundingClientRect for specifically the purpose of finding element coordinates... Why wouldn't we use it? – Prestaul Jul 6 '15 at 15:25
show 6 more comments

up vote
1030
down vote
Now most browsers support getBoundingClientRect method, which has become the best practice. Using an old answer is very slow, not accurate and has several bugs.

The solution selected as correct is almost never precise. You can read more about its bugs.

This solution was tested on IE7+, iOS5+ Safari, Android2+, Blackberry, Opera Mobile, and IE Mobile 10.

function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

//Tracking element's visibility as an event.

//Place the following code at the bottom of <body> tag:

function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}

var handler = onVisibilityChange(el, function() {
    /* your code go here */
});


//jQuery
$(window).on('DOMContentLoaded load resize scroll', handler); 

/* //non-jQuery
if (window.addEventListener) {
    addEventListener('DOMContentLoaded', handler, false); 
    addEventListener('load', handler, false); 
    addEventListener('scroll', handler, false); 
    addEventListener('resize', handler, false); 
} else if (window.attachEvent)  {
    attachEvent('onDOMContentLoaded', handler); // IE9+ :(
    attachEvent('onload', handler);
    attachEvent('onscroll', handler);
    attachEvent('onresize', handler);
}
*/
