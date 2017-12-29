import { SimpleSigner } from 'uport-connect'
const appName = 'Gitcoin'
const appSettings =  {
  clientId: '2oo7fQjxR44MnKa8n4XKDZBBa2Buty4qrug',
  network: 'rinkeby',
  signer: SimpleSigner('d12d8a5c643ab7facc0a1815807aba1bed174762a2061b6b098b7bffd7462236')
}
export default {
  appName,
  appSettings
}