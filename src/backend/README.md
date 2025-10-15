# Proyecto Backend - Node.js + Express + Prisma

API REST desarrollada con Node.js, Express y PostgreSQL (Prisma ORM).

## Requisitos Previos

- Node.js v22 o v20
- npm o yarn
- Cuenta en Neon (PostgreSQL gratuito)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Meowwuw/PIAD-301.git
cd backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env
```
Edita `.env` y agrega tu DATABASE_URL de Neon.

4. Ejecutar migraciones de Prisma:
```bash
npx prisma migrate dev
```

5. Iniciar servidor:
```bash
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor en modo desarrollo
- `npm start` - Inicia el servidor en modo producción
- `npx prisma studio` - Abre interfaz visual de la base de datos
- `npx prisma migrate dev` - Crea y ejecuta migraciones

## Tecnologías

- Node.js
- Express
- Prisma ORM
- PostgreSQL (Neon)
- Nodemon

## Autor

Proyecto educativo - Ingeniería de Software - Magenta 🌟🐱✨