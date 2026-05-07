# Guía de Ejecución Local - Ionic Student App

Esta guía explica cómo "desplegar" o ejecutar la aplicación de Ionic directamente en tu propia computadora, sin necesidad de subirla a internet. Esto es ideal para probar la aplicación y mostrarla a tus profesores.

## Opción 1: Servidor de Desarrollo Rápido (Recomendado)

La forma más rápida y común de probar tu aplicación localmente es usar el servidor de desarrollo de Ionic. Este servidor recargará automáticamente la página cada vez que guardes un cambio en el código.

1. Abre tu terminal (PowerShell o Símbolo del sistema).
2. Asegúrate de estar dentro de la carpeta del proyecto:
   ```bash
   cd e:\app_ionic\student-app
   ```
3. Ejecuta el siguiente comando:
   ```bash
   npm start
   ```
4. **¿Qué sucede?** La aplicación se compilará y se abrirá automáticamente en tu navegador (usualmente en `http://localhost:4200`).

---

## Opción 2: Probar la versión de Producción Localmente

Si quieres probar exactamente cómo funcionaría tu aplicación final una vez "empaquetada" (sin las herramientas de desarrollo que la hacen más pesada), puedes compilarla para producción y usar un servidor local estático.

1. Abre tu terminal y ve a la carpeta del proyecto.
2. Construye la versión final de la aplicación ejecutando:
   ```bash
   npx @ionic/cli build --prod
   ```
   *Esto generará una carpeta llamada `www` que contiene los archivos finales optimizados.*
3. Para simular un servidor web en esa carpeta, puedes instalar una herramienta de Node.js llamada `serve` (solo necesitas instalarla una vez):
   ```bash
   npm install -g serve
   ```
4. Finalmente, levanta tu servidor local apuntando a la carpeta `www`:
   ```bash
   serve -s www
   ```
5. La terminal te mostrará una dirección local (por ejemplo, `http://localhost:3000`). Copia esa dirección y pégala en tu navegador.

---

## Opción 3: Ejecución Móvil (Android/iOS)

Si necesitas mostrar la aplicación corriendo de forma nativa en un dispositivo o emulador móvil, Ionic usa Capacitor para esto:

1. Asegúrate de tener Android Studio instalado (para Android) o Xcode (para iOS, solo en Mac).
2. Construye el proyecto y sincroniza los archivos con Capacitor:
   ```bash
   ionic build
   npx cap sync
   ```
3. Abre el proyecto en el entorno de desarrollo correspondiente:
   ```bash
   # Para Android
   npx cap open android
   
   # Para iOS (Solo Mac)
   npx cap open ios
   ```
4. Desde Android Studio o Xcode, podrás darle al botón de "Play/Run" para instalar y ejecutar la aplicación en tu teléfono conectado o en el emulador de tu computadora.
