/**
 * @namespace scroll
 */
export default function () {
    let latestKnownScrollY = 0;

    function checkScrollAmount() {
        latestKnownScrollY = window.scrollY;
        console.log(latestKnownScrollY);
    }

    function onScroll() {
        checkScrollAmount()
    }

    window.addEventListener('scroll', onScroll, false);
}