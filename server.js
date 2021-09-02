import express, { static } from 'express';
import { resolve } from 'path'

const PORT = process.env.PORT || 5000


const app = express();


// Have Node serve the files for our built React app
app.use(static(resolve(__dirname, '../client/build')));


// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../client/build', 'index.html'));
    
});



app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});

//Run app, then load http://localhost:5000 in a browser to see the output.