import express from 'express'
import DbService from './Services/Db'

export default class App {
    public app: express.Application
    public port: number

    constructor(controllers, port, private db: DbService) {
        this.app = express()
        this.port = port
        this.initMiddlewares()
        this.initControllers(controllers)
        this.db.init()
    }

    private initMiddlewares() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    private initControllers(controllers) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listens on http://localhost:${this.port}`)
        })
    }
}
