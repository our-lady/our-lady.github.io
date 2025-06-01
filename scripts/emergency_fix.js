// Debug script to catch JavaScript errors
window.onerror = function(message, source, lineno, colno, error) {
    console.log('JavaScript Error:');
    console.log('Message:', message);
    console.log('Source:', source);
    console.log('Line:', lineno);
    console.log('Column:', colno);
    console.log('Error object:', error);
    
    // Create a visible error message on the page
    const errorDiv = document.createElement('div');
    errorDiv.style.position = 'fixed';
    errorDiv.style.top = '10px';
    errorDiv.style.right = '10px';
    errorDiv.style.backgroundColor = 'red';
    errorDiv.style.color = 'white';
    errorDiv.style.padding = '10px';
    errorDiv.style.zIndex = '9999';
    errorDiv.innerHTML = `Error: ${message}<br>Line: ${lineno}, Col: ${colno}<br>Source: ${source}`;
    document.body.appendChild(errorDiv);
    
    return false; // Let default error handling continue
};

// Force PT button to work
document.addEventListener('DOMContentLoaded', function() {
    console.log('Emergency language fix loaded');
    
    // Remove all previous click handlers from PT button
    const ptButton = document.getElementById('lang-pt');
    if (ptButton) {
        // Clone the button to remove all event listeners
        const newPtButton = ptButton.cloneNode(true);
        ptButton.parentNode.replaceChild(newPtButton, ptButton);
        
        // Add new direct handler
        newPtButton.addEventListener('click', function(e) {
            console.log('Emergency PT button clicked');
            
            // Stop event propagation
            e.preventDefault();
            e.stopPropagation();
            
            // Set language directly
            localStorage.setItem('ourLadyLanguage', 'pt');
            
            // Update button classes
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            newPtButton.classList.add('active');
            
            // Update HTML lang attribute
            document.documentElement.lang = 'pt';
            
            // Force refresh to apply changes
            window.location.reload();
            
            return false;
        });
    }
});
