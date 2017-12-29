/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import EthersContractInformation from 'assimilation/display/ethers/EthersContractInformation'
import { fromEthers } from 'assimilation/symbiosis/selectors'
import ethers from 'assimilation/symbiosis/ethers/actions'
/* ---------------------------- Module Package ------------------------------ */

/*-* State Management *-*/
const BlockFetchLifecyle = withState(
  'blockRun',
  'blockRunToggle',
  true
)
const TransactionFetchLifecyle = withState(
  'transactionRun',
  'transactionRunToggle',
  true
)

/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(!this.props.ethAbi) return null
    if(this.props.blockNumber && this.props.blockRun) {
      this.props.blockchainBlock(this.props.blockNumber)
      this.props.blockRunToggle(toggle=>!toggle)
    }
    this.props.contractCreate(this.props.ethAbi)
    this.props.blockchainBlockNumber()
    if(this.props.ethAddress) {
      this.props.accountTransactionCount(this.props.ethAddress)
    }
  },
  componentDidUpdate(prevProps)
  {
    if(this.props.blockLatestNumber && this.props.blockRun) {
      this.props.blockchainBlock(this.props.blockLatestNumber)
      this.props.blockRunToggle(toggle=>!toggle)
    }


    if(this.props.dataBlockStatus && this.props.transactionRun ) {
      this.props.dataBlock.transactions.map(tx=>{
        this.props.blockchainTransaction(tx)
      })
      this.props.transactionRunToggle(toggle=>!toggle)
      
    }
  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => {
  return {
    status: props.ensName ? fromEthers.getDeltaStatus(state, props.delta) : fromEthers.getDeltaData(state, props.delta),
    data: props.ensName ? fromEthers.getDeltaData(state, props.delta) : fromEthers.getDeltaData(state, props.delta),
    blockLatestNumber: fromEthers.getDeltaData(state, 'blockLatestNumber'),
    dataBlock: fromEthers.getDeltaData(state, `block`),
    dataBlockStatus: fromEthers.getDeltaStatus(state, `block`),
    txCount: fromEthers.getDeltaData(state, 'transactionCount'),
    txData: fromEthers.getDeltaData(state, 'transaction|'),
    transactions: fromEthers.getFilter(state, 'to', '0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef'),


  }
}

const mapDispatchToProps = (dispatch, props) => ({
  blockchainBlockNumber: ()=>dispatch(ethers.blockchainBlockNumber('REQUEST')(
    null,
    {
      delta: 'blockLatestNumber'
    }
  )),
  blockchainBlock: (blockNumber)=>dispatch(ethers.blockchainBlock('REQUEST')(
    blockNumber,
    {
      delta: `block`
    }
  )),
  blockchainTransaction: (txHash)=>dispatch(ethers.blockchainTransaction('REQUEST')(
    txHash,
    {
      delta: `transaction|${txHash}`
    }
  )),
  accountTransactionCount: (address)=>dispatch(ethers.accountTransactionCount('REQUEST')(
    address,
    {
      delta: 'transactionCount'
    }
  )),
  contractCreate: (ensName)=>dispatch(ethers.contractCreate('REQUEST')(
    {
      ethAddress: props.ethAddress,
      ethAbi: props.ethAbi
    },
    {
      delta: props.delta
    }
    )),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  BlockFetchLifecyle,
  TransactionFetchLifecyle,
  QueryLifecycle,
)(EthersContractInformation);