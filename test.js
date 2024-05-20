window.addEventListener('load', function() {
    // Find the external counter element
    const externalCounter = document.querySelector('script[src*="freehitcounters.org"]');

    // Check if the external counter element exists and has loaded successfully
    if (externalCounter && externalCounter.nextSibling && externalCounter.nextSibling.textContent) {
        // Extract the total visitor count from the external counter
        const visitorCountText = externalCounter.nextSibling.textContent.trim();
        const totalVisitors = visitorCountText.match(/Total:\s*(\d+)/)[1];

        // Update the visitor-count element with the extracted value
        const visitorCountElement = document.getElementById('visitor-count');
        visitorCountElement.textContent = totalVisitors;
    } else {
        console.error('External counter not found or failed to load.');
    }
});