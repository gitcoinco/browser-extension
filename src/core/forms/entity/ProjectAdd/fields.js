export default [

{
  component: 'Flex',
  styledProps: {
    mb: 15,
  },
  childrenBlocks:[
    {
      component: 'BlockAddress',
      styledProps: {
        wrapperCustom: {
          mr: 10
        }
      }
    },
    {
      component: 'BlockContact',
      styledProps: {
        wrapperCustom: {
          ml: 10
        }
      }
    },
  ]
},

{
  component: 'Flex',
  styledProps: {
    mb: 15,
  },
  childrenBlocks:[
    {
      component: 'BlockMetadata',
      styledProps: {
        wrapperCustom: {
          mr: 10
        }
      }
    },
    {
      component: 'BlockTaxonomy',
      styledProps: {
        wrapperCustom: {
          ml: 10
        }
      }
    },
  ]
},

{
  component: 'Flex',
  styledProps: {
    mb: 15,
  },
  childrenBlocks:[
    {
      component: 'BlockBiography',
      styledProps: {
        wrapperCustom: {

        }
      }
    }
  ]
},

]