# TodoList API

API RESTful para una aplicación de lista de tareas desarrollada con Flask.

## Requisitos

- Python 3.8 o superior
- Flask
- SQLAlchemy
- Otros requisitos en `requirements.txt`

## Instalación

1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Crear y activar el entorno virtual
```bash
python3 -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

3. Instalar dependencias
```bash
pip install -r requirements.txt
```

## Ejecución

Para ejecutar el servidor de desarrollo:
```bash
python app.py
```

El servidor estará disponible en `http://localhost:5000`

## Documentación API

- Swagger UI: `http://localhost:5000/docs`
- ReDoc: `http://localhost:5000/redoc`

## Características

- [x] Configuración inicial
- [ ] CRUD de tareas
- [ ] Autenticación de usuarios
- [ ] Base de datos
