# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Frontend Mentor Space tourism website](https://user-images.githubusercontent.com/84665360/147949700-75f1baed-f813-495c-8526-c7ebfd0231ab.png)

### Links

- [Solution URL](https://github.com/ZaidMarrie/space-tourism-website)
- [Live Site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Gulp workflow
- SASS/SCSS (CSS Preprocessor)
- JavaScript (with ES6+ syntax)

### What I learned

Building this multipage website I have used HTML aria & data attributes, the aria attributes stand for 'Accessible Rich Internet Applications' which enables us to make content more accessible. Data attribute on the other hand allows us to create custom HTML attributes. I also created my very first functional tab.

See below some code snippets

```html
<div class="tab-list flex" role="tablist">
  <button class="indicator--disc" aria-selected="true" aria-controls="commander-tab" data-tab-image="commander-image" role="tab" tabindex="0">
    <span class="sr-only">Commander</span>
  </button>
</div>
```

```js
const targetImage = targetTab.getAttribute('data-tab-image')
```

## Author

- Frontend Mentor - [@ZaidMarrie](https://www.frontendmentor.io/profile/ZaidMarrie)
- Twitter - [@LeKoels27](https://twitter.com/LeKoels27)

## Acknowledgments

[Kevin Powell's Course](https://scrimba.com/learn/spacetravel)
