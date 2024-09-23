from odoo import models, fields

class CustomRegistration(models.Model):
    _name = 'custom.registration1'
    _description = 'Custom Registration'

    first_name = fields.Char(string='First Name', required=True)
    last_name = fields.Char(string='Last Name', required=True)
    whatsapp_number = fields.Char(string='WhatsApp Number')
    password = fields.Char(string='Password', required=True)
    select_domain = fields.Selection([('.asia', 'Asia'), ('.com', 'Com'), ('.org', 'Org')], string='Select Domain')
    company_name = fields.Char(string='Company Name', required=True)
    email = fields.Char(string='Email', required=True)
    company_registration_number = fields.Char(string='Company Registration Number')
    tax_identification_number = fields.Char(string='Tax Identification Number')
