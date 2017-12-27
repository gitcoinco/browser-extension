export const FORM_SUBMIT = "FORM_SUBMIT"

export const FORM_SET_CSRF_TOKEN = 'FORM_SET_CSRF_TOKEN'

export const setCsrfToken = (token) => ({
  type: FORM_SET_CSRF_TOKEN,
  token
})

export const formSubmit = (payload) => ({
  type: FORM_SUBMIT,
  payload
})
