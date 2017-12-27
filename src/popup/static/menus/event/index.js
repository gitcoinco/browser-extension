import { 
  laptop,
  abacus,
  brain,
  chromosome,
  cog,
  flowChartSimple,
} from 'assets/shapes'
export default [
{
  title: 'Event Overview',
  branch: 'dashboard/event',
  destination: '',
  svg: flowChartSimple,
  icon: {
    svgColor: 'blue'
  }
},
{
  title: 'Event Details',
  branch: 'dashboard/event',
  destination: 'edit',
  svg: laptop,
  icon: {
    svgColor: 'blue'
  }
},
{
  title: 'Tasks',
  branch: 'dashboard/event',
  destination: 'tasks',
  svg: brain,
  icon: {
    svgColor: 'blue'
  }
},
{
  title: 'Contributors',
  branch: 'dashboard/event',
  destination: 'contributors',
  svg: chromosome,
  icon: {
    svgColor: 'blue'
  }
},
{
  title: 'Settings',
  branch: 'dashboard/event',
  destination: 'settings',
  svg: cog,
  icon: {
    svgColor: 'blue'
  }
},
{
  title: 'Administrator',
  branch: 'dashboard/event',
  destination: 'settings/administrator',
  svg: abacus,
  icon: {
    svgColor: 'blue'
  }
},
]