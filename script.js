document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const closeGalleryBtn = document.getElementById('closeGalleryBtn');
    const closeContactBtn = document.getElementById('closeContactBtn');

    const introSection = document.getElementById('intro');
    const gallerySection = document.getElementById('gallery');
    const contactSection = document.getElementById('contact');

 
    gallerySection.classList.add('hidden');
    contactSection.classList.add('hidden');

  
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            introSection.classList.add('hidden');
            gallerySection.classList.remove('hidden');
            contactSection.classList.add('hidden'); 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        });
    }


    if (closeGalleryBtn) {
        closeGalleryBtn.addEventListener('click', () => {
            gallerySection.classList.add('hidden');
            introSection.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const footer = document.querySelector('footer');
    if (footer && !document.getElementById('contactLink')) { 
        const contactLink = document.createElement('button');
        contactLink.textContent = 'Fale Conosco';
        contactLink.id = 'contactLink';
        contactLink.style.marginLeft = '1rem'; 
        footer.appendChild(contactLink);

        contactLink.addEventListener('click', () => {
            introSection.classList.add('hidden');
            gallerySection.classList.add('hidden');
            contactSection.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

  
    if (closeContactBtn) {
        closeContactBtn.addEventListener('click', () => {
            contactSection.classList.add('hidden');
            introSection.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    const contactForm = contactSection.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            alert('Mensagem enviada! Agradecemos seu contato.');
            contactForm.reset(); 
           
        });
    }
});
