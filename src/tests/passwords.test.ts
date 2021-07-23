import axios from "axios";

describe('Octupus Health home assigment tests', () => {
    describe('Passwords CRUD tests', () => {
        let accessToken = '';
        let refreshToken = '';

        beforeEach(async () => {
            // Login admin user:
            const loginRequest = {
                url: 'http://localhost:3000/api/login',
                body: {
                    username: 'admin',
                    password: '123456'
                }
            }
            const adminTokens = await axios.post(loginRequest.url, loginRequest.body);
            // Set User tokens
            accessToken = adminTokens.data.data.tokens.access_token;
            refreshToken = adminTokens.data.data.tokens.refresh_token;

        })

        test('Get Password - should return: password:{service:"my-service", password:"my-secret"}', async () => {
            const getPasswordRequest = {
                url: 'http://localhost:3000/api/passwords/my-service',
                headers: { headers: { 'Authorization': `Bearer ${accessToken}` } }
            }

            const res = await axios.get(getPasswordRequest.url, getPasswordRequest.headers)
            const password = res.data.data.password;

            expect(password.service).toBe('my-service');
            expect(password.password).toBe('my-secret');
        });

        test('Create Password - should return just added password', async () => {
            // Create password:
            const createRequest = {
                url: 'http://localhost:3000/api/passwords',
                body: {
                    service: 'new-service',
                    password: '123'
                },
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }

            const createRes = await axios.post(createRequest.url, createRequest.body, { headers: createRequest.headers })

            // Get new password
            const getPasswordRequest = {
                url: 'http://localhost:3000/api/passwords/new-service',
                headers: { headers: { 'Authorization': `Bearer ${accessToken}` } }
            }

            const res = await axios.get(getPasswordRequest.url, getPasswordRequest.headers)
            const password = res.data.data.password;

            expect(password.service).toBe('new-service');
            expect(password.password).toBe('123');
        });

        test('Update Password - should return updated password', async () => {
            // Update password:
            const updateRequest = {
                url: 'http://localhost:3000/api/passwords/my-service',
                body: {
                    password: 'new-password'
                },
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }

            const createRes = await axios.patch(updateRequest.url, updateRequest.body, { headers: updateRequest.headers })

            // Get new password
            const getPasswordRequest = {
                url: 'http://localhost:3000/api/passwords/my-service',
                headers: { headers: { 'Authorization': `Bearer ${accessToken}` } }
            }

            const res = await axios.get(getPasswordRequest.url, getPasswordRequest.headers)
            const password = res.data.data.password;

            expect(password.service).toBe('my-service');
            expect(password.password).toBe('new-password');
        });

        test('Delete Password - should return 400 response after delete', async () => {
            try {
                // Delete Password
                const deleteRequest = {
                    url: 'http://localhost:3000/api/passwords/my-service',
                    headers: { headers: { 'Authorization': `Bearer ${accessToken}` } }
                }

                const deleteRes = await axios.delete(deleteRequest.url, deleteRequest.headers)
                // Get deleted Password
                const getPasswordRequest = {
                    url: 'http://localhost:3000/api/passwords/my-service',
                    headers: { headers: { 'Authorization': `Bearer ${accessToken}` } }
                }

                const res = await axios.get(getPasswordRequest.url, getPasswordRequest.headers)
                const password = res.data.data.password;
            } catch (error) {
                expect(error.response.status).toBe(400);
            }
        });
    });
});