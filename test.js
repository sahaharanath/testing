// Function to update visitor count
function updateVisitorCount() {
    // Retrieve visitor count from local storage
    let visitorCount = localStorage.getItem('visitorCount');

    // Check if visitor count is null or undefined
    if (visitorCount === null || visitorCount === undefined) {
        // Set visitor count to 1 if it's null or undefined
        visitorCount = 1;
    } else {
        // Check if the visitor has already been counted
        if (!localStorage.getItem('visitorFlag')) {
            // Increment visitor count
            visitorCount = parseInt(visitorCount) + 1;
            // Set flag to indicate visitor has been counted
            localStorage.setItem('visitorFlag', true);
        }
    }

    // Update visitor count in local storage
    localStorage.setItem('visitorCount', visitorCount);

    // Display visitor count on the webpage
    const visitorCountElement = document.getElementById('visitor-count');
    if (visitorCountElement) {
        visitorCountElement.textContent = visitorCount;
    }
}

// Update visitor count on page load
updateVisitorCount();
