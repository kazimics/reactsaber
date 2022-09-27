const fileSave = require('file-save')
const path = require('path')
const uppercamelcase = require('uppercamelcase');

console.log()
process.on('exit', () => {
  console.log()
})
if (!process.argv[2]) {
  console.error('[页面名]必填 - Please enter new page name')
  process.exit(1)
}

const pagename = process.argv[2]
const PageName = uppercamelcase(pagename)
const PagePath = path.resolve(__dirname, '../src/pages', PageName)

const Files = [
  {
    filename: 'index.tsx',
    content: `function ${PageName}() {
  return <div>${PageName}</div>
}

export default ${PageName}`
  }
]

// 创建 文件
Files.forEach((file) => {
  fileSave(path.join(PagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})

console.log('DONE!')
