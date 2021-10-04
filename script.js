function adjustBookmarkIcon() {
    var progressSlider = document.querySelector('#progress');
    var bookmarkIcon = document.querySelector('.bookmark');

    var value = (progressSlider.value - progressSlider.min) / (progressSlider.max - progressSlider.min);
    bookmarkIcon.style.left = value * 100 + "%";
    adjustBookmarkIconPositionForDifferentBrowsers();
}

function adjustBookmarkIconPositionForDifferentBrowsers() {
    var bookmarkIcon = document.querySelector('.bookmark');
    var wrapper = bookmarkIcon.parentNode;
    var isEdge = CssPseudoSelector.isSupported("::-ms-thumb");
    var isSafari = CssPseudoSelector.isSupported("::-webkit-full-page-media");
    var isChrome = CssPseudoSelector.isSupported("::-webkit-slider-thumb");
    var isFirefox = CssPseudoSelector.isSupported("::-moz-range-thumb");

    if (isEdge) {
        wrapper.style.height = "55px";
        bookmarkIcon.style.marginLeft = "-14px";
        bookmarkIcon.style.marginTop = "5px";
    } else if (isSafari) {
        wrapper.style.height = "35px";
        bookmarkIcon.style.marginLeft = "-5px";
        bookmarkIcon.style.marginTop = "-5px";
    } else if (isChrome) {
        wrapper.style.height = "35px";
        bookmarkIcon.style.marginLeft = "-5px";
        bookmarkIcon.style.marginTop = "-6px";
    } else if (isFirefox) {
        wrapper.style.height = "35px";
        bookmarkIcon.style.marginLeft = "-1px";
        bookmarkIcon.style.marginTop = "-11px";
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    var progressSlider = document.querySelector('#progress');
    progressSlider.addEventListener('change', adjustBookmarkIcon);


    progressSlider.value = 24;
    adjustBookmarkIcon();
});