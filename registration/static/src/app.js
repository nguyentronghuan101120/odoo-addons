/** @odoo-module **/

import { Component, whenReady } from "@odoo/owl";
import { mountComponent } from "@web/env";
import { App } from "./main";


export async function startWebClient() {
  await whenReady();

  // Dynamically inject reCAPTCHA script into the document head
  const recaptchaScript = document.createElement("script");
  recaptchaScript.src = "https://www.google.com/recaptcha/api.js";
  recaptchaScript.async = true;
  recaptchaScript.defer = true;

  document.head.appendChild(recaptchaScript);

  const app = await mountComponent(App, document.body);
  const { env } = app;
  Component.env = env;
}

startWebClient();
