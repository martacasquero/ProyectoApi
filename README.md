| Método   | Ruta                   | Cuerpo JSON                                                       | Descripción                              | Respuesta             |
|----------|------------------------|--------------------------------------------------------------------|------------------------------------------|------------------------|
| `GET`    | `/api/platos`          | —                                                                  | Obtener todos los platos del menú        | Lista de platos    |
| `GET`    | `/api/platos/{nombre}` | —                                                                  | Obtener un plato por su nombre           | Objeto o `null`        |
| `POST`   | `/api/platos`          | `{"plato":"...", "precio":0.0, "descripcion":"..."}`              | Crear un nuevo plato                     | Objeto creado          |
| `PUT`    | `/api/platos/{nombre}` | `{"plato":"...", "precio":0.0, "descripcion":"..."}`              | Actualizar un plato existente            | Objeto actualizado     |
| `DELETE` | `/api/platos/{nombre}` | —                                                               | Eliminar un plato | Eliminado|
