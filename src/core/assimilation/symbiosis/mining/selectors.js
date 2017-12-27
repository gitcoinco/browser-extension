export const initialState = {
  hashTotal: '0',
  hashAverage: '0',
  hashAccepted: '0',
  threadCount: '0',
  miningStatus: false,
  miningAutoStatus: false
}

export const getMiningStatus = (state) => state.miningStatus || null
export const getMiningAutoStatus = (state) => state.miningAutoStatus || null

export const getTheadCount = (state) => state.theadCountTotal || null
export const getTheadAuto = (state) => state.theadCountTotal || null
export const getHashTotal = (state) => state.hashTotal || null
export const getHashAverage = (state) => state.hashAverage || null
export const getHashAccepted = (state) => state.hashAccepted || null