/**
 * @namespace scroll
 */
export default function () {

    function checkScrollAmount() {

        let main = document.getElementById('main');
        let scrolled = main.offsetTop;

        if ( window.scrollY >= scrolled ) {
            document.body.classList.add('header-not-at-top');
        } else {
            document.body.classList.remove('header-not-at-top');
        }

    }

    function onScroll() {
        checkScrollAmount();
    }

    window.addEventListener('scroll', onScroll, false);
    window.onresize = function() {
        checkScrollAmount();
    };
    window.onload = function() {
        checkScrollAmount();
    };
}