import { createClient } from 'redis'

const client = createClient({ password: 'password' })

;(async () => {
    await client.connect()
})()

const connectedCallback = async () => {
    console.log('Connected to redis database')
}

client.on('connect', connectedCallback)
client.on('error', (err) => console.log('Redis Client Error: ', err))

export { client as RedisClient }
