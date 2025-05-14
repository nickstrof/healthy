// SVG Paths

document.addEventListener("DOMContentLoaded", () => {
    const paths = document.querySelectorAll('#myPath path');

    paths.forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        window.addEventListener("scroll", () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            const drawLength = length * Math.min(scrollPercent * 1, 1);

            path.style.strokeDashoffset = length - drawLength;
        });
    });
});