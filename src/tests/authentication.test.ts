import axios from "axios";

describe('Octupus Health home assigment tests', () => {
    describe('Authentication tests', () => {
        test('Login - should return user admin', async () => {
            const request = {
                url: 'http://localhost:3000/api/login',
                body: {
                    username: 'admin',
                    password: '123456'
                }
            }
            const res = await axios.post(request.url, request.body);
            expect(res.status).toBe(200);
            const tokens = res.data.data.tokens;
            const accessToken = tokens.access_token;
            const refreshToken = tokens.refresh_token;

            expect(!accessToken).toBe(false);
            expect(!refreshToken).toBe(false);
        });

        test('Login - invalid username, should return code 401 response', async () => {
            try {
                const request = {
                    url: 'http://localhost:3000/api/login',
                    body: {
                        username: 'Dani',
                        password: '123456'
                    }
                }
                const res = await axios.post(request.url, request.body);
            } catch (error) {
                expect(error.response.status).toBe(401);
            }
        });

        test('Login - invalid password, should return code 401 response', async () => {
            try {
                const request = {
                    url: 'http://localhost:3000/api/login',
                    body: {
                        username: 'admin',
                        password: '123123123456'
                    }
                }
                const res = await axios.post(request.url, request.body);
            } catch (error) {
                expect(error.response.status).toBe(401);
            }
        });

        test('Update token - should return new tokens', async () => {
            // Login admin user:
            const loginRequest = {
                url: 'http://localhost:3000/api/login',
                body: {
                    username: 'admin',
                    password: '123456'
                }
            }
            const adminTokens = await axios.post(loginRequest.url, loginRequest.body);
            // Get User tokens
            const accessToken = adminTokens.data.data.tokens.access_token;
            const refreshToken = adminTokens.data.data.tokens.refresh_token;

            // Refresh token:
            const refreshRequest = {
                url: 'http://localhost:3000/api/refresh',
                body: {},
                headers: {
                    'Authorization': `Bearer ${refreshToken}`
                }
            }

            const res = await axios.post(refreshRequest.url, refreshRequest.body, {headers:refreshRequest.headers})
            const {access_token, refresh_token} = res.data.data.tokens;
            expect(!access_token).toBe(false);
            expect(!refresh_token).toBe(false);
    });
    });
});