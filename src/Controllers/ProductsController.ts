import express from 'express'
import ProductsRepository from '../Repositories/ProductsRepositories'

export default class ProductsController {
    public path = '/products'
    public router = express.Router()
    constructor(private repository: ProductsRepository) {
        this.initRoutes()
    }

    private initRoutes() {
        this.router.get(this.path, this.getAll)
        this.router.get(this.path + '/:id', this.getSingle)
    }

    private async getAll(request: express.Request, response: express.Response) {
        const data = await this.repository.getAll()
        response.send(data)
    }

    private async getSingle(request: express.Request, response: express.Response) {
        const id = request.params?.id

        if (id) {
            const data = await this.repository.getSingle(id)
            response.send(data)
        }
    }
}
