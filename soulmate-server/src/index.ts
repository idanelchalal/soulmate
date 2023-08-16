import express from 'express'
import cors from 'cors'
import passport from 'passport'
import cookieSession from 'cookie-session'
import config from './config'
import authRoutes from './routes/auth'

require('./libs/passport')

const app = express()

app.use(
    cookieSession({
        name: config.SESSION_NAME,
        keys: ['session'],
        maxAge: 24 * 60 * 60 * 100,
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
        credentials: true,
        origin: config.CLIENT_URI,
        methods: ['POST', 'GET', 'PUT', 'DELETE'],
    })
)

app.use('/auth', authRoutes)

app.listen(config.PORT, () => console.log('Listening on', config.PORT))
