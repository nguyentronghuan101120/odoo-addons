/** @odoo-module **/

import { Component, useState, useRef, onMounted } from "@odoo/owl";

export class Otp extends Component {
  static template = "registration.Otp";

  setup() {
    this.whatsappNumber = "+60123456789";
    this.otpInput = useRef("otpInput");
    onMounted(() => {
        this.otpInput.el.childNodes.forEach((div) => {
            div.firstChild.addEventListener("input", (e) => {
                const target = e.target;
                const val = target.value;
            
                if (isNaN(val)) {
                    target.value = "";
                    return;
                }
            
                if (val != "") {
                    const next = target.parentElement.nextElementSibling?.firstChild || null;
                    if (next && next.tagName == "SPAN") {
                        next.parentElement.nextElementSibling.firstChild.focus();
                    }
                    else if (next) {
                        next.focus();
                    }
                    else {
                        this.handleInput();
                    }
                }
            });
            
            div.childNodes[0].addEventListener("keyup", (e) => {
                const target = e.target;
                const key = e.key.toLowerCase();
            
                if (key == "backspace" || key == "delete") {
                    target.value = "";
                    const prev = target.parentElement.previousElementSibling.firstChild;
                    if (prev.tagName == "SPAN") {
                        prev.parentElement.previousElementSibling.firstChild.focus();
                    }
                    else if (prev) {
                        prev.focus();
                    }
                    return;
                }
            });
        });
    });
  }
  
  handleInput() {
    let otp = "";
    this.otpInput.el.childNodes.forEach((div) => {
        if (div.firstChild.value) {
            otp += div.firstChild.value;
        }
    });
    console.log(otp);
  }
}


