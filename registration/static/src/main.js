/** @odoo-module **/

import { Component, useState, useRef } from "@odoo/owl";
import { Register } from "./pages/register/register";
import { Otp } from "./pages/otp/otp";
export class App extends Component {
  static template = "registration.App";
  static components = { Register, Otp };
  static props = {};
  
}

