// // api.test.ts

// import { login, logout, fetchBreeds } from './api';

// describe('API Tests', () => {
//   describe('login function', () => {
//     it('should return response data', async () => {
//       const response = await login('John Doe', 'john@example.com');
//       expect(response).toBeDefined();
//       expect(response.success).toBe(true);
//     });
//   });

//   describe('logout function', () => {
//     it('should logout the user', async () => {
//       await logout();
//       // Add assertions to check if the user is logged out
//     });
//   });

//   describe('fetchBreeds function', () => {
//     it('should return an array of breed names', async () => {
//       const response = await fetchBreeds();
//       expect(response).toBeDefined();
//       expect(Array.isArray(response)).toBe(true);
//     });
//   });

//   // Add more tests for other API functions
// });