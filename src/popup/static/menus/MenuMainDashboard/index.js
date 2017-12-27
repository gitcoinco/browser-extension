import {svg} from 'assets'
export default [
 {
  title: 'Deals',
  to: '/dashboard/deals',
  svg: svg.financialFolder,
  gradient: 'crimson',
  childrenItems: [
    {
      title: 'Latest deals',
      to: '/dashboard/deals/latest',
      svg: svg.lightening,
      gradient: 'crimson',
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
      title: 'Upcoming Schedule',
      to: '/dashboard/deals/schedule',
      svg: svg.flowChart,
      gradient: 'crimson',
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
      title: 'Recent Reports',
      to: '/dashboard/deals/reporting',
      svg: svg.graphVisualization,
      gradient: 'crimson',
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
{
  title: 'People',
  to: '/dashboard/people',
  svg: svg.dna,
  gradient: 'crimson',
  childrenItems: [
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
},
{
  title: 'Projects',
  to: '/dashboard/projects',
  svg: svg.networkCentral,
  gradient: 'crimson',
  childrenItems: [
    {
      title: 'Map',
      to: '/dashboard/projects/map',
      svg: svg.dataAnalytics,
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
      to: '/dashboard/project/add',
      svg: svg.financialFolder,
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
},
{
  title: 'Organizations',
  to: '/dashboard/organizations',
  svg: svg.castle,
  gradient: 'crimson',
    childrenItems: [
    {
      title: 'Map',
      to: '/dashboard/organizations/map',
      svg: svg.laptop,
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
      to: '/dashboard/organization/add',
      svg: svg.networkCentral,
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
},
]