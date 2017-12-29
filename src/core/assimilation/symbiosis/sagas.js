import ethers from 'assimilation/symbiosis/ethers/sagas'
import uPort from 'assimilation/symbiosis/uport/sagas'

export default [
  ethers(),
  uPort(),
]