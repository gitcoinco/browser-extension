import { 
  cog,
  dna,
  folderLinked,
  commerceCartProtected,
  commerceCreditCard,
  flowChartSimple,
}  from 'assets/shapes'
export default eid => [
  {
    title: 'Profile',
    to: `/dashboard/person/${eid}`,
    svg: dna,
    icon: {
      svgColor: 'green'
    },
    childrenItems: [
      {
        title: 'Edit',
        to: `/dashboard/person/${eid}/edit`,
        destination: 'edit',
        svg: cog,
        icon: {
          svgColor: 'red'
        }
      },
      {
        title: 'Settings',
        to: `/dashboard/person/${eid}/settings`,
        destination: 'settings',
        svg: folderLinked,
        icon: {
          svgColor: 'red'
        }
      },
    ]
  },
  {
    title: 'Projects',
    to: `/dashboard/person/${eid}/projects`,
    destination: 'edit',
    svg: commerceCartProtected,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Tasks',
    to: `/dashboard/person/${eid}/Tasks`,
    destination: 'orders',
    svg: commerceCartProtected,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Account',
    to: `/dashboard/person/${eid}/account`,
    destination: 'settings',
    svg: commerceCreditCard,
    icon: {
      svgColor: 'green'
    }
  },

]