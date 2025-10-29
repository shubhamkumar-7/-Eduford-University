const navLinks = document.querySelector(".nav-links");
      const menuIcon = document.querySelector(".fa-bars");
      const closeIcon = document.querySelector(".fa-xmark");

      menuIcon.addEventListener("click", () => {
        navLinks.style.right = "0";
        menuIcon.style.display = "none";
      });

      closeIcon.addEventListener("click", () => {
        navLinks.style.right = "-200px";
        menuIcon.style.display = "block";
      });

      document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
          navLinks.style.right = "-200px";
          menuIcon.style.display = "block";
        }
      });

      function scrollToSection() {
      document.getElementById('apply').scrollIntoView({ behavior: 'smooth' });
       }
 
      document.querySelector('.admission-form').addEventListener('submit', function(e) {
      e.preventDefault();
    
       const formData = new FormData(this);
    
      fetch('https://eo7efy4mfur7ny3.m.pipedream.net', {
        method: 'POST',
        body: formData
      })
      .then(response => {

        this.reset();
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
      });
    });
