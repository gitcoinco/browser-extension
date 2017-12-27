import { svg } from 'assets'
const drawerMenuItems = [
  /*--- Projects ---*/
  {
    title: 'Projects',
    to: '/dashboard/profile/projects',
    svg: svg.campfire,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Communication',
    to: '/dashboard/profile/communication',
      svg: svg.chatDrawn,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Transportation',
    to: '/dashboard/profile/transportation',
      svg: svg.garage,
    icon: {
      svgColor: 'purple'
    }
  },
  {
    title: 'Opportunity',
    to: '/dashboard/profile/projects',
      svg: svg.financialFolder,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Tasks',
    to: '/dashboard/profile/projects',
    svg: svg.dna,
    icon: {
      svgColor: 'orange'
    }
  },
  {
    title: 'Settings',
    to: '/dashboard/profile/projects',
    svg: svg.cog,
    icon: {
      svgColor: 'yellow'
    }
  },
]

export default drawerMenuItems