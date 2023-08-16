import express from 'express'
import passport from 'passport'
import config from '../config'

const router = express.Router()

// Variables
const CLIENT_URI = config.CLIENT_URI

// Router's Endpoints
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: CLIENT_URI,
        failureRedirect: CLIENT_URI + '/auth/failure',
    })
)

router.get('/login/failed', (req, res) => {
    return res.json({
        success: false,
        message: 'Unauthorized',
    })
})

router.get('/login/success', (req, res) => {
    if (req.user)
        return res.status(200).json({
            success: true,
            message: 'Authorized',
            user: req.user,
        })

    return res.redirect('./failed')
})

router.get('/logout', (req, res) => {
    return res
        .clearCookie(config.SESSION_NAME as string)
        .clearCookie(config.SESSION_NAME + '.sig')
        .status(200)
        .json({ success: true })
})

export default router
