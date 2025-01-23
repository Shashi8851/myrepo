// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Create dynamic background effect
    const container = document.querySelector('.container');
    
    // Add hover effect to container
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        container.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.3), rgba(255,255,255,0.1))`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.background = 'rgba(255, 255, 255, 0.2)';
    });

    // Add typing effect to headers
    const headers = document.querySelectorAll('h1, h2');
    
    headers.forEach(header => {
        const text = header.textContent;
        header.textContent = '';
        
        let index = 0;
        function typeText() {
            if (index < text.length) {
                header.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            }
        }
        
        typeText();
    });

    // Add random color changing effect
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Create color change interval
    const colorChangeInterval = setInterval(() => {
        document.body.style.background = `linear-gradient(135deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`;
    }, 5000);

    // Add click event to stop color changing
    container.addEventListener('click', () => {
        clearInterval(colorChangeInterval);
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    });

    // Create floating elements
    function createFloatingElement() {
        const floatingElement = document.createElement('div');
        floatingElement.classList.add('floating-element');
        floatingElement.style.position = 'absolute';
        floatingElement.style.width = `${Math.random() * 20 + 10}px`;
        floatingElement.style.height = floatingElement.style.width;
        floatingElement.style.background = getRandomColor();
        floatingElement.style.borderRadius = '50%';
        floatingElement.style.opacity = '0.5';
        floatingElement.style.top = `${Math.random() * window.innerHeight}px`;
        floatingElement.style.left = `${Math.random() * window.innerWidth}px`;
        
        document.body.appendChild(floatingElement);

        // Animate floating element
        function animateFloatingElement() {
            const currentTop = parseFloat(floatingElement.style.top);
            const currentLeft = parseFloat(floatingElement.style.left);
            
            floatingElement.style.top = `${currentTop + Math.sin(Date.now() * 0.001) * 2}px`;
            floatingElement.style.left = `${currentLeft + Math.cos(Date.now() * 0.001) * 2}px`;
            
            requestAnimationFrame(animateFloatingElement);
        }
        
        animateFloatingElement();
    }

    // Create multiple floating elements
    for (let i = 0; i < 10; i++) {
        createFloatingElement();
    }
});