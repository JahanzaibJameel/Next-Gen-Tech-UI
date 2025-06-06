        // Create floating particles
        function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size between 1px and 3px
                const size = Math.random() * 2 + 1;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                
                // Random animation
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;
                particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
                
                container.appendChild(particle);
            }
        }
        
        // Animate terminal cursor
        function animateTerminalCursor() {
            const cursor = document.querySelector('.text-green-400:last-of-type');
            let visible = true;
            
            setInterval(() => {
                visible = !visible;
                cursor.style.opacity = visible ? '1' : '0';
            }, 500);
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            animateTerminalCursor();
            
            // Add hover effect to holographic elements
            const holographicElements = document.querySelectorAll('.holographic-effect');
            holographicElements.forEach(el => {
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    el.style.setProperty('--mouse-x', `${x}px`);
                    el.style.setProperty('--mouse-y', `${y}px`);
                });
            });
        });