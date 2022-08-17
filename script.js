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
