# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![screenshot](https://media.giphy.com/media/kJZwTEExDrqilKCYFb/giphy.gif)



### Links

- Solution URL: [https://github.com/pyaesonepsn/time-tracking-dashboard-main](https://your-solution-url.com)
- Live Site URL: [https://pyaesonepsn.github.io/time-tracking-dashboard-main/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- javaScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

In this project, I learnt quite a lot especially fetching data from API and manipulating DOM based on the API data. 

This below javascript code is the challenge for me. And I managed to solve it and successfully manipulate DOM with given API JSON data.

```js
const dailyList = document.querySelector('#daily')
const weeklyList = document.querySelector('#weekly')
const monthlyList = document.querySelector('#monthly')
const current = document.querySelectorAll('.current')
const previous = document.querySelectorAll('.previous')

const getDailyData = async () => {
    const response = await fetch('./data.json')
    const data = await response.json()
    current.forEach((e,i) => {
        current[i].innerHTML = `${data[i].timeframes.daily.current}hrs`
        previous[i].innerHTML = `Last Day - ${data[i].timeframes.daily.previous}hrs`
    })
}
const getWeeklyData = async () => {
    const response = await fetch('./data.json')
    const data = await response.json()
    current.forEach((e,i) => {
        current[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`
        previous[i].innerHTML = `Last Week - ${data[i].timeframes.weekly.previous}hrs`
    })
}
const getMonthlyData = async () => {
    const response = await fetch('./data.json')
    const data = await response.json()
    current.forEach((e,i) => {
        current[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`
        previous[i].innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hrs`
    })
}

dailyList.addEventListener('click', () => {
    dailyList.classList.add('active')
    weeklyList.classList.remove('active')
    monthlyList.classList.remove('active')
    getDailyData()
})
weeklyList.addEventListener('click', () => {
    dailyList.classList.remove('active')
    weeklyList.classList.add('active')
    monthlyList.classList.remove('active')
    getWeeklyData()
}) 
monthlyList.addEventListener('click', () => {
    dailyList.classList.remove('active')
    weeklyList.classList.remove('active')
    monthlyList.classList.add('active')
    getMonthlyData()
})
```

### Continued development

Working with API is a fun and interesting. And I think that fetching data from API and manipulate this data with DOM will be important in the future projects. Thus, I will probably keep focusing on that. 


## Author

- Website - [https://github.com/pyaesonepsn](github)
- Frontend Mentor - [https://www.frontendmentor.io/profile/pyaesonepsn](frontendmentor)
- Twitter - [https://www.twitter.com/pyaesonepsn](twitter)


