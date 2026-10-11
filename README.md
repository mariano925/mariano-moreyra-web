## 🧭 Ruta de desarrollo del Backend

### 📍 Estado actual

El backend ya tiene funcionando la primera separación de responsabilidades:

```text
Frontend
   ↓
POST /api/contacto
   ↓
Router
   ↓
Controller
   ↓
Manager
   ↓
Resultado
```

Actualmente:

* `index.js` configura Express, CORS, JSON y las rutas.
* `contacto.routes.js` define el endpoint.
* `contacto.controller.js` recibe la petición HTTP y coordina la respuesta.
* `contacto.manager.js` recibe los datos y realiza el procesamiento.
* El endpoint actual es `POST /api/contacto`.
* El servidor funciona correctamente en local.

### 🟢 Completado

* [x] Express funcionando
* [x] CORS configurado
* [x] Recepción de JSON
* [x] Router
* [x] Controller
* [x] Manager
* [x] Separación de responsabilidades
* [x] Endpoint `POST /api/contacto`
* [x] Prueba inicial del servidor

---

## 🚧 Próxima etapa

### 1. Entender MongoDB antes de programar

Antes de escribir código nuevo, estudiar estos conceptos:

```text
MongoDB
   ↓
Base de datos
   ↓
Collection
   ↓
Document
   ↓
Fields
```

Y después:

```text
Mongoose
   ↓
Schema
   ↓
Model
   ↓
MongoDB
```

La idea es comprender qué función cumple cada elemento antes de incorporarlo al proyecto.

### 2. Definir qué información guardará el contacto

Determinar los campos que tendrá un mensaje recibido desde el formulario.

Ejemplo conceptual:

```text
Contacto
├── nombre
├── email
├── mensaje
└── fecha
```

No implementar todavía hasta comprender el modelo.

### 3. Incorporar MongoDB Atlas + Mongoose

Objetivo:

```text
Frontend
   ↓
Router
   ↓
Controller
   ↓
Manager
   ↓
Mongoose Model
   ↓
MongoDB Atlas
```

Para este portfolio solamente necesitamos persistir los mensajes de contacto.

No incorporar en esta etapa:

* `service.model.js`
* `booking.model.js`
* relaciones con `ObjectId`
* `populate()`
* WebSockets
* vistas
* arquitectura innecesariamente compleja

Esos conceptos pertenecen principalmente al proyecto de reservas de Coderhouse y no son necesarios para este caso.

### 4. Configuración de variables de entorno

Incorporar:

* `.env`
* `.env.example`
* `MONGO_URI`

La conexión a MongoDB no debe quedar escrita directamente en el código.

### 5. Persistencia real

Reemplazar el procesamiento actual del Manager:

```text
console.log(datos)
```

por el guardado real del mensaje mediante Mongoose.

La estructura de Router y Controller debería mantenerse prácticamente igual.

### 6. Pruebas

Comprobar el flujo completo:

```text
Formulario
   ↓
POST /api/contacto
   ↓
Router
   ↓
Controller
   ↓
Manager
   ↓
Model
   ↓
MongoDB Atlas
```

Verificar que el contacto realmente quede almacenado.

---

## 🧹 Etapa posterior: preparación para producción

Una vez funcionando la persistencia:

* [ ] Validaciones
* [ ] Manejo básico de errores
* [ ] Revisar `.gitignore`
* [ ] Confirmar que `.env` no se publique
* [ ] Mantener `.env.example`
* [ ] Revisar configuración para deployment
* [ ] Conectar el frontend real con el backend
* [ ] Pruebas finales

---

## 🎯 Regla de trabajo

No avanzar agregando capas solamente para que el proyecto parezca más profesional.

La prioridad es:

1. Entender el concepto.
2. Implementarlo.
3. Probarlo.
4. Comprobar que funciona.
5. Recién después agregar la siguiente capa.

### 🧠 Arquitectura que estamos construyendo

Por ahora:

```text
Router
  ↓
Controller
  ↓
Manager
  ↓
Mongoose
  ↓
MongoDB
```

Más adelante, si el proyecto realmente lo necesita y el contenido de Coderhouse lo requiere:

```text
Router
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
DAO
  ↓
Mongoose
  ↓
MongoDB
```

Pero **no incorporar Service / Repository / DAO todavía** en este portfolio.
