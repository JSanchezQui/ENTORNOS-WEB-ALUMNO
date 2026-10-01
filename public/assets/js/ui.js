document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejo del menú desplegable adaptativo y accesibilidad
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        function toggleMenu() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('is-active');
        }

        menuToggle.addEventListener('click', toggleMenu);

        // Cerrar menú con tecla Escape para soporte por teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainNav.classList.contains('is-active')) {
                toggleMenu();
                menuToggle.focus();
            }
        });
    }

    // 2. Validación y confirmación del formulario de soporte
    const form = document.getElementById('support-form');
    const feedback = document.getElementById('form-feedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            feedback.innerHTML = '';

            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const tipo = document.getElementById('tipo').value;
            const prioridad = form.querySelector('input[name="prioridad"]:checked');
            const descripcion = document.getElementById('descripcion').value.trim();

            let errores = [];

            if (nombre.length < 3) {
                errores.push('El nombre completo debe tener al menos 3 caracteres.');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(correo)) {
                errores.push('Ingrese un correo electrónico válido.');
            }

            if (!tipo) {
                errores.push('Seleccione un tipo de incidencia.');
            }

            if (!prioridad) {
                errores.push('Seleccione la prioridad de la incidencia.');
            }

            if (descripcion.length < 10 || descripcion.length > 500) {
                errores.push('La descripción debe contener entre 10 y 500 caracteres.');
            }

            if (errores.length > 0) {
                feedback.innerHTML = `
                    <div class="feedback-error" role="alert">
                        <p><strong>Corrija los siguientes campos para continuar:</strong></p>
                        <ul>${errores.map(err => `<li>${err}</li>`).join('')}</ul>
                    </div>
                `;
            } else {
                const ticketNumber = Math.floor(100000 + Math.random() * 900000);
                feedback.innerHTML = `
                    <div class="feedback-success" role="status">
                        <p><strong>¡Solicitud de Soporte Procesada Exitosamente!</strong></p>
                        <p>Código de Ticket Simulado: <strong>#NOV-${ticketNumber}</strong></p>
                        <p><small><em>Atención: Esta es una simulación técnica de evaluación. No se ha enviado ni guardado información en ningún servidor o base de datos.</em></small></p>
                    </div>
                `;
                form.reset();
            }
        });
    }
});