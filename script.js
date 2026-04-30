document.addEventListener("DOMContentLoaded", function() {

    // ===== CLOCK =====
    function updateClock() {
        const now = new Date();

        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/New_York',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZoneName: 'short'
        });

        const parts = formatter.formatToParts(now);

        let time = `${parts.find(p => p.type === 'hour').value}:` +
                   `${parts.find(p => p.type === 'minute').value}:` +
                   `${parts.find(p => p.type === 'second').value}`;

        let zone = parts.find(p => p.type === 'timeZoneName').value;

        const date = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'America/New_York',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(now).replace(/\//g, ".");

        document.getElementById("clock").innerHTML = `${time} ${zone}<br>${date}`;
    }

    updateClock();
    setInterval(updateClock, 1000);


    // ===== POPUPS =====

    // ABOUT
    const aboutButton = document.getElementById('about-button'); 
    const aboutPopup = document.querySelector('.about-popup');
    const aboutClose = document.querySelector('.about-popup .close-button');

    aboutButton.addEventListener('click', () => {
        aboutPopup.style.display = 'flex';
        aboutPopup.style.flexDirection = 'column';

    });

    aboutClose.addEventListener('click', () => {
        aboutPopup.style.display = 'none';
    });


    // PROJECTS
    const projectsButton = document.getElementById('projects-button');
    const projectsPopup = document.querySelector('.projects-popup');
    const projectsClose = document.querySelector('.projects-popup .close-button');

    projectsButton.addEventListener('click', () => {
        projectsPopup.style.display = 'flex';
        projectsPopup.style.flexDirection = 'column';

    });

    projectsClose.addEventListener('click', () => {
        projectsPopup.style.display = 'none';
    });


    // EXHIBITIONS
    const exhibitionsButton = document.getElementById('exhibitions-button');
    const exhibitionsPopup = document.querySelector('.exhibitions-popup');
    const exhibitionsClose = document.querySelector('.exhibitions-popup .close-button');

    exhibitionsButton.addEventListener('click', () => {
        exhibitionsPopup.style.display = 'flex';
        exhibitionsPopup.style.flexDirection = 'column';
    });

    exhibitionsClose.addEventListener('click', () => {
        exhibitionsPopup.style.display = 'none';
    });


    // CONTACT
    const contactButton = document.getElementById('contact-button');
    const contactPopup = document.querySelector('.contact-popup');
    const contactClose = document.querySelector('.contact-popup .close-button');

    contactButton.addEventListener('click', () => {
        contactPopup.style.display = 'flex';
        contactPopup.style.flexDirection = 'column';
    });

    contactClose.addEventListener('click', () => {
        contactPopup.style.display = 'none';
    });

});