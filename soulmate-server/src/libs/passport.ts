import strategy from 'passport-google-oauth20'
import config from '../config'
import passport from 'passport'

const GoogleStrategy = strategy.Strategy

passport.use(
    new GoogleStrategy(
        {
            clientID: config.GOOGLE_CLIENT_ID as string,
            clientSecret: config.GOOGLE_CLIENT_SECRET as string,
            callbackURL:
                'https://' + config.SERVER_URI + '/auth/google/callback',
        },
        function (accessToken, refreshToken, profile, callback) {
            callback(null, profile)
        }
    )
)

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user as Express.User | null)
})

export default passport
