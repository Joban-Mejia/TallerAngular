# Taller-Angular

## Descripción del Proyecto
Taller-Angular es un proyecto enfocado en gestionar y mostrar información sobre series de televisión. La aplicación está construida principalmente usando TypeScript, con componentes adicionales en HTML, JavaScript y CSS pero ahora con una tarjetica dinamica mediante Angular.
![image](https://github.com/user-attachments/assets/7a343bf1-82cd-47be-9a37-5a9f8b3d1c12)



## Tabla de Contenidos
- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)

## Instalación
Para configurar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/DanielGarzon17/Taller-TS-2.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd Taller-Angular
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Inicia el proyecto en un puerto:
    ```bash
    ng s
    ```

## Uso
Para ejecutar el proyecto, usa el siguiente comando:
```bash
npm start
```
## Características
- **Mostrar Series de TV**: La aplicación lista varias series de televisión junto con sus detalles como título, canal, temporadas, descripción y sitio web.
- **Cálculo de Promedio**: Calcula y muestra el número promedio de temporadas para las series listadas.

## Estructura del Proyecto
El repositorio se compone de múltiples archivos y directorios, principalmente:
- `index.html`: El archivo HTML principal que estructura la página web.
- `main.ts`: El archivo TypeScript que maneja la población dinámica de la tabla de series de televisión.
- `Serie.ts`: Define la clase `Serie` con propiedades y un constructor para las series de televisión.
- `data.js`: Contiene los datos para las series de televisión.

## Contribuciones
¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-branch`).
3. Realiza tus cambios (`git commit -m 'Añadir nueva característica'`).
4. Sube los cambios a la rama (`git push origin feature-branch`).
5. Abre un pull request.

