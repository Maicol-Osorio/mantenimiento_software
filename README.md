#  **🏃‍♂️ Contador de Calorías, Consumo y Ejercicios - Migración a Context API**

Este proyecto es una evolución del anterior contador de calorías desarrollado con React y useReducer. En esta nueva versión, se realizó una migración completa al uso de `Context API` para gestionar el estado global de la aplicación. La actualización mejora la escalabilidad y simplicidad del código al proporcionar un enfoque más cohesivo y reutilizable para manejar el estado compartido entre componentes.

## ✨ Descripción del Proyecto

El Contador de Calorías, Consumo y Ejercicios es una aplicación interactiva para registrar alimentos consumidos y ejercicios realizados. Esta versión mejora significativamente el manejo del estado global mediante la implementación de `Context API` en lugar de `useReducer`. Además, se introdujo un `hook personalizado` para facilitar la comunicación entre el contexto global y los componentes, manteniendo la lógica centralizada en un reductor único

## 🚀 Cambios Principales en esta Versión

- **Migración de useReducer a Context API**  
  Ahora el estado global se gestiona mediante Context API, eliminando la necesidad de prop drilling y facilitando la escalabilidad del proyecto

- **Hooks Personalizados**  
  Se desarrolló un hook (useActivity) para encapsular el acceso al estado y las acciones, simplificando el consumo de datos en los componentes.

- **Mantenimiento de la Lógica Reducer**  
  Aunque se migró a Context API, la lógica de las acciones (agregar, editar, eliminar) se mantuvo dentro de un reductor centralizado, logrando una estructura robusta y familiar


### 🔗 Gestión de Estado Global
- **Context API:** Creación de un contexto global para manejar el estado de las actividades.
- **Hook Personalizado:** Implementación de un hook para simplificar el acceso al contexto.
- **Reductor Centralizado:** Gestión de acciones como agregar, editar y eliminar actividades con un reducer.


### 🖌️ Diseño y UX
- **Separación de Preocupaciones:** División clara entre lógica de estado (Context API) y presentación (componentes React).
- **Validación de Formularios:** Verificación de entradas para garantizar datos precisos
- **TailwindCSS:** Diseño visual limpio y responsivo.

### 🧩 Ventajas de la Migración
- **Facilidad de Escalabilidad:** Posibilidad de ampliar la funcionalidad del proyecto sin comprometer la claridad del código
- **Simplicidad en Componentes:** Los componentes solo se enfocan en la presentación, mientras que el manejo del estado se delega al contexto.

## 🛠️ Tecnologías Utilizadas
- **React**: Biblioteca principal para crear la interfaz de usuario.
- **Context API**: Para compartir el estado global y las acciones.
- **useReducer**: Para manejar el estado de manera eficiente y escalable.
- **Hooks Personalizados**: Para encapsular la lógica de acceso al estado.
- **TailwindCSS**: Para el diseño visual responsivo y moderno.
- **LocalStorage**: Para guardar y recuperar los datos de las actividades.
- **TypeScript:** Para agregar tipos y mejorar la robustez del código.


## 🚀 Instalación y Uso

### Requisitos Previos:
- Tenga Node.js instalado en su sistema.

### Pasos:
1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/contador-calorias
    ```

2. Ingresa al directorio del proyecto:

    ```bash
    cd 5.Contador de Calorias y Ejercicios
    ```

3. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

4. Ejecuta el proyecto en modo desarrollo:

    ```bash
    npm run dev
    ```

## 🚀 Implementación

La aplicación ya está desplegada y disponible para que la pruebes en línea:

🔗 [Contador de Calorías, Consumo y Ejercicios - Ver en vivo](https://contador-calorias-ejercicios.netlify.app/)
