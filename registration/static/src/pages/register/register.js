/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Register extends Component {
  static template = "registration.Register";
  static props = {};

  handleSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // Add your form submission logic here
  }

  validateForm() {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input[required]");
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value) {
        valid = false;
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
      }
    });

    return valid;
  }
}
