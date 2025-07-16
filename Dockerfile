# Stage 1: Dependencias y construcción
FROM node:18-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY . .

# Construir aplicación
RUN npm run build

# Stage 2: Imagen de producción
FROM node:18-alpine AS runner
WORKDIR /app

# Configurar para producción
ENV NODE_ENV production

# Añadir usuario no privilegiado para seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Cambiar propietario de los archivos
RUN chown -R nextjs:nodejs /app

# Cambiar al usuario no privilegiado
USER nextjs

# Exponer el puerto
EXPOSE 3000

# Definir variable de entorno para el host
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Comando para iniciar la aplicación
CMD ["node", "server.js"]