/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import EthersBlockchainBlockCard from 'assimilation/display/ethers/EthersBlockchainBlockCard'
import { fromEthers } from 'assimilation/symbiosis/selectors'
import { ethersBlockchainGetBlockRequest } from 'assimilation/symbiosis/actions'
import ethers from 'assimilation/symbiosis/ethers/actions'
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(!this.props.blockNumber) return null 
    this.props.ethersBlockchainBlockRequest({
      payload: {
        block: this.props.blockNumber,
      },
      metadata: {
        delta: `BlockchainBlockGet|${this.props.blockNumber}`
      }
    })
  },
  componentDidUpdate(prevProps)
  {
    if (this.props.blockNumber != prevProps.blockNumber) {
      if(!this.props.blockNumber) return null 
      this.props.ethersBlockchainBlockRequest(this.props.blockNumber)
    }
  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: props.blockNumber ? fromEthers.getDeltaData(state, `BlockchainBlockGet|${props.blockNumber}`) : fromEthers.getDeltaData(state, `BlockchainBlockGet|${props.delta}`),
    blockNumber: props.blockNumber ? props.blockNumber : fromEthers.getDeltaData(state, 'BlockchainBlockNumber')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersBlockchainBlockRequest: (blockNumber)=>dispatch(ethers.blockchainBlock('REQUEST')(
    blockNumber,
    {
      delta: `BlockchainBlockGet|${props.delta}`
    }
    )),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(EthersBlockchainBlockCard);