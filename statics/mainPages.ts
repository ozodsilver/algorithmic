import type {IMainPages} from '~/types/main/mainPages'

export const pages: IMainPages[] = [
  {
    path: '/home',
    name: 'Home',
    icon: 'mdi:home'
  },

  {
    path: '/problems',
    name: 'Problems',
    icon: 'mdi:code-tags-check'
  },
  {
    path: '/contests',
    name: 'Contests',
    icon: 'mdi:trophy'
  },
  {
    path: '/users',
    name: 'Users',
    icon: 'mdi:users'
  },
  {
    path: '/attempts',
    name: 'Attempts',
    icon: 'mdi:send'
  },
  {
    path: '/usage',
    name: 'Usage',
    icon: 'mdi:information'
  },
  {
    path: '/about-us',
    name: 'About Us',
    icon: 'mdi:account-box-edit-outline'
  }
]
