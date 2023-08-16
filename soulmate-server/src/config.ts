import dotenv from 'dotenv'

switch (process.env.NODE_ENV) {
    case 'development':
        dotenv.config({ path: '.env.development' })
        break

    case 'production':
        dotenv.config({ path: '.env.production' })
        break
}

const config = {
    ...process.env,
}

export default config
