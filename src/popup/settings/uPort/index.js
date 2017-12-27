import { SimpleSigner } from 'uport-connect'
const appName = 'TimeChain'
const appSettings =  {
  clientId: '2ouzuudfWyvw489opwxACbsiZ18F988t1iz',
  network: 'rinkeby',
  signer: SimpleSigner('3079982d825e5ef0ade2384884a37029ce6d0dfade8c9a672b05ff0c3c91e5a9')
}
export default {
  appName,
  appSettings
}