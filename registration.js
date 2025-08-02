document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('umrahRegistrationForm');
  const submitBtn = document.querySelector('.submit-btn');

  // 🧪 Form Validation
  function validateForm() {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = '#e74c3c';
      } else {
        field.style.borderColor = '#27ae60';
      }
    });

    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value && !emailRegex.test(email.value)) {
      isValid = false;
      email.style.borderColor = '#e74c3c';
    }

    const phone = document.getElementById('phone');
    const phoneRegex = /^[\+]?[1]?[\s\-\.]?[\(]?[0-9]{3}[\)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4}$/;
    if (phone.value && !phoneRegex.test(phone.value.replace(/\s/g, ''))) {
      isValid = false;
      phone.style.borderColor = '#e74c3c';
    }

    const passportExpiry = document.getElementById('passportExpiry');
    if (passportExpiry.value) {
      const expiryDate = new Date(passportExpiry.value);
      const travelDate = new Date('2025-10-08');
      const sixMonthsAfterTravel = new Date(travelDate);
      sixMonthsAfterTravel.setMonth(sixMonthsAfterTravel.getMonth() + 6);
      if (expiryDate < sixMonthsAfterTravel) {
        isValid = false;
        passportExpiry.style.borderColor = '#e74c3c';
        showNotification('Passport must be valid for at least 6 months after travel date (April 8, 2026)', 'error');
      }
    }

    const postalCode = document.getElementById('postalCode');
    const postalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (postalCode.value && !postalRegex.test(postalCode.value)) {
      isValid = false;
      postalCode.style.borderColor = '#e74c3c';
    }

    ['agreeTerms', 'agreePayment', 'agreeCancellation'].forEach(id => {
      const checkbox = document.getElementById(id);
      const label = checkbox.closest('.checkbox-label');
      if (!checkbox.checked) {
        isValid = false;
        label.style.borderColor = '#e74c3c';
      } else {
        label.style.borderColor = '#27ae60';
      }
    });

    return isValid;
  }

  // 🛎 Notification System
  function showNotification(message, type = 'info') {
    document.querySelectorAll('.notification').forEach(n => n.remove());
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;
    notification.style.cssText = `
      position: fixed; top: 100px; right: 20px;
      background: ${type === 'error' ? '#e74c3c' : type === 'warning' ? '#f39c12' : '#3498db'};
      color: white; padding: 15px 20px; border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2); z-index: 10000;
      max-width: 400px; animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    notification.querySelector('.notification-close').onclick = () => notification.remove();
    setTimeout(() => notification.remove(), 5000);
  }

  // 📧 Email Submission
  function sendEmail(data) {
    const adminEmail = 'admin@travelsolution.ca';
    const subject = encodeURIComponent(`New Umrah Registration - ${data.firstName} ${data.lastName}`.trim());
    let body = 'A new Umrah registration has been submitted with the following details:%0D%0A%0D%0A';
    Object.entries(data).forEach(([key, value]) => {
      body += `${encodeURIComponent(key)}: ${encodeURIComponent(value)}%0D%0A`;
    });
    window.open(`mailto:${adminEmail}?subject=${subject}&body=${body}`, '_blank');
  }

  // 🎉 Success Modal
  function showSuccessModal(data) {
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <i class="fas fa-check-circle"></i>
          <h2>Registration Submitted Successfully!</h2>
        </div>
        <div class="modal-body">
          <p>Thank you, <strong>${data.firstName} ${data.lastName}</strong>, for registering for our Umrah package.</p>
          <div class="next-steps">
            <h3>Next Steps:</h3>
            <ol>
              <li>You will receive a confirmation email at <strong>${data.email}</strong> within 24 hours</li>
              <li>Send your $1,000 deposit via e-transfer to: <strong>admin@travelsolution.ca</strong></li>
              <li>Include your full name and "Umrah Registration" in the transfer message</li>
              <li>Our team will contact you within 2 business days to confirm your registration</li>
              <li>Final payment is due before <strong>August 7, 2025</strong></li>
            </ol>
          </div>
          <div class="contact-reminder">
            <h3>Questions?</h3>
            <p>Contact us:</p>
            <p><strong>Toronto:</strong> 780-803-8076 (Saurin Ajmeri)</p>
            <p><strong>Edmonton:</strong> 705-618-9566 (Moulana Muhammad Patel)</p>
          </div>
        </div>
        <div class="modal-footer">
          <button class="modal-close-btn">Close</button>
          <button class="modal-home-btn" onclick="window.location.href='index.html'">Return to Home</button>
        </div>
      </div>
    `;
    modal.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 10000; padding: 20px;`;
    modal.querySelector('.modal-content').style.cssText = `background: white; border-radius: 15px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 40px rgba(0,0,0,0.3);`;
    document.body.appendChild(modal);
    modal.querySelector('.modal-close-btn').onclick = () => {
      modal.remove();
      form.reset();
    };
    modal.onclick = e => { if (e.target === modal) modal.remove(); };
  }

  // 📱 Mobile Navigation (Scoped to avoid redeclaration)
  (function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
      document.querySelectorAll('.nav-link').forEach(link =>
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        })
      );
    }
  })();

  // 📝 Real-time Input Formatting
  document.getElementById('phone').addEventListener('input', function () {
    let value = this.value.replace(/\D/g, '');
    if (value.length >= 6) value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    else if (value.length >= 3) value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
    this.value = value;
  });

  document.getElementById('postalCode').addEventListener('input', function () {
    let value = this.value.replace(/\s/g, '').toUpper
