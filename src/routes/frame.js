import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET: Initial frame page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/frame.html'));
});

// POST: Handle frame actions
router.post('/', (req, res) => {
  const { untrustedData } = req.body;
  
  // Example: Toggle between two states
  const currentImage = untrustedData?.frameData?.imageUrl || '';
  const isFirstImage = currentImage.includes('first');
  
  res.json({
    frames: [{
      version: 'vNext',
      image: isFirstImage ? '/images/second.png' : '/images/first.png',
      buttons: [{ label: isFirstImage ? 'Show First' : 'Show Second' }],
    }]
  });
});

export default router;
