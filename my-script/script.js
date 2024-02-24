AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    function animateAccordionItems() {
        accordionItems.forEach((item, index) => {
            if (item.getBoundingClientRect().top < window.innerHeight) {
                item.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", animateAccordionItems);
    animateAccordionItems(); // Untuk animasi saat halaman pertama kali dimuat
});



// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

$(".fw-bold").counterUp({ time: 1000 });


// Function to handle animation when element is in viewport
function animateFAQ() {
    const faqItems = document.querySelectorAll('.accordion-item');
    faqItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('animate__fadeIn');
        }
    });
}

// Event listener for scroll event
window.addEventListener('scroll', animateFAQ);

// Initial animation check
animateFAQ();


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
});







