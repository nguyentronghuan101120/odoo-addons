/** @odoo-module **/

import { Component, useState, useRef } from "@odoo/owl";

export class Register extends Component {
  static template = "registration.Register";

  setup() {
    this.domain = useRef("domain");
    this.state = useState({
      firstName: "",
      lastName: "",
      whatsapp: "",
      password: "",
      email: "",
      companyRegistrationNumber: "",
      taxIdentificationNumber: "",
      terms: false,
    });
  }

  focusDomain() {
    this.domain.el.focus();
  }

  onSubmit() {
    const registrationData = {
      ...this.state,
      domain: this.domain.el.innerText + ".asia",
    };
    console.log(registrationData);

    // Navigate to OTP screen with WhatsApp number
    // this.env.router.navigate({ to: "registration.Otp", params: { whatsappNumber: this.state.whatsapp } });
  }

  onBlurDomain() {
    if (this.domain.el.innerText === "") {
      this.domain.el.classList.add("content-invalid");
    }
  }
}


