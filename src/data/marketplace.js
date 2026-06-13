import dscf0899 from '../assets/marketplace/dscf0899.jpg'
import dscf1278 from '../assets/marketplace/dscf1278.jpg'

const GRADIENTS = [
  'linear-gradient(150deg, #e6d8c2, #d3c1a4)',
  'linear-gradient(150deg, #e3d3bd, #cdb79a)',
  'linear-gradient(150deg, #e8dcc6, #d6c4a6)',
  'linear-gradient(150deg, #ddd0b8, #cbb99a)',
  'linear-gradient(150deg, #ebe0cc, #d8c6a8)',
]

// Pool of approved pieces. Shuffle kicks in automatically once there are more than 3.
// To add a new piece:
//   1. Drop optimized image into src/assets/marketplace/
//   2. Import it above
//   3. Add an entry below (img: theImport, label, artist, medium)
export const PIECES = [
  { img: dscf1278, label: '', artist: 'Jaden Phan', medium: 'Digital' },
  { bg: GRADIENTS[0], label: 'coming soon',      artist: '—',         medium: '' },
  { bg: GRADIENTS[0], label: 'coming soon',      artist: '—',         medium: '' },
]
