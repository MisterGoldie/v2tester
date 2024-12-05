import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import frameRouter from './src/routes/frame.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use frame routes
app.use('/', frameRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Frame app listening on port ${port}`);
  console.log(`View your frame at http://localhost:${port}`);
});
