from flask import jsonify

def register_blueprints(app):
    # Ruta de inicio
    @app.route('/')
    def index():
        return jsonify({
            'message': '¡Bienvenido a la API de TodoList!',
            'version': '1.0'
        })
