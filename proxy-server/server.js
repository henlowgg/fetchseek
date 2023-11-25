// IMPORTANT, THIS WOULD BE THE FIX TO IMPLEMENT FOR CORS ISSUES, SAVE FOR FUTURE


// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const port = process.env.PORT || 3001; // can use this specific port or default a port

// // Enable CORS for all routes with explicit origin and credentials
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));

// // Define a route to forward requests to the external API
// app.all('/api/*', async (req, res) => {
//   try {
//     // Use the base URL of the external API
//     const apiUrl = `https://frontend-take-home-service.fetch.com${req.url}`;

//     // Forward the request to the external API
//     const response = await axios({
//       method: req.method,
//       url: apiUrl,
//       data: req.body,
//       headers: req.headers,
//       withCredentials: true, // Need the credentials to be true for requests
//     });

//     // Send back response
//     res.status(response.status).json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Proxy server is running on port ${port}`);
// });
