import {HttpService} from "../tasks/0";

const PostService = require('../tasks/0_post.service')

describe('PostService', function () {
    // @ts-ignore
    let postService: PostService;
    const mockUrl = 'https://';
    const mockUserData = {user: '', message: ''};

    beforeEach(() => {
        postService = new PostService(new HttpService());
    });

    jest.mock('../tasks/0_post.service', () => {
        return function () {
            return {
                getAllData: () => {},
                getDataById: () => {},
                createData: () => {},
                deleteData: () => {},
                updateData: () => {},
            };
        };
    });

    describe('getAllData', () => {
        test("defines method", () => {
            expect(typeof postService.getAllData).toBe("function");
        });

        test('should call method get from httpService', async () => {
            const getSpy = jest.spyOn(postService.httpService, 'get');
            await postService.getAllData();
            expect(getSpy).toHaveBeenCalledWith(mockUrl);
        });

        test('should return valid data', async () => {
            const result = await postService.getAllData()
            expect(result).toEqual({url: mockUrl, method: 'get'});
        });

        test('should return undefined if there is invalid url', async () => {
            postService.URL = '';
            const result = await postService.getAllData()
            expect(result).toEqual(undefined);
        });
    })

    describe('getDataById', () => {
        test("defines method", () => {
            expect(typeof postService.getDataById).toBe("function");
        });

        test('should call method get from httpService', async () => {
            const getSpy = jest.spyOn(postService.httpService, 'get');
            await postService.getDataById('1');
            expect(getSpy).toHaveBeenCalledWith(`${mockUrl}1`);
        });

        test('should return valid data', async () => {
            const result = await postService.getDataById('1')
            expect(result).toEqual({url: `${mockUrl}1`, method: 'get'});
        });

        test('should return undefined if there is invalid url', async () => {
            postService.URL = '';
            const result = await postService.getDataById('')
            expect(result).toEqual(undefined);
        });
    })

    describe('createData', () => {
        test("defines method", () => {
            expect(typeof postService.createData).toBe("function");
        });

        test('should call method post from httpService', async () => {
            const getSpy = jest.spyOn(postService.httpService, 'post');
            await postService.createData(mockUserData);
            expect(getSpy).toHaveBeenCalledWith(mockUrl, mockUserData);
        });

        test('should return valid data', async () => {
            const result = await postService.createData(mockUserData)
            expect(result).toEqual({url: mockUrl, method: 'post', dataToPost: mockUserData});
        });

        test('should return undefined if there is invalid url', async () => {
            postService.URL = '';
            const result = await postService.createData(mockUserData)
            expect(result).toEqual(undefined);
        });
    })

    describe('deleteData', () => {
        test("defines method", () => {
            expect(typeof postService.deleteData).toBe("function");
        });

        test('should call method delete from httpService', async () => {
            const getSpy = jest.spyOn(postService.httpService, 'delete');
            await postService.deleteData();
            expect(getSpy).toHaveBeenCalledWith(mockUrl);
        });

        test('should return valid data', async () => {
            const deleteSpy = jest.spyOn(postService.httpService, 'delete');
            const result = await postService.deleteData()
            expect(deleteSpy).toHaveBeenCalledWith(mockUrl);
            expect(result).toEqual({url: mockUrl, method: 'delete'});
        });

        test('should return undefined if there is invalid url', async () => {
            postService.URL = '';
            const deleteSpy = jest.spyOn(postService.httpService, 'delete');
            const result = await postService.deleteData()
            expect(deleteSpy).toHaveBeenCalledWith('');
            expect(result).toEqual(undefined);
        });
    })

    describe('updateData', () => {
        test("defines method", () => {
            expect(typeof postService.updateData).toBe("function");
        });

        test('should call method put from httpService', async () => {
            const getSpy = jest.spyOn(postService.httpService, 'put');
            await postService.updateData(mockUserData);
            expect(getSpy).toHaveBeenCalledWith(mockUrl, mockUserData);
        });

        test('should return valid data', async () => {
            const result = await postService.updateData(mockUserData)
            expect(result).toEqual({url: mockUrl, method: 'put', dataToPut: mockUserData});
        });

        test('should return undefined if there is invalid url', async () => {
            postService.URL = '';
            const result = await postService.updateData({})
            expect(result).toEqual(undefined);
        });
    })
});