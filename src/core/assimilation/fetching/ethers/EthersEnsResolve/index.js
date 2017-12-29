/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import EthersBlockchainBlockCard from 'assimilation/display/ethers/EthersAddress'
import { fromEthers } from 'assimilation/symbiosis/selectors'
import { ensResolveName } from 'assimilation/symbiosis/actions'
import ethers from 'assimilation/symbiosis/ethers/actions'
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(!this.props.ensName) return null 
    this.props.ensResolveName(this.props.ensName)
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
    data: props.ensName ? fromEthers.getDeltaData(state, `resolve|form`) : fromEthers.getDeltaData(state, `resolve|form`),
    status: props.ensName ? fromEthers.getDeltaStatus(state, `resolve|form`) : fromEthers.getDeltaData(state, `resolve|form`),
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ensResolveName: (ensName)=>dispatch(ethers.ensResolveName('REQUEST')(
    ensName,
    {
      delta: `resolve|form`
    }
    )),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(EthersBlockchainBlockCard);