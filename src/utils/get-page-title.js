import defaultSettings from '@/settings'

const title = defaultSettings.title || 'BS_Frame'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
