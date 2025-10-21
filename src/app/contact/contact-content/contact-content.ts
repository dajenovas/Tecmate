import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-content',
  standalone: false,
  templateUrl: './contact-content.html',
  styleUrl: './contact-content.scss'
})
export class ContactContent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  };

  sendEmail() {
    if (!this.formData.email || !this.formData.message) {
      alert('Please fill all required fields before sending.');
      return;
    }

    emailjs.send(
      'service_t6kzy45',   // ✅ Your EmailJS service ID
      'template_j21ycfh',  // ✅ Your EmailJS template ID
      this.formData,
      '6RV2dP-ddGedR9gK7'  // ✅ Your EmailJS public key
    )
      .then((result: EmailJSResponseStatus) => {
        alert('✅ Message Sent Successfully!');
        this.formData = { firstName: '', lastName: '', email: '', phoneNumber: '', message: '' };
      })
      .catch(error => {
        alert('❌ Failed to Send: ' + JSON.stringify(error));
      });
  }
}
