"use strict";

window.addEventListener("DOMContentLoaded", function () {
    // tab logic start
    const tabsHeaders = document.querySelectorAll(".tabheader__item");
    const tabsContents = document.querySelectorAll(".tabcontent");
    const tabsHeadersParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContents.forEach(tabContent => {
            tabContent.classList.add("hide");
            tabContent.classList.remove("show", "fade");
        });

        tabsHeaders.forEach(tabHeader => tabHeader.classList.remove("tabheader__item_active"));
    }

    function showTabContent(i = 1) {
        tabsContents[i].classList.add("show", "fade");
        tabsContents[i].classList.remove("hide");
        tabsHeaders[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabsHeadersParent.addEventListener("click", (e) => {
        if (e.target && e.target.matches(".tabheader__item")) {
            tabsHeaders.forEach((tabHeader, index) => {
                if (e.target === tabHeader) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });
    // tab logic end
    
    // timer logic start
        const deadline = "2023-07-17";
        function getTimeRemaining (endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date()); // մնացած ժմկ․ միլիվարկյաններով
        let days, hours, minutes, seconds;
        
        
        if (total <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(total / (1000 * 60 * 60 *24)); // ստանում ենք օրը
            hours = Math.floor((total / (1000 * 60 * 60) % 24)); // ստանում ենք ժամը
            minutes = Math.floor((total / 1000 /60) % 60); // ստանում ենք րոպեները
            seconds = Math.floor((total / 1000) % 60); // ստանում ենք վայրկյանները
        }
        
        return { // ES6-ից սկսած, քանի որ key և value արժեքները = են, կարող ենք կրճատ գրել
        total,
        days,
        hours,
        minutes,
        seconds
        }
        }
        
        function setZero (n) {
            return n >= 0 && n < 10 ? `0${n}` : n;
        }
        
        function setClock(selector, endtime) {
            const timer = document.querySelector(selector);
            const daysBlock = timer.querySelector("#days");
            const hoursBlock = timer.querySelector("#hours");
            const minutesBlock = timer.querySelector("#minutes");
            const secondsBlock = timer.querySelector("#seconds");
            const timerId = setInterval(updateClock, 1000);
            
            updateClock();
            function updateClock () {
                const {total, days, hours, minutes, seconds} = getTimeRemaining(endtime);
                
                daysBlock.textContent = setZero(days);
                hoursBlock.textContent = setZero(hours);
                minutesBlock.textContent = setZero(minutes);
                secondsBlock.textContent = setZero(seconds);
                
                if (total <= 0) {
                clearInterval(timerId);
                }
            }
        }
        
      
        
        setClock(".timer", deadline);
    // timer logic end
});

