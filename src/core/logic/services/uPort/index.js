import { Connect } from 'uport-connect'
import { appName, appSettings } from 'settings/uPort';
const uPortConnection = new Connect(
  appName, // uPort Application Name
  appSettings, // uPort Applocation Settings
)
export const uPortWeb3 = uPortConnection.getWeb3()
export default uPortConnection