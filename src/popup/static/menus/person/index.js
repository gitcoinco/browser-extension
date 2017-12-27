import { svg } from 'assets'
const drawerMenuItems = [
  {
    title: 'Profile',
    branch: 'dashboard/person',
    destination: '',
    svg: svg.dna,
    icon: {
      svgColor: 'blue'
    }
  },
{
  title: 'Carts',
  branch: 'dashboard/person',
  destination: 'cart',
  svg: svg.commerceCartProtected,
  icon: {
    svgColor: 'blue'
  }
},
{
  title: 'Orders',
  branch: 'dashboard/person',
  destination: 'orders',
  svg: svg.commerceInvoice,
  icon: {
    svgColor: 'blue'
  }
},
{
  title: 'Payment Information',
  branch: 'dashboard/person',
  destination: 'account',
  svg: svg.commerceCreditCard,
  icon: {
    svgColor: 'blue'
  }
},
{
  title: 'Settings',
  branch: 'dashboard/person',
  destination: 'settings',
  svg: svg.commerceOnlineBanking,
  icon: {
    svgColor: 'blue'
  }
},
{
  title: 'Administrator Settings',
  branch: 'dashboard/person',
  destination: 'administrator',
  svg: svg.economyPeople,
  icon: {
    svgColor: 'blue'
  }
},
]

export default drawerMenuItems