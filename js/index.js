window.addEventListener('DOMContentLoaded', function() {
    function projectsSlider() {
        let index = 1,
            slide = document.querySelector(".examples__img img"),
            slideMobile = document.querySelector(".slider-mobile img"),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'),
            prevMobile = document.querySelector('.prev-mobile'),
            nextMobile = document.querySelector('.next-mobile'),
            dots = document.getElementsByClassName("examples__slider-dot"),
            names = document.getElementsByClassName("examples-nav__item"),
            city = document.querySelector(".examples__details-city"),
            area = document.querySelector(".examples__details-area"),
            time = document.querySelector(".examples__details-time"),
            cost = document.querySelector(".examples__details-cost"),
            info = [
                {
                    city: "Rostov-on-Don <br> LCD admiral",
                    area: "81 m2",
                    time: "3.5 months",
                    cost: "Upon request",
                    path: "./img/example1.jpg"
                },
                {
                    city: "Sochi <br> Thieves",
                    area: "105 m2",
                    time: "4 months",
                    cost: "Upon request",
                    path: "./img/example2.jpg"
                },
                {
                    city: "Rostov-on-Don <br> Patriotic",
                    area: "93 m2",
                    time: "3 months",
                    cost: "Upon request",
                    path: "./img/example3.jpg"
                }
            ];	

        function moveSlide(n) {
            if (n > info.length) {
                index = 1;
            }

            if (n < 1) {
                index = info.length;
            }
            slide.src = info[index - 1].path;
            slideMobile.src = info[index - 1].path;

            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("active-dot");
                names[i].classList.remove("active-project");
            }

            dots[index - 1].classList.add("active-dot");
            names[index - 1].classList.add("active-project");
            city.innerHTML = info[index-1].city;
            area.innerHTML = info[index-1].area;
            time.innerHTML = info[index-1].time;
            cost.innerHTML = info[index-1].cost;
        };

        function prevSlide() {
            moveSlide(index -= 1);
        }

        function nextSlide() {
            moveSlide(index += 1);
        }
    
        prev.addEventListener('click', prevSlide);
        next.addEventListener('click', nextSlide);
        prevMobile.addEventListener('click', prevSlide);
        nextMobile.addEventListener('click', nextSlide);

        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", function() {
                moveSlide(index = i + 1);
            });

            names[i].addEventListener("click", function() {
                moveSlide(index = i + 1);
            });
        }
    }

    projectsSlider();
});