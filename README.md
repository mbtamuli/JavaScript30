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
