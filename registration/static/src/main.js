/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Register } from "./pages/register/register";

export class App extends Component {
  static template = "registration.Register";
  static components = { Register };
  static props = {};
}

