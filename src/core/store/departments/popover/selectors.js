export const initialState = {
  status: false
}

export const getPopoverStatus = (state, delta) => state[delta] || false