import component from './component'

import IdeaSvg from './assets/img/idea.svg'

import './main.less'

document.body.appendChild(component('This Is a Custom Message'))

const img = document.createElement('img')
img.src = IdeaSvg
document.body.appendChild(img)
