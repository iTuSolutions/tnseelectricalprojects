<script type="text/javascript">
  // Initialize EmailJS with your Public Key
  (function() {
      emailjs.init({
        publicKey: "HI-2z2lZwVsmFNM8Q",
      });
  })();

  // Handle Form Submission
  const contactForm = document.querySelector('form[data-contact]');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
          
          const submitButton = contactForm.querySelector('button[type="submit"]');
          const originalButtonText = submitButton.innerHTML;
          
          // Show loading state
          submitButton.disabled = true;
          submitButton.innerHTML = `<span>Sending Enquiry...</span>`;

          // Send form data using your service and template IDs
          emailjs.sendForm('service_h48cva8', 'template_8eg8ea6', this)
              .then(() => {
                  alert('Thank you! Your project enquiry has been successfully sent to TNSE Electrical Projects.');
                  contactForm.reset();
                  submitButton.disabled = false;
                  submitButton.innerHTML = originalButtonText;
              }, (error) => {
                  console.error('FAILED...', error);
                  alert('Failed to send enquiry. Please check your connection or contact us directly via phone/WhatsApp.');
                  submitButton.disabled = false;
                  submitButton.innerHTML = originalButtonText;
              });
      });
  }
</script>
