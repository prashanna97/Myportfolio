const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.abt, .para, .pfp, .edu-title, .see, .twelve, .bachelor, .skill-title, .html, .css, .js');
hiddenElements.forEach((element) => observer.observe(element));
