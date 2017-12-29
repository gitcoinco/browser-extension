/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import EthersContractInformation from 'assimilation/display/ethers/EthersContractInformation'
import { fromEthers } from 'assimilation/symbiosis/selectors'
import ethers from 'assimilation/symbiosis/ethers/actions'
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(!this.props.ethAbi) return null 
    this.props.contractCreate(this.props.ethAbi)
    this.props.blockchainBlockNumber()
  },
  componentDidUpdate(prevProps)
  {
    

  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    status: props.ensName ? fromEthers.getDeltaStatus(state, props.delta) : fromEthers.getDeltaData(state, props.delta),
    data: props.ensName ? fromEthers.getDeltaData(state, props.delta) : fromEthers.getDeltaData(state, props.delta),
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  blockchainBlockNumber: ()=>dispatch(ethers.blockchainBlockNumber('REQUEST')(
    null,
    {
      delta: 'blockLatest'
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
  QueryLifecycle,
)(EthersContractInformation);