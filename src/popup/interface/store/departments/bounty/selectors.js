import sampleData from 'static/data/bounties.dev.json'
export const initialState = {
  bounties: sampleData
}
export const getBounties = (state,delta) =>state.bounties || null
export const getDeltaStatus = (state,delta) =>state[delta] && state[delta].status || null