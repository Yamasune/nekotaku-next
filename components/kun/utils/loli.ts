import { randomNum } from '~/utils/random'

const getAssetsFile = (name: string) => `/sooner/${name}.webp`

const number = randomNum(0, 12)

let loli = ''
let name = ''

if (number === 0) {
  name = '东云绘名'
  loli = getAssetsFile(name)
} else if (number === 1) {
  name = '凤笑梦'
  loli = getAssetsFile(name)
} else if (number === 2) {
  name = '初音未来'
  loli = getAssetsFile(name)
} else if (number === 3) {
  name = '天马咲希'
  loli = getAssetsFile(name)
} else if (number === 4) {
  name = '宵崎奏'
  loli = getAssetsFile(name)
} else if (number === 5) {
  name = '小豆泽心羽'
  loli = getAssetsFile(name)
} else if (number === 6) {
  name = '巡音流歌'
  loli = getAssetsFile(name)
} else if (number === 7) {
  name = '星乃一歌'
  loli = getAssetsFile(name)
} else if (number === 8) {
  name = '晓山瑞希'
  loli = getAssetsFile(name)
} else if (number === 9) {
  name = '桃井爱莉'
  loli = getAssetsFile(name)
} else if (number === 10) {
  name = '花里实乃里'
  loli = getAssetsFile(name)
} else if (number === 11) {
  name = '草薙宁宁'
  loli = getAssetsFile(name)
} else {
  name = '镜音铃'
  loli = getAssetsFile(name)
}

export const loliAttribute = { loli, name }
