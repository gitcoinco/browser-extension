import { svg, icons } from 'assets'

export default [
{
  title: 'People',
  to: '/dashboard/people',
  svg: icons.uiAvatar,
  childrenItems: PeopleChildren
},
{
  title: 'Calendar',
  to: '/dashboard/calendar',
  svg: icons.uiCalendar,
},
{
  title: 'Notifcations',
  to: '/dashboard/notifcations',
  svg: icons.uiNotifications,
},
{
  title: 'Settings',
  to: '/dashboard/health',
  svg: icons.uiWrench,
},


{
  title: 'Companies',
  to: '/dashboard/organizations',
  svg: icons.uiOffice,
  childrenItems: [
    {
      title: 'Map',
      to: '/dashboard/organizations/map',
      svg: svg.laptop,
      gradient: 'purple',
      gradientDir: '90deg',
      titleWrap: {
        bg:'white',
        px: [10,15],
      },
        wrapper: {
        display: 'flex',
        align: 'center',
      },
    },
    {
      title: 'Add',
      to: '/dashboard/organization/add',
      svg: svg.networkCentral,
      gradient: 'purple',
      gradientDir: '150deg',
      titleWrap: {
        bg:'white',
        px: [10,15],
      },
        wrapper: {
        display: 'flex',
        align: 'center',
      },
    },
  ]
},
]

const PeopleChildren = [
  {
    title: 'Map',
    to: '/dashboard/people/map',
    svg: svg.brain,
    gradient: 'crimson',
    gradientDir: '90deg',
    titleWrap: {
      bg:'white',
      px: [10,15],
    },
      wrapper: {
      display: 'flex',
      align: 'center',
    },
  },
  {
    title: 'Add',
    to: '/dashboard/person/add',
    svg: svg.holePuzzle,
    gradient: 'crimson',
    gradientDir: '150deg',
    titleWrap: {
      bg:'white',
      px: [10,15],
    },
      wrapper: {
      display: 'flex',
      align: 'center',
    },
  },
]