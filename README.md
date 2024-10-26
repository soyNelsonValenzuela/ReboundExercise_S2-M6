# Rebound Exercise - Proyecto Node.js

Este proyecto es parte del módulo de introducción al gestor de paquetes NPM y tiene como objetivo la creación de un proyecto Node.js que emplee distintos paquetes de NPM para generar datos, gestionar configuraciones y manipular funciones básicas.

## Requisitos previos

Asegúrate de haber instalado [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/).

## Instalación

1. Clona el repositorio:
   ```
   bash
   git clone https://github.com/soyNelsonValenzuela/ReboundExercise_S2-M6.git
   cd ReboundExercise_S2-M6
   ```
2.	Ejecuta el siguiente comando para instalar las dependencias definidas en el package.json:
   ```
  npm i
  ```
## Ejecutar el proyecto

El proyecto contiene los siguientes archivos:

- index.js: Archivo principal donde se ejecuta el programa.
- utils.js: Contiene una función que manipula cadenas de texto de acuerdo a una variable booleana.
- config.js: Define y exporta una variable booleana que determina el comportamiento de la función en utils.js.

  ## Funcionalidad
  
1.	Generación de IDs únicos: Usando el paquete nanoid, el programa genera dos identificadores únicos y los almacena en variables independientes.
2.	Manipulación de cadenas: La función en utils.js permite:
	- Concatenar dos cadenas de texto.
	- O bien, retornar la longitud de la concatenación dependiendo del valor de la variable booleana en config.js.
3.	Configuración: En el archivo config.js, puedes cambiar el valor de la variable booleana para alternar el comportamiento de la función en utils.js.

## Uso

	1.	Para ejecutar el proyecto, utiliza el siguiente comando:

  ```
  node index.js
  ```

	2.	Para observar cambios dinámicos mientras desarrollas, usa nodemon:

  ```
npx nodemon index.js
```
## Autor

Nelson Valenzuela
Desarrollador en formación, enfocado en aprender y aplicar conocimientos de desarrollo de software y web.
  - GitHub: [soyNelsonValenzuela](https://github.com/soyNelsonValenzuela)










