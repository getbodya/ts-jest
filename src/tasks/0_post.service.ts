import {HttpService, IData} from "./0";

class PostService {
    URL = 'https://';

    constructor(public httpService: HttpService) {}

    async getAllData () {
        try {
            return await this.httpService.get(this.URL)
        } catch (err) {
            console.log(`Error: ${(err as Error).message}`)
        }
    }

    async getDataById (id: string) {
        try {
            return await this.httpService.get(`${this.URL}${id}`)
        } catch (err) {
            console.log(`Error: ${(err as Error).message}`)
        }
    }

    async createData (dataToPost: IData) {
        try {
            return await this.httpService.post(this.URL, dataToPost)
        } catch (err) {
            console.log(`Error: ${(err as Error).message}`)
        }
    }

    async deleteData () {
        try {
            return await this.httpService.delete(this.URL)
        } catch (err) {
            console.log(`Error: ${(err as Error).message}`)
        }
    }

    async updateData (dataToPut: IData) {
        try {
            return await this.httpService.put(this.URL, dataToPut)
        } catch (err) {
            console.log(`Error: ${(err as Error).message}`)
        }
    }
}

module.exports = PostService;
