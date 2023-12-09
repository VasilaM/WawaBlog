document.addEventListener("DOMContentLoaded", function () {
    const leftContent = document.querySelector('.left-content');
    const timelineContainer = document.querySelector('.timeline-container');
    const scrubber = document.querySelector(".scrubber");
    const progressBar = document.querySelector(".progress-bar");
    const timestampContainer = document.querySelector(".timeline-timestamps");


    // Number of hours
    const numHours = 24;


    // Add timestamps to the separate container above the timeline
    for (let i = 0; i < numHours; i++) {
        const timestamp = document.createElement('div');
        timestamp.classList.add('timeline-timestamp');
        timestamp.textContent = `${i}`; // Adjust as needed

        // Attach a click event listener to each timestamp
        timestamp.addEventListener('click', function () {
            // Scroll to the corresponding content
            const targetContent = document.getElementById(`hour-${i}`);
            if (targetContent) {
                window.scrollTo({ top: targetContent.offsetTop-105, behavior: 'smooth' });
            }
        });

        timestampContainer.appendChild(timestamp);
      }

  
    const updateTimeline = () => {
      const totalHeight = leftContent.offsetHeight - window.innerHeight;
      const scrollPosition = window.scrollY - leftContent.offsetTop;
  
      // Calculate the percentage of the scroll position within the timeline
      const percentage = totalHeight > 0 ? scrollPosition / totalHeight : 0;
  
      // Calculate the left position of the scrubber based on the percentage and timeline container
      const maxLeft = timelineContainer.offsetWidth - scrubber.offsetWidth;
      const scrubberLeft = percentage * maxLeft;
  
      // Update the left position of the scrubber based on the scroll position
      scrubber.style.left = scrubberLeft + "px";
  
      // Update the progress bar's width based on the percentage
      progressBar.style.width = percentage * 100 + "%";
    };
  
    const updateScrollPosition = () => {
      // Calculate the percentage of the scrubber position
      const scrubberLeft = parseFloat(scrubber.style.left.replace("px", "") || 0);
      const maxLeft = timelineContainer.offsetWidth - scrubber.offsetWidth;
      const percentage = scrubberLeft / maxLeft;
  
      // Calculate the target scroll position based on the percentage
      const totalHeight = leftContent.offsetHeight - window.innerHeight;
      const targetScrollPosition = percentage * totalHeight + leftContent.offsetTop;
  
      // Scroll to the target position without smooth behavior for immediate response
      window.scrollTo({ top: targetScrollPosition });
    };
  
    // Event listeners for scrubber interaction
    scrubber.addEventListener("mousedown", function (event) {
      const initialX = event.clientX - scrubber.getBoundingClientRect().left;
  
      const handleMouseMove = (event) => {
        // Calculate the new position of the scrubber
        const newLeft = event.clientX - initialX;
  
        // Ensure the scrubber stays within the timeline bounds
        const maxLeft = timelineContainer.offsetWidth - scrubber.offsetWidth;
        const boundedLeft = Math.max(0, Math.min(newLeft, maxLeft));
  
        // Set the new position
        scrubber.style.left = boundedLeft + "px";
        updateScrollPosition();
      };
  
      const handleMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    });
  
    // Event listener for the window scroll
    window.addEventListener("scroll", function () {
      updateTimeline();
    });
  
    // Initial update
    updateTimeline();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const pageBackgroundColor = getComputedStyle(document.body).backgroundColor;

    const element = document.getElementById("timeline-timestamps"); // Replace with your actual element ID
    element.style.backgroundColor = pageBackgroundColor;
    element.style.opacity = 1; // Adjust the opacity as needed
});