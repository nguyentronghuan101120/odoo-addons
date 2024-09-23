from odoo.http import request, route, Controller

class YourController(Controller):
    @route("/register", auth="public", type="http")
    def standalone_app(self, **kw):
        return request.render(
            'registration.registration',
            {
                'session_info': request.env['ir.http'].get_frontend_session_info(),
            }
        )