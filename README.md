# InfraTel-Chile
InfraTel Chile, App Telecomunicaciones
# Estructura y Navegación de la App Telecomunicaciones

## Estructura de Páginas

- **index.html**  
  Página de inicio de sesión (Login).

- **registro.html**  
  Formulario de registro de usuario.

- **main.html**  
  Menú principal con acceso a todas las secciones.

- **reportediario.html**  
  Formulario para ingresar el reporte diario.

- **nuevo_ingreso.html**  
  Formulario para registrar un nuevo ingreso.

- **detalle_ingreso.html**  
  Visualización y edición de detalles de ingresos.

- **reportefinaldía.html**  
  Consulta del reporte final del día.

---

## Comentarios y Flujo de Ingreso a Cada Página

1. **Login (`index.html`)**
   - Ingresa usuario y contraseña.
   - Haz clic en **Ingresar**.
   - Si los datos son correctos, accedes a **main.html** (Menú Principal).
   - Si no tienes cuenta, haz clic en **Registrarse** para ir a `registro.html`.

2. **Registro (`registro.html`)**
   - Completa el formulario de registro.
   - Haz clic en **Registrar** para guardar tus datos.
   - Haz clic en **Volver a Login** para regresar a `index.html`.

3. **Menú Principal (`main.html`)**
   - Desde aquí puedes acceder a todas las secciones:
     - **Reporte Diario**: Botón lleva a `reportediario.html`.
     - **Nuevo Ingreso**: Botón lleva a `nuevo_ingreso.html`.
     - **Detalle Ingreso**: Botón lleva a `detalle_ingreso.html`.
     - **Reporte Final del Día**: Botón lleva a `reportefinaldía.html`.
   - Botón **Cerrar Sesión** te regresa a `index.html`.

4. **Cualquier Sección**
   - Todas las páginas de sección tienen un botón **Menú Principal** para volver a `main.html`.

## Resumen del Flujo

- **index.html** (Login)  
  ↓  
- **main.html** (Menú Principal)  
  ↓  
- Selecciona la sección deseada:  
  - **reportediario.html**  
  - **nuevo_ingreso.html**  
  - **detalle_ingreso.html**  
  - **reportefinaldía.html**  
- En cualquier sección, usa **Menú Principal** para volver al menú.
- Usa **Cerrar Sesión** en el menú para salir y volver al login.

---

**Comentario:**  
Cada página está enlazada mediante botones. No es necesario escribir la URL manualmente, solo usa los botones de navegación para moverte entre las secciones.

🟢 Características clave de la app
Registro de sitios de telecomunicaciones con coordenadas, fotos, documentación y responsables.
Panel de avance de obras por sitio (hitos: instalación, ATP, QC, Clean-Up).
Carga de evidencias fotográficas y documentos técnicos desde celular o web.
Gestión de cuadrillas y equipos técnicos por supervisor o empresa.
Alertas y recordatorios de tareas pendientes por sitio o proyecto.
Reportes automáticos en PDF para entregar a clientes.
Sincronización en la nube y funcionamiento offline en zonas sin cobertura.

🟢 Público objetivo
Empresas contratistas (Huawei, ZTE, Daxa, Experis, Axity)
Operadoras (Entel, Movistar, WOM)
Supervisores de campo
Ingenieros de calidad (QC) y ATP
Gerencias técnicas y clientes finales que exigen documentación y trazabilidad


