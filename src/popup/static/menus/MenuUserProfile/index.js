import {svg} from 'assets'
const drawerMenuItems = [
  {
    title: 'Profile',
    to: '/dashboard/profile',
    svg: svg.idea,
    gradient: 'redOrange',
    gradientDir:'180deg',
    childrenItems: [
      {
        title: 'Latest Articles',
        to: '/dashboard/news/latest',
        svg: svg.lightening,
        gradient: 'redOrange',
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
        to: '/dashboard/news/schedule',
        svg: svg.flowChart,
        gradient: 'redOrange',
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
        to: '/dashboard/news/reporting',
        svg: svg.graphVisualization,
        gradient: 'redOrange',
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
    title: 'Articles',
    to: '/dashboard/profile/communications',
    svg: svg.chatHeads,
    gradient: 'cherry',
    
    childrenItems: [
      {
        title: 'Create Schedule',
        to: '/dashboard/communications/hotline/',
        svg: svg.flowChartShapes,
        gradient: 'cherry',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
        wrapper: {
          display: 'flex',
          align: 'center',
        },
        childrenItems: [
          {
            title: 'Call Logs',
            to: '/dashboard/communications/hotlines/calls/log',
            svg: svg.chat,
            gradient: 'cherry',
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
            title: 'Messages',
            to: '/dashboard/communications/hotlines/messages',
            svg: svg.chatHeads,
            gradient: 'cherry',
            titleWrap: {
              bg:'white',
              px: [10,15],
            },
            wrapper: {
              display: 'flex',
              align: 'center',
            },
          },
        ],
      },
      {
        title: 'Rapid Response',
        to: '/dashboard/communications/hotline/immigration',
        svg: svg.lightening,
        gradient: 'cherry',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
        childrenItems: [
          {
            title: 'Call Logs',
            to: '/dashboard/communications/hotline/immigration/calls/log',
            svg: svg.chat,
            gradient: 'cherry',
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
            title: 'Messages',
            to: '/dashboard/communications/hotline/immigration/messages',
            svg: svg.chatHeads,
            gradient: 'cherry',
            titleWrap: {
              bg:'white',
              px: [10,15],
            },
            wrapper: {
              display: 'flex',
              align: 'center',
            },
          },
        ],
      },
      {
        title: 'General Information',
        to: '/dashboard/communications/hotline/general',
        svg: svg.flowChart,
        gradient: 'cherry',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
        childrenItems: [
          {
            title: 'Call Logs',
            to: '/dashboard/communications/hotline/general/calls/log',
            svg: svg.chatDrawn,
            gradient: 'cherry',
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
            title: 'Recent Activity',
            to: '/dashboard/communications/hotline/immigration/activity/recent',
            svg: svg.chatHeads,
            gradient: 'cherry',
            titleWrap: {
              bg:'white',
              px: [10,15],
            },
            wrapper: {
              display: 'flex',
              align: 'center',
            },
          },
        ],
      },
    ]
  },
  {
    title: 'Projects',
    to: '/dashboard/projects',
    svg: svg.networkCentral,
    gradient: 'purpleTurqoise',
    childrenItems: [
      {
        title: 'Activity',
        to: '/dashboard/projects/map',
        svg: svg.mobileCity,
        gradient: 'purpleTurqoise',
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
        svg: svg.holePuzzle,
        gradient: 'purpleTurqoise',
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
      {
        title: 'Manage',
        to: '/dashboard/projects/manage',
        svg: svg.personGraph,
        gradient: 'purpleTurqoise',
        gradientDir: '130deg',
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
    title: 'Resources',
    to: '/dashboard/resources',
    svg: svg.dataMining,
    gradient: 'turqoise',
    childrenItems: [
      {
        title: 'Activity',
        to: '/dashboard/resources/map',
        svg: svg.mobileCity,
        gradient: 'purpleTurqoise',
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
        to: '/dashboard/resources/add',
        svg: svg.holePuzzle,
        gradient: 'purpleTurqoise',
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
      {
        title: 'Manage',
        to: '/dashboard/resources/manage',
        svg: svg.personGraph,
        gradient: 'purpleTurqoise',
        gradientDir: '130deg',
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

export default drawerMenuItems