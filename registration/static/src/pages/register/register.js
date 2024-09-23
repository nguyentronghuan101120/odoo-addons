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

      // Additional validation for specific fields
      if (input.name === "whatsapp" && !/^[0-9]{10,15}$/.test(input.value)) {
        valid = false;
        input.classList.add("is-invalid");
      }

      if (input.name === "password" && input.value.length < 6) {
        valid = false;
        input.classList.add("is-invalid");
      }

      if (input.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        valid = false;
        input.classList.add("is-invalid");
      }
    });

    return valid;
  }

  mounted() {
    console.log("first")
    // Attach event listener to the domain input field
    const domainInput = this.el.querySelector("#domain");
    domainInput.addEventListener("input", this.handleDomainInput);
  }

  handleDomainInput(event) {
    let value = event.target.value;

    // Ensure that ".asia" is appended if not already present
    if (!value.endsWith(".asia")) {
      event.target.value = value.replace(/(\.asia)?$/, "") + ".asia";
    }
  }


}
