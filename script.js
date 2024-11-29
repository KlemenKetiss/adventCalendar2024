 // Function to check if a grid item should be clickable based on current day
 function updateClickableItems() {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1; // Adding 1 since getMonth() returns 0-11
    const currentYear = new Date().getFullYear();
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        // Get the number from the div's text content
        const itemNumber = parseInt(item.textContent);
        console.log(currentDay, currentMonth)
        if (itemNumber > currentDay && currentMonth == 12 && currentYear == 2024) {
            // Remove onclick handlers and add visual indication that item is disabled
            item.removeAttribute('onclick');
/*             item.style.cursor = 'default';
            item.style.opacity = '0.5'; */
            item.style.fontSize = '40px';
        }else{
            item.style.cursor = 'default';
            item.style.opacity = '1';
            item.style.fontSize = '40px';
        }
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', updateClickableItems);
function showContent(id) {
    const clickedDiv = document.querySelector(`[onclick="showContent('${id}')"]`);
    const content = document.getElementById('content' + id);
    
    if (clickedDiv && content) {
        if (content.style.display !== 'flex') {
            // Show this content and bring to front
            content.style.display = 'flex';
            content.style.zIndex = '999'; // Ensure content appears on top
            clickedDiv.textContent = ''; // Remove the number when showing content
            
            // Add rotation animation
            clickedDiv.classList.add('rotating');
            setTimeout(() => {
                clickedDiv.classList.remove('rotating');
            }, 1000);
            
            // Move the content into the clicked div
            clickedDiv.appendChild(content);
        }
    }
}