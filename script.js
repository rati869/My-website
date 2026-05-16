// Simulate loading progress
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading time (5 seconds)
    const loadingDuration = 5000; // 5 seconds
    
    setTimeout(() => {
        // Optional: Add fade-out animation before redirecting or showing main content
        document.querySelector('.loading-container').style.animation = 'fadeOut 0.5s ease-out';
        
        // After fade out, either redirect or show main content
        setTimeout(() => {
            // Option 1: Redirect to another page
            // window.location.href = 'main.html';
            
            // Option 2: Show a message (uncomment to use)
            // document.body.innerHTML = '<h1>Welcome!</h1>';
            
            // Option 3: Remove loading screen and show main content
            console.log('Loading complete!');
        }, 500);
    }, loadingDuration);
});

// Add fade-out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
