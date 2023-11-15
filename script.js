document.addEventListener('DOMContentLoaded', function() {
    // Add cloud scrolling effect on each .cloudScroll element
    const cloudScrollElements = document.querySelectorAll('.cloudScroll');
    cloudScrollElements.forEach(element => {
        cloudScroll(element)
    });

    //Adjust cloud scroll when screen is 1000px wide or greater
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
});

function cloudScroll(cloud) {
    for (let i = 0; i < Math.floor(Math.random() * (20 - 10 + 1)) + 10; i++) {
        const littleCloud = document.createElement("div");
        littleCloud.classList.add("littleCloud");

        const size = Math.floor(Math.random() * (7 - 2 + 1)) + 2;
        littleCloud.style.width = `${(size * 16)}px`;
        littleCloud.style.height = `${(size * 16)}px`;

        const time = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        const direction = Math.random() < 0.5;
        littleCloud.style.animation = direction ? `cloudScroll ${time}s infinite linear` : `cloudScroll ${time}s infinite reverse linear`;

        const choice = Math.random() < 0.5;
        if (choice) {
            littleCloud.style.top = `${Math.floor(Math.random() * (80 - 0))}%`;
        } else {
            littleCloud.style.bottom = `${Math.floor(Math.random() * (80 - 0))}%`;
        }

        cloud.appendChild(littleCloud);
    }
}

function checkScreenWidth() {
    const screenWidth = window.innerWidth;
    const standout = document.querySelector(".standout");

    if (screenWidth >= 1000) {
        if (!standout.classList.contains('cloudScroll')) {
            standout.classList.add('cloudScroll');
            cloudScroll(standout);
        }
    } else {
        const littleClouds = standout.querySelectorAll('.littleCloud');
        if (littleClouds.length > 0) {
            littleClouds.forEach(cloud => cloud.remove());
            standout.classList.remove('cloudScroll');
        }
    }
}