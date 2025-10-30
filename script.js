// Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll to section function
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Certificate modal
        function openModal(title, organization) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalOrganization').textContent = organization;
            document.getElementById('modalImage').src = `https://via.placeholder.com/600x400/000000/00FFFF?text=${encodeURIComponent(title)}`;
            new bootstrap.Modal(document.getElementById('certificateModal')).show();
        }

        // Project functions
        function viewCode(url) {
            window.open(url, '_blank');
        }

        function viewDemo(url) {
            window.open(url, '_blank');
        }

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });

        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(0,0,0,0.95)';
            } else {
                navbar.style.background = 'rgba(0,0,0,0.9)';
            }
        });