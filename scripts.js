document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const projectDetails = this.nextElementSibling;
            if (projectDetails.style.display === 'block') {
                projectDetails.style.display = 'none';
                this.textContent = 'Read More';
            } else {
                projectDetails.style.display = 'block';
                this.textContent = 'Read Less';
            }
        });
    });

    const previewResumeBtn = document.getElementById('preview-resume-btn');
    const resumeIframe = document.getElementById('resume-iframe');

    previewResumeBtn.addEventListener('click', function () {
        if (resumeIframe.style.display === 'block') {
            resumeIframe.style.display = 'none';
            this.textContent = 'Preview Resume';
        } else {
            resumeIframe.style.display = 'block';
            this.textContent = 'Hide Resume';
        }
    });
});
