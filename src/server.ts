import fastify from 'fastify'
import cors from '@fastify/cors'

const PORT = process.env.PORT || 5555

function bootstrap() {
  const app = fastify()

  app.register(cors, {
    origin: true,
  })

  app.get('/', () => ({ status: 'OK' }))

  app
    .listen({ port: Number(PORT) })
    // eslint-disable-next-line no-console
    .then(() => console.log(`🚀 Running on http://localhost:${PORT} 🔥`))
}

bootstrap()
