# Taller de Angular: Gestión de Series de Televisión

Este proyecto de Angular permite gestionar un listado de series de televisión obtenidas desde una URL externa, mostrando información detallada en una tabla y calculando el promedio de temporadas de todas las series.

## Descripción del Proyecto

La aplicación consta de:
1. Un **módulo para series** que organiza y gestiona los componentes y servicios necesarios.
2. Una **clase Serie** que define los atributos necesarios para representar los datos de una serie de televisión.
3. Un **servicio de Series** que realiza una petición HTTP para obtener datos desde una URL externa.
4. Un **componente de listado de series** que muestra en una tabla los datos esenciales de cada serie, como `id`, `nombre`, `canal` y `temporada`. Además, muestra el promedio de temporadas de todas las series al final de la tabla.

### Requerimientos Técnicos
La aplicación cumple con los siguientes puntos:

- **Módulo de Series** (5%): Gestión de componentes y servicios relacionados con las series.
- **Clase Serie** (10%): Contiene los atributos necesarios (`id`, `nombre`, `canal`, `temporada`) para manejar los datos de cada serie.
- **Servicio de Series** (10%): Realiza la petición HTTP para obtener el listado de series desde la URL externa proporcionada.
- **Componente de Listar Series** (10%): Presenta los datos de las series en una tabla de Bootstrap y añade un texto con el promedio de temporadas al final.

### Datos Externos
El listado de series se obtiene de la siguiente URL:

```
https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json
```

## Instalación y Ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Joban-Mejia/TallerAngular.git
   cd taller-angular
   ```

2. Instala las dependencias de Angular:

   ```bash
   npm install
   ```

3. Ejecuta la aplicación en el entorno local:

   ```bash
   ng serve
   ```

4. Accede a la aplicación en el navegador:

   ```
   http://localhost:4200/
   ```

## Estructura del Proyecto

- **src/app/series**: Contiene los componentes, servicio y modelo para la gestión de series.
  - `series.module.ts`: Módulo para organizar los componentes y servicios.
  - `serie.model.ts`: Modelo de datos `Serie` con sus atributos.
  - `series.service.ts`: Servicio HTTP que obtiene los datos de las series.
  - `listar-series.component.ts`: Componente de listado que muestra los datos de las series en una tabla.

## Cálculo del Promedio de Temporadas

El promedio de temporadas se calcula sumando el total de temporadas de todas las series y dividiéndolo entre el número de series, mostrando el resultado al final de la tabla en el componente de listado.

## Despliegue

El selector del componente de listado debe ser integrado en el archivo principal de la aplicación (`app.component.html`) para que el listado de series se despliegue de manera correcta en la interfaz.