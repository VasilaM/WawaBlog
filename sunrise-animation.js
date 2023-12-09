document.addEventListener("DOMContentLoaded", function () {
    const sun1 = document.getElementById('sun1');
    const sun2 = document.getElementById('sun2');
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    function updateSun(sun, angleOffset, color) {
        const scrollPosition = window.scrollY;
        const percentage = (scrollPosition / totalHeight);

        
        const arcRadius = (window.innerWidth < 768) ? window.innerHeight / 2 :  window.innerHeight / 3;
        const angle = (percentage * Math.PI * 2) + angleOffset;

        const sunX = arcRadius * Math.sin(angle);
        const sunY = window.innerHeight / 2 - arcRadius * Math.cos(angle);

        sun.style.transform = `translate(${sunX}px, ${sunY}px) `;
        sun.style.backgroundColor = color;
    }

    // Event listener for the window scroll
    window.addEventListener("scroll", function () {
        updateSun(sun1, Math.PI/6, "yellow");
        updateSun(sun2, Math.PI + Math.PI/6, "grey");
    });

    // Initial update
    updateSun(sun1, Math.PI + Math.PI/6, "yellow");
    updateSun(sun2, Math.PI + Math.PI/6, "grey");
});

