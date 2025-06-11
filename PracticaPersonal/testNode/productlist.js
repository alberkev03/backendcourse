import fs from 'fs'

const data = fs.readFileSync('./data/products.json', 'utf8')

export default data