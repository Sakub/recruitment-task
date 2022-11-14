import DbService from '../Services/Db'

export default class ProductsRepository {
    constructor(private db: DbService) {}

    public async getAll() {
        const pool = this.db.getPool()

        const response = await pool.query('SELECT * FROM products')
        return response
    }
}
