export const resourceTypes = [
  {
    value: 'windows',
    label: 'Windows 资源',
    description: '可以在 Windows 系统上直接运行的 Galgame 游戏'
  },
  {
    value: 'android',
    label: 'Android 资源',
    description: '可以在 Android 系统上直接安装运行的 Galgame 资源'
  },
  {
    value: 'apple',
    label: 'Apple 资源',
    description: '可以在 Apple 系统上运行的 Galgame 资源'
  },
  {
    value: 'krkr',
    label: 'Kirikiroid2 资源',
    description: '采用 Kirikiroid2 模拟器运行的 Galgame 资源'
  },
  {
    value: 'ons',
    label: 'ONScripter 资源',
    description:
      '可以在 ONScripter 模拟器运行的 Galgame 资源'
  },
  {
    value: 'artemis',
    label: 'Artemis 资源',
    description: '可以在支持 Artemis 引擎的模拟器上运行的 Galgame 资源'
  },
  {
    value: 'renpy',
    label: 'RenPy 资源',
    description: '基于 RenPy 引擎的 Galgame 资源，可以在多个平台上运行'
  },
  {
    value: 'row',
    label: '生肉资源',
    description: '没有中文翻译, 仅有日语或其它语言的 Galgame 资源'
  },
  {
    value: 'chinese',
    label: '汉化资源',
    description: '无原生中文翻译的 Galgame 资源'
  },
  {
    value: 'patch',
    label: '补丁资源',
    description: '与这个 Galgame 相关的补丁资源'
  },
  {
    value: 'tool',
    label: '游戏工具',
    description: '辅助游玩 Galgame 的工具, 例如 KRKR 模拟器, Magpie 等'
  },
  {
    value: 'notice',
    label: '官方通知',
    description: '由官方发布的站点通知'
  },
  {
    value: 'other',
    label: '其它',
    description: '其它内容'
  }
]

export const SUPPORTED_TYPE = [
  'windows',
  'android',
  'apple',
  'krkr',
  'ons',
  'artemis',
  'renpy',
  'row',
  'chinese',
  'patch',
  'tool',
  'notice',
  'other'
]
export const SUPPORTED_TYPE_MAP: Record<string, string> = {
  all: '全部类型',
  windows: 'Windows 资源',
  android: 'Android 资源',
  apple: 'Apple 资源',
  krkr: 'Kirikiroid2 资源',
  ons: 'ONScripter 资源',
  artemis: 'Artemis 资源',
  renpy: 'RenPy 资源',
  row: '生肉资源',
  chinese: '汉化资源',
  patch: '补丁资源',
  tool: '游戏工具',
  notice: '官方通知',
  other: '其它'
}
export const ALL_SUPPORTED_TYPE = ['all', ...SUPPORTED_TYPE]

export const SUPPORTED_LANGUAGE = ['zh-Hans', 'zh-Hant', 'ja', 'en', 'other']
export const ALL_SUPPORTED_LANGUAGE = ['all', ...SUPPORTED_LANGUAGE]
export const SUPPORTED_LANGUAGE_MAP: Record<string, string> = {
  all: '全部语言',
  'zh-Hans': '简体中文',
  'zh-Hant': '繁體中文',
  ja: '日本語',
  en: 'English',
  other: '其它'
}

export const SUPPORTED_PLATFORM = [
  'windows',
  'android',
  'macos',
  'ios',
  'linux',
  'other'
]
export const ALL_SUPPORTED_PLATFORM = ['all', ...SUPPORTED_PLATFORM]
export const SUPPORTED_PLATFORM_MAP: Record<string, string> = {
  all: '全部平台',
  windows: 'Windows',
  android: 'Android',
  macos: 'MacOS',
  ios: 'iOS/iPadOS',
  linux: 'Linux',
  other: '其它'
}

export const SUPPORTED_RESOURCE_LINK = ['link']

export const storageTypes = [
  {
    value: 'link',
    label: '自定义链接',
    description: '目前本站仅支持自定义链接上传，其他上传方式敬请期待'
  }
]

export const SUPPORTED_RESOURCE_LINK_MAP: Record<string, string> = {
  link: '链接'
}

export const ALLOWED_MIME_TYPES = [
  'application/zip',
  'application/x-lz4',
  'application/x-rar-compressed'
]

export const ALLOWED_EXTENSIONS = ['.zip', '.rar', '.7z']

export const SUPPORTED_RESOURCE_SECTION = ['galgame', 'patch']

export const RESOURCE_SECTION_MAP: Record<string, string> = {
  galgame: 'Galgame 资源',
  patch: 'Galgame 补丁'
}
