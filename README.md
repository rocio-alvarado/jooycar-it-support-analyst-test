# API de Personas

API REST desarrollada con Node.js, Express y MongoDB para la gestión de personas.

## Requisitos

### Opción 1: Desarrollo Local
- Node.js
- MongoDB

### Opción 2: Docker (Recomendado)
- Docker
- Docker Compose

## Instalación y Ejecución

### Usando Docker (Recomendado)

1. Asegúrate de tener Docker y Docker Compose instalados
2. Ejecuta el siguiente comando para construir y levantar los servicios:
```bash
docker-compose up --build
```

La API estará disponible en `http://localhost:3000` y MongoDB en `localhost:27017`

### Desarrollo Local sin Docker

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```
3. Crear archivo .env con las variables de entorno (ya incluido)
4. Asegurarse que MongoDB esté corriendo en localhost:27017
5. Ejecutar la aplicación:

Para desarrollo (con hot reload):
```bash
npm run dev
```

Para producción:
```bash
npm start
```

## Endpoints

### GET /personas
Lista todas las personas. Soporta filtros por query params:
- edad
- region

Ejemplo: `/personas?edad=25&region=Santiago`

### GET /personas/:id
Obtiene una persona por su ID

### POST /personas
Crea una nueva persona. Requiere body JSON con:
- nombre (string, requerido)
- apellido (string, requerido)
- genero (string, requerido)
- telefono (string, requerido)
- edad (number, requerido)
- region (string, requerido)

### PUT /personas/:id
Actualiza una persona existente. Acepta los mismos campos que POST.

### DELETE /personas/:id
Elimina una persona por su ID

## Ejemplo de Petición POST

```bash
curl -X POST http://localhost:3000/personas \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan",
    "apellido": "Pérez",
    "genero": "Masculino",
    "telefono": "+56912345678",
    "edad": 30,
    "region": "Metropolitana"
  }'
``` 