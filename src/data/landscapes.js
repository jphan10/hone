import dscf1184 from '../assets/atmosphere/dscf1184.jpg'
import img1495  from '../assets/atmosphere/img_1495.jpg'
import r20033   from '../assets/atmosphere/r2-03597-0033.jpg'

const photos = [dscf1184, img1495, r20033]

// Shuffle once per page load, pick first two — guarantees no duplicates across sections
const shuffled = [...photos].sort(() => Math.random() - 0.5)

export const pledgePhoto     = shuffled[0]
export const atmospherePhoto = shuffled[1]
