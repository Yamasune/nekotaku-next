import { SUPPORTED_TYPE_MAP } from '~/constants/resource'
import type { KunSiteConfig } from './config'

const KUN_SITE_NAME = '喵源领域'
const KUN_SITE_MENTION = '@nekotaku'
const KUN_SITE_TITLE = '喵源领域 - 此刻便再无等待的理由'
const KUN_SITE_IMAGE =
  'https://image.nullcloud.top/uploads/favicon.webp'
const KUN_SITE_DESCRIPTION =
  '喵源领域是专注于Galgame综合交流社区，提供最新最全的Galgame资讯和交流平台，助力将Galgame文化推向世界！'
const KUN_SITE_URL = 'https://www.nyantaku.net'
const KUN_SITE_ARCHIVE = 'https://www.nyantaku.com'
const KUN_SITE_FORUM = 'https://www.neko-plus.net'
const KUN_SITE_NAV = 'https://www.acgn.im'
const KUN_SITE_TELEGRAM_GROUP = 'https://t.me/nekotaku_board'
const KUN_SITE_DISCORD_GROUP = 'https://discord.gg/xUKfWtHMzD'
const KUN_SITE_LIST = [
  { name: KUN_SITE_NAME, url: 'https://www.nyantaku.com' },
  { name: KUN_SITE_NAME, url: 'https://www.nekotaku.net' },
  { name: KUN_SITE_NAME, url: 'https://www.nekotaku.xyz' },
  { name: KUN_SITE_NAME, url: 'https://www.nekotaku.top' },
  { name: KUN_SITE_NAME, url: 'https://www.nekotaku.me' },
  { name: KUN_SITE_NAME, url: 'https://www.ourmoe.me' },
  { name: KUN_SITE_NAME, url: 'https://www.symoe001.com' },
  { name: KUN_SITE_NAME, url: 'https://www.symoe001.net' }
]
const KUN_SITE_KEYWORDS = [
  '喵源领域',
  'nekotaku',
  'gal',
  'Galgame',
  '论坛',
  '网站',
  'Galgame 下载',
  'Galgame 资源',
  'Galgame 百科',
  'Galgame 评测',
  'Galgame 汉化',
  'Galgame 制作',
  'Galgame 讨论',
  '游戏交流',
  '其他交流',
  ...Object.values(SUPPORTED_TYPE_MAP)
]

export const kunMoyuMoe: KunSiteConfig = {
  title: KUN_SITE_TITLE,
  titleShort: KUN_SITE_NAME,
  template: `%s - ${KUN_SITE_NAME}`,
  description: KUN_SITE_DESCRIPTION,
  keywords: KUN_SITE_KEYWORDS,
  canonical: KUN_SITE_URL,
  author: [
    { name: KUN_SITE_TITLE, url: KUN_SITE_URL },
    { name: KUN_SITE_NAME, url: KUN_SITE_NAV },
    ...KUN_SITE_LIST
  ],
  creator: {
    name: KUN_SITE_NAME,
    mention: KUN_SITE_MENTION,
    url: KUN_SITE_URL
  },
  publisher: {
    name: KUN_SITE_NAME,
    mention: KUN_SITE_MENTION,
    url: KUN_SITE_URL
  },
  domain: {
    main: KUN_SITE_URL,
    imageBed: 'https://image.nullcloud.top',
    storage: KUN_SITE_URL,
    kungal: KUN_SITE_URL,
    telegram_group: KUN_SITE_TELEGRAM_GROUP,
    discord_group: KUN_SITE_DISCORD_GROUP,
    archive: KUN_SITE_ARCHIVE,
    forum: KUN_SITE_FORUM,
    nav: KUN_SITE_NAV
  },
  og: {
    title: KUN_SITE_TITLE,
    description: KUN_SITE_DESCRIPTION,
    image: KUN_SITE_IMAGE,
    url: KUN_SITE_URL
  },
  images: [
    {
      url: KUN_SITE_IMAGE,
      width: 1000,
      height: 800,
      alt: KUN_SITE_TITLE
    }
  ]
}
