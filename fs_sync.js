const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/third.txt',
    'this is the third file & '+ first,
    {flag:'a'}
)
