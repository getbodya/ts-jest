// Надо реальзовать комуникацию с АПИ 

// https://jsonplaceholder.typicode.com/guide/
// открытое апи

// надо реализовать методы/функции(по твоему желанию) для выполнения GET, GET by ID, POST, PUT, DELETE операций


export type IData = {
    user?: string;
    message?: string;
}
export type PossibleResults = {
    url: string;
    method: 'get' | 'post' | 'delete' | 'put';
    dataToPost: object;
    dataToPut: object;
}

export class HttpService {
    async get (url: string): Promise<Partial<PossibleResults> | undefined> {
        if (!url) {
            throw new Error('Invalid url!')
        }
        try {
            return Promise.resolve({url, method: 'get'})
        } catch (err) {
            console.log(`Error: ${(err as Error).message}`)
        }
    }

    async post (url: string, dataToPost: IData): Promise<Partial<PossibleResults> | undefined> {
        if (!url) {
            throw new Error('Invalid url!')
        }
        try {
            return Promise.resolve({url, method: 'post', dataToPost})
        } catch (err) {
            console.log(`Error: ${(err as Error).message}`)
        }
    }

    async delete (url: string): Promise<Partial<PossibleResults> | undefined> {
        if (!url) {
            throw new Error('Invalid url!')
        }
        try {
            return Promise.resolve({url, method: 'delete'})
        } catch (err) {
            console.log(`Error: ${(err as Error).message}`)
        }
    }

    async put (url: string, dataToPut: IData): Promise<Partial<PossibleResults> | undefined> {
        if (!url) {
            throw new Error('Invalid url!')
        }
        try {
            return Promise.resolve({url, method: 'put', dataToPut})
        } catch (err) {
            console.log(`Error: ${(err as Error).message}`)
        }
    }
}
