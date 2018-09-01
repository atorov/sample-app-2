import component from './component'

import IdeaSvg from './assets/img/idea.svg'

import './main.less'

const myFun = () => console.log('::: myFun: ...')

document.body.appendChild(component('This Is a Custom Message'))

const img = document.createElement('img')
img.src = IdeaSvg
document.body.appendChild(img)

const sa = { a: 'test' }
console.log('::: ::: ::: ::: ::: a:', { ...sa })
