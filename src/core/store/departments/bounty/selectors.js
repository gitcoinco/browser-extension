import sampleData from 'static/data/bounties.dev.json'
export const initialState = {
  bounties: sampleData
}
export const getBounties = (state,delta) =>state.bounties || null
export const getBounty = (state,delta) =>state.bounties && state.bounties.filter(item=>  (item.pk == delta) ? 1:0)[0] || null 
export const getBountyFilter = (state,filter) =>state.bounties && state.bounties.filter(item=>{
  return item.title.toLowerCase().includes(filter) ? true : false
})  || null``