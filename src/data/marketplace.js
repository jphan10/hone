// Approved pieces for the Marketplace section.
// To add a new piece:
//   1. Download the image from Cloudinary Console (honed/landing folder)
//   2. Optimize it (aim for <400 KB) and drop it in src/assets/marketplace/
//   3. Import it below and add an entry to the PIECES array.
//
// The Marketplace component shuffles this pool and picks 3 on each page load.

// import jadenFilm01 from '../assets/marketplace/jaden-film-01.jpg'

const GRADIENTS = [
  'linear-gradient(150deg, #e6d8c2, #d3c1a4)',
  'linear-gradient(150deg, #e3d3bd, #cdb79a)',
  'linear-gradient(150deg, #e8dcc6, #d6c4a6)',
  'linear-gradient(150deg, #ddd0b8, #cbb99a)',
  'linear-gradient(150deg, #ebe0cc, #d8c6a8)',
]

export const PIECES = [
  { bg: GRADIENTS[0], label: 'film photograph', artist: 'Jaden Phan',  medium: '35mm, hand-printed' },
  { bg: GRADIENTS[1], label: 'stoneware',       artist: 'Theo Hart',   medium: 'wheel-thrown vessel' },
  { bg: GRADIENTS[2], label: 'linocut',         artist: 'Ren Okafor',  medium: 'hand-pulled print' },
]

// Once you have more than 3 pieces, add them here and the shuffle will kick in:
// { img: jadenFilm01, label: 'film photograph', artist: 'Jaden Phan', medium: '35mm, hand-printed' },
