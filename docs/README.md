# Portafolio de Felipe González — GitHub Pages

Sitio estático bilingüe (español/inglés), adaptable a móvil, con tema oscuro/clar o, secciones de perfil, experiencia, habilidades y contacto.

## Archivos
- `index.html`: contenido y estructura.
- `styles.css`: diseño visual y adaptación móvil.
- `script.js`: selector ES/EN, tema y menú móvil.
- `assets/`: recursos gráficos opcionales.

## Publicarlo con GitHub Pages
1. Crea un repositorio en GitHub llamado **`TU-USUARIO.github.io`** (reemplaza `TU-USUARIO` por tu nombre de usuario exacto).
2. Descarga y descomprime este paquete en tu computador.
3. En el repositorio, pulsa **Add file → Upload files**.
4. Sube `index.html`, `styles.css`, `script.js` y la carpeta `assets` (si existe). Los tres archivos principales deben quedar en la raíz del repositorio, no dentro de otra carpeta.
5. Pulsa **Commit changes**.
6. En el repositorio, abre **Settings → Pages**. En **Build and deployment**, selecciona **Deploy from a branch**; elige `main` y `/ (root)` y guarda.
7. Espera unos minutos y abre `https://TU-USUARIO.github.io`.

## Personalización obligatoria antes de publicar
Abre `index.html` y busca/reemplaza:
- `Felipe González`, si quieres ajustar la forma de mostrar tu nombre.
- `https://github.com/` por `https://github.com/TU-USUARIO`.
- `https://www.linkedin.com/` por tu perfil real.
- `tu-correo@ejemplo.com` por el correo que quieras publicar.


Los porcentajes de habilidades son ilustrativos: cámbialos para que representen tu nivel real.

## Avatar
La plantilla incluye un avatar tipográfico FG para que el sitio funcione inmediatamente. Si tienes una caricatura que quieras usar, guarda el archivo como `assets/avatar.png` y reemplaza el bloque `.avatar-placeholder` en `index.html` por:

```html
<img class="avatar-image" src="assets/avatar.png" alt="Avatar ilustrado de Felipe González">
```

Después agrega a `styles.css`:

```css
.avatar-image {
  width: min(290px, 90%);
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #25a7ff;
  box-shadow: 0 0 45px #0785e533;
}
```

## Vista previa local
Abre `index.html` directamente en tu navegador. No requiere Node.js, instalación de paquetes ni compilación. Google Fonts requiere conexión a internet; si no hay conexión, se usará una fuente del sistema.
