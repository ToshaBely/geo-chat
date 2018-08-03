module.exports = (express) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send('api router works');
    });

    router.get('/test', (req, res) => {
        res.json({
            success: true,
            message: 'Hello from api',
        });
    });

    return router;
}