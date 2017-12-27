import { svg } from 'assets'
const drawerMenuItems = [
  {
    title: 'Product Preview',
    branch: 'dashboard/product',
    destination: '',
    svg: svg.laptop,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Description',
    branch: 'dashboard/product',
    destination: 'edit',
    svg: svg.idea,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Settings',
    branch: 'dashboard/product',
    destination: 'edit/settings',
    svg: svg.cog,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Status Updates',
    branch: 'dashboard/product',
    destination: 'activity',
    svg: svg.bell,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Contributors',
    branch: 'dashboard/product',
    destination: 'people',
    svg: svg.dna,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Task Assignment',
    branch: 'dashboard/product',
    destination: 'tasks',
    svg: svg.flowChart,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Administrator Settings',
    branch: 'dashboard/product',
    destination: 'settings',
    svg: svg.folderLinked,
    icon: {
      svgColor: 'blue'
    }
  },
]

export default drawerMenuItems