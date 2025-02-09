# FranKraft

Un clon de Minecraft minimalista desarrollado con A-Frame y PHP.

Autor: franHR

## Descripción

FranKraft es un juego de construcción en 3D inspirado en Minecraft, donde los jugadores pueden crear y destruir bloques en un mundo virtual. El juego utiliza A-Frame para los gráficos 3D y PHP con SQLite para el backend.

## Características Principales

- Sistema de construcción/destrucción de bloques
- Modo multijugador con sistema de usuarios
- Guardado automático del progreso
- Sistema de chunks para optimización
- Efectos visuales (niebla, sombras, iluminación dinámica)
- Herramientas de construcción:
  - Modo libre para colocar bloques individuales
  - Estructuras predefinidas (árboles, etc.)
  - Selector de colores
  - Radio de construcción ajustable

## Requisitos

- Servidor web con PHP
- SQLite3
- Navegador moderno con soporte WebGL

## Instalación

1. Clonar el repositorio en tu servidor web:
```bash
git clone <url-repositorio> pcpro-franKraft
```

2. Configurar permisos de escritura para la base de datos SQLite:
```bash
chmod 777 back/sienna.db
```

3. Acceder mediante el navegador a la ruta donde instalaste el proyecto

## Controles

- WASD: Movimiento
- Mouse: Mirar alrededor
- Click izquierdo: Destruir bloques
- Click derecho: Colocar bloques
- Tecla +/-: Ajustar radio de construcción
- ESC: Liberar el cursor

## Estructura del Proyecto

```
pcpro-franKraft/
├── back/                  # Backend PHP
├── componentes/           # Componentes modulares
│   ├── guardar/          # Sistema de guardado
│   ├── login/            # Sistema de autenticación
│   ├── objetos/          # Menú de objetos
│   └── repositorio/      # Selector de colores
├── codigo/               # Lógica principal
├── estilo/              # Hojas de estilo
├── img/                 # Recursos gráficos
├── lib/                 # Librerías
└── sistemas/            # Sistemas del juego
```

## API Backend

El backend proporciona los siguientes endpoints:

- `siennaback.php?router=login`: Autenticación de usuarios
- `siennaback.php?router=signup`: Registro de usuarios
- `siennaback.php?router=actualiza`: Guardar cambios
- `siennaback.php?router=cargaterreno`: Cargar mundo

## Desarrollo

Para contribuir al proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nombre`)
3. Commit tus cambios (`git commit -m 'Añadir feature'`)
4. Push a la rama (`git push origin feature/nombre`)
5. Crea un Pull Request

## Licencia

Este proyecto está bajo licencia MIT.

## Autor
FranHR

Portfolio: franhr.pcprogramacion.es
GitHub: @franHR11
Twitter: @FranhrGames
