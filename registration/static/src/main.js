/** @odoo-module **/

import { Component, useState, useRef } from "@odoo/owl";
import { Register } from "./pages/register/register";

export class App extends Component {
  static template = "registration.App";
  static components = { Register };
  static props = {};
  
}

