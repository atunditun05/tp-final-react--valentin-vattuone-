# 🧭 Pokepedia

Aplicación web desarrollada con **React + Vite** que permite explorar todos los Pokémon existentes, acceder a sus estadísticas, habilidades, tipos, peso, altura y movimientos.  
Consume datos en tiempo real desde la **PokéAPI** y presenta una interfaz dinámica, moderna y responsive.

---

## ✨ Características Principales

- 🔎 **Exploración completa** de Pokémon con imágenes oficiales.
- 📊 **Detalles individuales**: altura, peso, experiencia base, tipos y estadísticas.
- ⚙️ **Movimientos y habilidades** listados por cada Pokémon.
- 🧭 **Navegación SPA** con React Router.
- 💅 **Diseño responsive** y visual atractivo con Bootstrap.
- 🎞️ **Animaciones en CSS**: efectos de escala, rotación y keyframes.
- 🧩 **Componentes reutilizables** para mejorar la estructura y mantenimiento del código.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19**
- **Vite** – entorno de desarrollo rápido
- **React Router DOM** – navegación entre vistas
- **Bootstrap 5** – estilos y layout responsive

### API
- **PokéAPI** – datos actualizados de Pokémon

### Estilos y Animaciones
- **CSS3** – animaciones personalizadas (rotación, crecimiento, keyframes)
- **Bootstrap** – grid system y componentes visuales
- **Diseño responsive** – adaptado a móviles, tablets y desktop

---

## 📂 Estructura del Proyecto

```
pokepedia/
├── public/
├── src/
│   ├── assets/
│   │   ├── fondo-pokemon.jpg          # Imagen de fondo principal
│   │   ├── fondopokemon-mobile.jpg    # Fondo alternativo para mobile
│   │   ├── Logo.png                   # Logo del proyecto
│   │   ├── personajes.png             # Imagen decorativa de personajes
│   │   ├── pokebola.png               # Recurso gráfico adicional
│   │   └── react.svg
│   ├── components/
│   │   ├── Card.jsx                   # Tarjeta individual de Pokémon
│   │   ├── Footer.jsx                 # Pie de página
│   │   └── NavBar.jsx                 # Barra de navegación principal
│   ├── pages/
│   │   ├── Home.jsx                   # Página de inicio con introducción
│   │   ├── ListaPokemones.jsx         # Renderizado dinámico del listado
│   │   └── DetallePokemon.jsx         # Vista detallada de cada Pokémon
│   ├── styles/
│   │   ├── App.css                    # Estilos globales y animaciones
│   │   ├── index.css                  # Estilos base del proyecto
│   │   └── ListaPokemones.css         # Estilos específicos del listado
│   ├── App.jsx                        # Configuración principal de rutas
│   └── main.jsx                       # Punto de entrada del proyecto
├── package.json
├── vite.config.js
└── README.md
```

---

## 📦 Instalación

### Prerrequisitos
- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

### Pasos

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/atunditun05/tp-final-react--valentin-vattuone-.git
   cd tp-final-react--valentin-vattuone-
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

---

## 🚀 Ejecución del Proyecto

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

Luego abrí en tu navegador:
```
http://localhost:5174
```

---

## 🧭 Guía de Uso

### 🏠 **Inicio**
Pantalla principal con un mensaje de bienvenida e imagen temática.  
Permite acceder al listado general de Pokémon.

### 📋 **Listado de Pokémon**
Visualiza múltiples tarjetas con:
- Imagen oficial del Pokémon  
- Nombre y número de ID  
- Botón **“Ver detalle”** para acceder a la información completa  

### 🔍 **Detalle de Pokémon**
Muestra:
- Imagen en tamaño grande  
- Tipos y movimientos  
- Estadísticas base representadas gráficamente  
- Datos generales: altura, peso y experiencia base  

---

## 🎨 Diseño y Estilo

- **Fondo personalizado** con imagen temática Pokémon.  
- **Paleta de colores** basada en tonos cálidos y alegres (rojos, amarillos y verdes).  
- **Efectos visuales**:  
  - Hover con aumento de escala en las tarjetas.  
  - Animaciones sutiles al cargar los componentes.  
  - Sombras suaves para resaltar elementos.  

Vista previa del proyecto:

![Home](./src/assets/proyecto-preview.jpg)
![Listado de Pokemones](./src/assets/proyecto-preview-01.jpg)
![Detalle del Pokémon](./src/assets/proyecto-preview-02.jpg)

---

## 👨‍💻 Autor

**Valentín Vattuone**  
Proyecto final de la materia **Programación Frontend con React**  
📍 Repositorio: [Pokepedia - GitHub](https://github.com/atunditun05/tp-final-react--valentin-vattuone-.git)

---

## 📜 Licencia
Este proyecto fue desarrollado con fines educativos y de práctica.  
Datos proporcionados por [PokéAPI](https://pokeapi.co/).
