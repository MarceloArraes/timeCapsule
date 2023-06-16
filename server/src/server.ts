import { throws } from 'assert'
import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  return users
})

app.listen({ port: 3333 })
  .then(() => {
    console.log('marcelo2')
  })
  .catch(err => {
    console.log('error123')
    throws(err)
  })
