# Registro de Pruebas Prácticas - Nova Servicios (EP DEW)

* **Fecha de ejecución:** 30 de septiembre de 2026
* **Navegador:** Google Chrome v128.0 (64-bit)
* **Entorno:** Live Server (Local) y Vercel Preview

| ID | Prueba | Resultado Esperado | Estado | Ruta de Evidencia |
|---|---|---|---|---|
| **P01** | Navegación y semántica | Enlaces funcionales; acceso al formulario en $\le$ 2 clics; encabezados semánticos ordenados. | **Cumple** | `docs/evidencias/1440px.png` |
| **P02** | Vista Móvil 320 px | La interfaz no presenta desbordamiento ni scroll horizontal a 320 px. | **Cumple** | `docs/evidencias/320px.png` |
| **P03** | Vista Tablet 768 px | Tarjetas de servicios dispuestas en 2 columnas; menú adaptado. | **Cumple** | `docs/evidencias/768px.png` |
| **P04** | Vista Escritorio 1440 px | Rejilla de 4 columnas en tarjetas; ancho máximo contenido a 1200 px. | **Cumple** | `docs/evidencias/1440px.png` |
| **P05** | Navegación Teclado | Foco visible claro al navegar con `Tab`; menú cerrado con tecla `Escape`. | **Cumple** | `docs/evidencias/foco_visible.png` |
| **P06** | Formulario Inválido | La validación detecta campos vacíos, correos mal formados o descripciones $<10$ caracteres. | **Cumple** | `docs/evidencias/formulario_invalido.png` |
| **P07** | Formulario Válido | Genera la alerta de confirmación aclarando explícitamente que es una simulación sin backend. | **Cumple** | `docs/evidencias/formulario_valido.png` |

---

## Registro de 2 Problemas Reales Corregidos

### Problema 1: Desbordamiento de la tabla de estados a 320 px
* **Antes (`correccion1_antes.png`):** La tabla de estados sobrepasaba el ancho de la pantalla en teléfonos móviles pequeños, generando un scroll horizontal no deseado en todo el documento.
* **Después (`correccion1_despues.png`):** Se envolvió la tabla en un elemento `<div class="table-wrapper">` con `overflow-x: auto`, aislando el desplazamiento únicamente al contenedor de la tabla sin romper el diseño responsive global.

### Problema 2: Falta de asociación semántica en los botones radio de prioridad
* **Antes (`correccion2_antes.png`):** Las opciones de prioridad estaban sueltas sin un contenedor semántico, dificultando la lectura en lectores de pantalla para usuarios con discapacidad visual.
* **Después (`correccion2_despues.png`):** Se agruparon las opciones dentro de un bloque `<fieldset class="fieldset-group">` acompañado de un `<legend>Prioridad de la incidencia *</legend>`, cumpliendo con la pauta de accesibilidad WCAG.