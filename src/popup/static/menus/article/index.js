import { 
  laptop,
  abacus,
  brain,
  chromosome,
  cog,
  flowChartSimple,
 }  from 'assets/shapes'
export default [
  {
    title: 'Overview',
    branch: 'dashboard/article',
    destination: '',
    svg: laptop,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Edit',
    branch: 'dashboard/article',
    destination: 'edit',
    svg: abacus,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Tasks',
    branch: 'dashboard/article',
    destination: 'tasks',
    svg: brain,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Contributors',
    branch: 'dashboard/article',
    destination: 'contributors',
    svg: chromosome,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Settings',
    branch: 'dashboard/article',
    destination: 'settings',
    svg: cog,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Administrator',
    branch: 'dashboard/article',
    destination: 'settings/administrator',
    svg: flowChartSimple,
    icon: {
      svgColor: 'blue'
    }
  },
]