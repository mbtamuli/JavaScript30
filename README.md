![](https://javascript30.com/images/JS3-social-share.png)

# [JavaScript30](https://github.com/mbtamuli/JavaScript30)

Wes Bos' ([@wesbos](https://github.com/wesbos)) JavaScript 30 Day Challenge.
This is a plain vanilla JavaScript exercise, without any libraries, 
transpilers or frameworks.

Check out the course at [https://JavaScript30.com](https://JavaScript30.com)

This repo is just a follow along to the course.

---

## Day Log

### Day 1 - September 30, 2019

Live Link - [JavaScript Drum Kit](https://mriyam.dev/JavaScript30/CompletedChallenges/01-js-drum-kit/)

**Thoughts**: 
Learned about [`keydown` event](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event), [`transitionend` event](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event) and little bit about the [`audio` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).

### Day 2 - October 1, 2019

Live Link - [JS and CSS Clock](https://mriyam.dev/JavaScript30/CompletedChallenges/02-js-and-css-clock/)

**Thoughts**:
Learned about CSS [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform), the JavaScript method [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) and a little bit about the global object [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

Apart from learning these, made a modification to the clock, added the clock
numbers as an SVG, then played around with the `width`, `top` and `left`
properties of the hour, minute and second hands to have a better looking clock.
Better being relative. 😆

### Day 3 - October 2, 2019

Live Link - [CSS Variables](https://mriyam.dev/JavaScript30/CompletedChallenges/03-css-variables/)

**Thoughts**:
Woah, I wasn't even aware vanilla CSS had variable support(in whatever way). But I learned it today. 😎 
I also learned about the [`:root` CSS element](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) and that in JavaScript it can be referenced by [`document.documentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement). Also used [`dataset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset) attributes to set the suffix for each CSS property modified by the inputs.

### Day 4 - October 3, 2019

Live Link - [Array Cardio Day 1](https://mriyam.dev/JavaScript30/CompletedChallenges/04-array-cardio-day-1/)

**Thoughts**:
I had previously encountered and practiced some stuff on [`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). I had also encountered [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) in the MDN docs while solving a problem. So today I completed the whole exercise without looking even at the process, let alone the solution. Proud! 😎

### Day 5 - October 4, 2019

Live Link - [Flex Panel Gallery](https://mriyam.dev/JavaScript30/CompletedChallenges/05-flex-panel-gallery/)

**Thoughts**:
[Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) is completely new to me. Read the CSS properties, Alignnment properties and glossary terms mentioned on the [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout#Reference) that I used in this challenge. Will have to read the other properties also to have a complete view of Flex Box Layout.

### Day 6 - October 5, 2019

Live Link - [Type Ahead](https://mriyam.dev/JavaScript30/CompletedChallenges/06-type-ahead/)

**Thoughts**:
Almost all the topics today are new to me. So I read up on MDN like always. I actually found that the [`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) event was fired every time the value of an input changed, instead of only when it is being committed(press enter, click elsewhere, etc). So instead of using [`change`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) and [`keyup`](https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event), I swapped it with the `input` event only. I also swapped the cities list with a list of Indian cities 🇮🇳. But it didn't have a population count, so I removed everything related to population.

### Day 7 - October 7, 2019

Live Link - [Array Cardio Day 2](https://mriyam.dev/JavaScript30/CompletedChallenges/07-array-cardio-day-2/)

**Thoughts**:
Similar to the Day 4, today was a breeze and I did the exercise within 1 Pomodoro. (I follow the Pomodoro technique). I had already read up on [`Array.prototype.some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some), [`Array.prototype.every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`Array.prototype.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) and [`Array.prototype.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

### Day 8 - October 8, 2019

Live Link - [Fun with HTML5 Canvas](https://mriyam.dev/JavaScript30/CompletedChallenges/08-fun-with-html5-canvas/)

**Thoughts**:
Today was completely new for me again. Had never worked with the Canvas element. Read about all the methods and attributes of canvas I used on MDN, and then some. I tied up [`CanvasRenderingContext2D.clearRect()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect) to a button.

### Day 9 - October 9, 2019

Live Link - [Dev Tools Domination](https://mriyam.dev/JavaScript30/CompletedChallenges/09-dev-tools-domination/)

**Thoughts**:
Wow, even the console was hiding so much functionality. I just new about `console.log`, `console.warn`, `console.error`, `console.info`. Especially love the [`console.group()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/group) feature and the [`console.time()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/time) feature.

### Day 10 - October 10, 2019

Live Link - [Hold Shift and Check Checkboxes](https://mriyam.dev/JavaScript30/CompletedChallenges/10-hold-shift-and-check-checkboxes/)

**Thoughts**:
In this exercise, I tried it myself first, and then saw the solution. Once you see the solution, it seems simple enough. Even though the code I wrote is not as clean or optimal, I'm happy that I was able to complete it without using any libraries and without looking at the solution! 😅💪

### Day 11 - October 11, 2019

Live Link - [Custom Video Player](https://mriyam.dev/JavaScript30/CompletedChallenges/11-custom-video-player/)

**Thoughts**:
This was pretty cool. I'll revisit this once I'm done with all the challenges. I learnt quite a few properties and methods of [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) and also about using the [`flex-basis`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) CSS property.

### Day 12 - October 12, 2019

Live Link - [Key Sequence Detection](https://mriyam.dev/JavaScript30/CompletedChallenges/12-key-sequence-detection/)

**Thoughts**:
It was fun today. Apparently the [KONAMI code exists on a lot of websites](https://en.wikipedia.org/wiki/Konami_Code#References_outside_of_Konami_games). I modified the demo a little to display the key that was pressed.

### Day 13 - October 13, 2019

Live Link - [Slide in on Scroll](https://mriyam.dev/JavaScript30/CompletedChallenges/13-slide-in-on-scroll/)

**Thoughts**:
Lots of new stuff learned today. Used in the demo were [`window.scrollY`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY), [`window.innerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight), [`HTMLelement.offsetTop`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop). Also [this article on _debouncing_](https://davidwalsh.name/javascript-debounce-function) explains what it does along with the code example.

### Day 14 - October 14, 2019

Live Link - [JavaScript References VS Copying](https://mriyam.dev/JavaScript30/CompletedChallenges/14-javascript-references-vs-copying/)

**Thoughts**:
This one was a quick study. I had already learnt about copying before. Although the [`_.cloneDeep`](https://lodash.com/docs/4.17.15#cloneDeep) was new.

### Day 15 - October 15, 2019

Live Link - [LocalStorage](https://mriyam.dev/JavaScript30/CompletedChallenges/15-localstorage/)

**Thoughts**:
Learned about the LocalStorage methods [`localStorage.setItem`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) and [`localStorage.getItem`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem). Will revisit this after the whole challenge completes to add the _Delete All_, _Check All_ and _Uncheck All_ buttons.

### Day 16 - October 16, 2019

Live Link - [Mouse Move Shadow](https://mriyam.dev/JavaScript30/CompletedChallenges/16-mouse-move-shadow/)

**Thoughts**:
Mostly new stuff. Few of the values were familiar from previous challenges. But at the end, it's wicked cool when you get to play around! 😆

### Day 17 - October 17, 2019

Live Link - [Sort Without Articles](https://mriyam.dev/JavaScript30/CompletedChallenges/17-sort-without-articles/)

**Thoughts**:
This was an easy one. Although, the code I wrote was not an optimal one, but I'm still happy I got it completely without getting any help from the solution part of the video.

### Day 18 - October 18, 2019

Live Link - [Adding Up Times With Reduce](https://mriyam.dev/JavaScript30/CompletedChallenges/18-adding-up-times-with-reduce/)

**Thoughts**:
Really starting to appreciate map and reduce in general.

### Day 19 - October 19, 2019

Live Link - [Webcam Fun](https://mriyam.dev/JavaScript30/CompletedChallenges/19-webcam-fun/)

**Thoughts**:
This was tiring but fun. Also the more weird ones end up having browser compatibility issues. But this was lots of information packed into one challenge. Will have to revisit this one too, not for modifying, just understanding all the methods available on media streams and stuff.

### Day 20 - October 20, 2019

Live Link - [Speech Detection](https://mriyam.dev/JavaScript30/CompletedChallenges/20-speech-detection/)

**Thoughts**:
Wow. This was interesting. Speech recognition right there in the browser. But currently it's Chrome only, but according to docs, Firefox plans to add it by 2020.

### Day 21 - October 21, 2019

Live Link - [Geolocation](https://mriyam.dev/JavaScript30/CompletedChallenges/21-geolocation/)

**Thoughts**:
Well, I didn't use a simulator and went for a walk! 😆 But the speed was only being changed in decimal places for km/hr setting.

### Day 22 - October 22, 2019

Live Link - [Follow Along Link Highlighter](https://mriyam.dev/JavaScript30/CompletedChallenges/22-follow-along-link-highlighter/)

**Thoughts**:
The [`Element.getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) was new. Also learnt about the [`mouseenter`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event) event.

### Day 23 - October 23, 2019

Live Link - [Speech Synthesis](https://mriyam.dev/JavaScript30/CompletedChallenges/23-speech-synthesis/)

**Thoughts**:
Okay, so a lot of new stuff. The whole [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) WebAPI was new. It was fun. Having this work cross browser, cross platform will be a pain! 😅

### Day 24 - October 24, 2019

Live Link - [Sticky Nav](https://mriyam.dev/JavaScript30/CompletedChallenges/24-sticky-nav/)

**Thoughts**:
This is something I've always used Bootstrap for! 😆 It's nice to do this without framework.

### Day 25 - October 25, 2019

Live Link - [Event Capture, Propagation, Bubbling and Once](https://mriyam.dev/JavaScript30/CompletedChallenges/25-events/)

**Thoughts**:
This was a confusing one. I am pretty sure I have not understood the real use cases of each of the permutations of these methods/attributes/options - [`options` for addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), [`event.stopPropagation()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation). Will have to revisit this again.

### Day 26 - October 26, 2019

Live Link - [Stripe Follow Along Nav](https://mriyam.dev/JavaScript30/CompletedChallenges/26-stripe-follow-along-nav/)

**Thoughts**:
This exercise was a good introduction to explain the fact that we can use the same methods and properties in various combinations and add a little bit of math to create amazing functions.

### Day 27 - October 27, 2019

Live Link - [Click and Drag](https://mriyam.dev/JavaScript30/CompletedChallenges/27-click-and-drag/)

**Thoughts**:
So I learnt about the [`pageX`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX) method which was used to create this cool click and drag event. But mostly it was more about how to use the same position and other properties of elements and the mouse to create cool effects.

### Day 28 - October 28, 2019

Live Link - [Video Speed Controller](https://mriyam.dev/JavaScript30/CompletedChallenges/28-video-speed-controller/)

**Thoughts**:
I'm really thankful to Wes for creating this course. It's really fun learning the behind the scenes of these awesome effects. Now whenever I see cool effects I start thinking of how can I replicate it! 👀

### Day 29 - October 29, 2019

Live Link - [Countdown Timer](https://mriyam.dev/JavaScript30/CompletedChallenges/29-countdown-timer/)

**Thoughts**:
This is a tool I might start using along with a ToDo list feature and using localStorage to have it work offline too! 😆
