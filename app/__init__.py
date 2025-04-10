from flask import Flask

def create_app(config_name='default'):
    """Application Factory"""
    app = Flask(__name__)
    
    # Registrar blueprints
    from app.routes import register_blueprints
    register_blueprints(app)
    
    return app
