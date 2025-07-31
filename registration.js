// Registration Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('umrahRegistrationForm');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Form validation
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
        
        // Validate email format
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value && !emailRegex.test(email.value)) {
            isValid = false;
            email.style.borderColor = '#e74c3c';
        }
        
        // Validate phone format (basic Canadian phone number)
        const phone = document.getElementById('phone');
        const phoneRegex = /^[\+]?[1]?[\s\-\.]?[\(]?[0-9]{3}[\)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4}$/;
        if (phone.value && !phoneRegex.test(phone.value.replace(/\s/g, ''))) {
            isValid = false;
            phone.style.borderColor = '#e74c3c';
        }
        
        // Validate passport expiry (must be at least 6 months from travel date)
        const passportExpiry = document.getElementById('passportExpiry');
        if (passportExpiry.value) {
            const expiryDate = new Date(passportExpiry.value);
            const travelDate = new Date('2025-10-08'); // Umrah travel date
            const sixMonthsAfterTravel = new Date(travelDate);
            sixMonthsAfterTravel.setMonth(sixMonthsAfterTravel.getMonth() + 6);
            
            if (expiryDate < sixMonthsAfterTravel) {
                isValid = false;
                passportExpiry.style.borderColor = '#e74c3c';
                showNotification('Passport must be valid for at least 6 months after travel date (April 8, 2026)', 'error');
            }
        }
        
        // Validate postal code format (Canadian)
        const postalCode = document.getElementById('postalCode');
        const postalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        if (postalCode.value && !postalRegex.test(postalCode.value)) {
            isValid = false;
            postalCode.style.borderColor = '#e74c3c';
        }
        
        // Check required checkboxes
        const requiredCheckboxes = ['agreeTerms', 'agreePayment', 'agreeCancellation'];
        requiredCheckboxes.forEach(checkboxId => {
            const checkbox = document.getElementById(checkboxId);
            if (!checkbox.checked) {
                isValid = false;
                checkbox.closest('.checkbox-label').style.borderColor = '#e74c3c';
            } else {
                checkbox.closest('.checkbox-label').style.borderColor = '#27ae60';
            }
        });
        
        return isValid;
    }
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#e74c3c';
            } else if (this.value.trim()) {
                this.style.borderColor = '#27ae60';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(231, 76, 60)') {
                this.style.borderColor = '#e0e0e0';
            }
        });
    });
    
    // Checkbox validation
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.hasAttribute('required') || this.closest('.checkbox-label').style.borderColor === 'rgb(231, 76, 60)') {
                if (this.checked) {
                    this.closest('.checkbox-label').style.borderColor = '#27ae60';
                } else if (this.hasAttribute('required')) {
                    this.closest('.checkbox-label').style.borderColor = '#e74c3c';
                }
            }
        });
    });
    
    // Format phone number as user types
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');
        if (value.length >= 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
        }
        this.value = value;
    });
    
    // Format postal code
    const postalCodeInput = document.getElementById('postalCode');
    postalCodeInput.addEventListener('input', function() {
        let value = this.value.replace(/\s/g, '').toUpperCase();
        if (value.length > 3) {
            value = value.substring(0, 3) + ' ' + value.substring(3, 6);
        }
        this.value = value;
    });
    
    // Calculate age and warn if under 18
    const dobInput = document.getElementById('dateOfBirth');
    dobInput.addEventListener('change', function() {
        const dob = new Date(this.value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        
        if (age < 18) {
            showNotification('Travelers under 18 must be accompanied by a parent or guardian. Additional documentation may be required.', 'warning');
        }
    });
    
    // Show notification function
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'error' ? '#e74c3c' : type === 'warning' ? '#f39c12' : '#3498db'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Close notification
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => notification.remove());
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    /**
     * Send the completed registration data by e‑mail to the administrator.
     *
     * Many public websites rely on a server to process and relay form
     * submissions. In this client‑side implementation we instead use a
     * mailto: link to open the visitor’s default e‑mail application with
     * a prefilled message addressed to the site admin. The subject line
     * includes the registrant’s name (when available) and the body lists
     * each field from the form. Once the link is triggered the user’s
     * e‑mail client is responsible for sending the message. This approach
     * avoids the need for a dedicated backend while still ensuring the data
     * reaches <admin@travelsolution.ca>.
     *
     * @param {Object} data Key‑value pairs of the submitted form fields.
     */
    function sendEmail(data) {
        const adminEmail = 'admin@travelsolution.ca';
        const firstName = data.firstName || '';
        const lastName = data.lastName || '';
        // Construct a subject line with the registrant’s name for easy
        // identification by the admin.
        const subject = encodeURIComponent(`New Umrah Registration - ${firstName} ${lastName}`.trim());
        // Build up the body with each form field on its own line. We encode
        // both keys and values to avoid breaking the mailto URI.
        let body = 'A new Umrah registration has been submitted with the following details:%0D%0A%0D%0A';
        Object.keys(data).forEach(key => {
            const label = encodeURIComponent(key);
            const value = encodeURIComponent(data[key]);
            body += `${label}: ${value}%0D%0A`;
        });
        const mailtoLink = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
        // Create a temporary anchor element to trigger the mailto link. Using
        // click() rather than assigning window.location allows us to open
        // the user’s mail client without immediately navigating away from
        // the registration page.
        const tempLink = document.createElement('a');
        tempLink.href = mailtoLink;
        tempLink.style.display = 'none';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    }
    
    // Add CSS for notification animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            margin-left: auto;
        }
    `;
    document.head.appendChild(style);
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Collect form data
        const formData = new FormData(form);
        const registrationData = {};
        
        for (let [key, value] of formData.entries()) {
            registrationData[key] = value;
        }
        
        // Add unchecked checkboxes
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                registrationData[checkbox.name] = 'false';
            }
        });
        
        // Immediately trigger a mailto link to send the registration data
        // to the site administrator. This opens the user’s default e‑mail
        // application with a prefilled message addressed to admin@travelsolution.ca.
        sendEmail(registrationData);

        // Show the success modal after a short delay to provide feedback
        // and simulate server processing. Once the modal appears, the
        // registrant can close it without losing their place on the page.
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            // Show success message
            showSuccessModal(registrationData);
        }, 2000);
    });
    
    // Success modal
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
        
        // Modal styles
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            padding: 20px;
        `;
        
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: white;
            border-radius: 15px;
            max-width: 600px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close-btn');
        closeBtn.addEventListener('click', () => {
            modal.remove();
            form.reset();
            // Reset form styling
            inputs.forEach(input => {
                input.style.borderColor = '#e0e0e0';
            });
            checkboxes.forEach(checkbox => {
                checkbox.closest('.checkbox-label').style.borderColor = '#e0e0e0';
            });
        });
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBtn.click();
            }
        });
    }
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .modal-header {
            background: linear-gradient(135deg, #1a5f3f 0%, #2d8659 100%);
            color: white;
            padding: 2rem;
            text-align: center;
            border-radius: 15px 15px 0 0;
        }
        .modal-header i {
            font-size: 3rem;
            color: #ffd700;
            margin-bottom: 1rem;
        }
        .modal-header h2 {
            font-size: 1.8rem;
            margin: 0;
        }
        .modal-body {
            padding: 2rem;
        }
        .next-steps, .contact-reminder {
            margin: 1.5rem 0;
            padding: 1.5rem;
            background: #f8fffe;
            border-radius: 10px;
            border-left: 4px solid #1a5f3f;
        }
        .next-steps h3, .contact-reminder h3 {
            color: #1a5f3f;
            margin-bottom: 1rem;
        }
        .next-steps ol {
            padding-left: 1.5rem;
        }
        .next-steps li {
            margin-bottom: 0.8rem;
            line-height: 1.5;
        }
        .modal-footer {
            padding: 1.5rem 2rem;
            border-top: 1px solid #e0e0e0;
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
        }
        .modal-close-btn, .modal-home-btn {
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .modal-close-btn {
            background: #e0e0e0;
            color: #333;
        }
        .modal-close-btn:hover {
            background: #d0d0d0;
        }
        .modal-home-btn {
            background: linear-gradient(45deg, #ffd700, #ffed4e);
            color: #1a5f3f;
        }
        .modal-home-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
        }
    `;
    document.head.appendChild(modalStyle);
});

// Mobile navigation for registration page
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

