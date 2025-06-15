// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Project data
    const projects = [
        {
            title: 'Project',
            description: 'The Online Learning Platform is a web-based application designed to provide educational video content, quizzes, and learning progress tracking for students. The platform allows users to watch video lessons, take interactive quizzes, and monitor their progress in real-time.',
            image: 'IMG-1.png',
            technologies: ['HTML', 'CSS', 'JavaScript']
        },
        // Add more projects here
    ];

    // Populate projects
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });

    // Handle contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleSubmit);
});

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-aos', 'fade-up');

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

// Handle form submission
async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData))
        });

        if (response.ok) {
            alert('Message sent successfully!');
            e.target.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        alert('Error sending message. Please try again.');
        console.error(error);
    }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});