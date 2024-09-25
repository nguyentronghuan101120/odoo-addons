{
    'name': 'Custom Registration Module',
    'version': '1.0',
    'depends': ['base','web'],
    'data': [
        'views/registration_templates.xml',
    ],
    'assets': {
        'registration.assets_standalone_app': [
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap'),
            ('include', 'web._assets_core'),
            'registration/static/src/**/*',
            'registration/static/src/scss/styles.scss',
        ],
    },
}
