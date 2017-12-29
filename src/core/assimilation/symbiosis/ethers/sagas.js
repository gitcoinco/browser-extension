/* ------------------------- External Dependencies -------------------------- */
// import idx from 'idx'
import { EthersBlockFlowIn } from 'logic/interface/DataScaffold'
import { put, takeEvery } from 'redux-saga/effects';
import {
  ETHERS_NEW_WALLET_REQUEST,
  ETHERS_WALLET_CREATE_RANDOM_REQUEST,
  ETHERS_WALLET_CREATE_FROM_ENCRYPTED_REQUEST,
  ETHERS_WALLET_CREATE_FROM_MENEMONIC_REQUEST,
  ETHERS_WALLET_CREATE_FROM_BRAIN_REQUEST,
  ETHERS_WALLET_ADDRESS_REQUEST,
  ETHERS_WALLET_PRIVATE_KEY_REQUEST,
  ETHERS_WALLET_GET_ADDRESS_REQUEST,
  ETHERS_WALLET_SIGN_REQUEST,
  ETHERS_WALLET_SIGN_MESSAGE_REQUEST,
  ETHERS_WALLET_ENCRYPT_REQUEST,
  ETHERS_WALLET_GET_BALNCE_REQUEST,
  ETHERS_WALLET_GET_TRANSACTION_COUNT_REQUEST,
  ETHERS_WALLET_ESTIMATE_GAS_REQUEST,
  ETHERS_WALLET_SEND_TRANSACTION_REQUEST,
  ETHERS_WALLET_SEND_REQUEST,
  ETHERS_WALLET_PARSE_TRANSACTION_REQUEST,
  ETHERS_WALLET_VERIFY_MESSAGE_REQUEST,
  ETHERS_NEW_PROVIDER_ETHERSCAN_REQUEST,
  ETHERS_NEW_PROVIDER_JSON_RPC_REQUEST,
  ETHERS_NEW_PROVIDER_INFURA_REQUEST,
  ETHERS_NEW_PROVIDER_FALLBACK_REQUEST,
  ETHERS_GET_PROVIDER_DEFAULT_REQUEST,
  ETHERS_PROVIDER_NAME_REQUEST,
  ETHERS_PROVIDER_CHAIN_ID_REQUEST,
  ETHERS_PROVIDER_PROVIDERS_REQUEST,
  ETHERS_PROVIDER_URL_REQUEST,
  ETHERS_PROVIDER_SEND_REQUEST,
  ETHERS_PROVIDER_API_TOKEN_REQUEST,
  ETHERS_PROVIDER_API_ACCESS_TOKEN_REQUEST,
  ETHERS_ACCOUNT_GET_BALANCE_REQUEST,
  ETHERS_ACCOUNT_GET_TRANSACTION_COUNT_REQUEST,
  ETHERS_ACCOUNT_LOOKUP_ADDRESS_REQUEST,
  ETHERS_ACCOUNT_RESOLVE_NAME_REQUEST,
  ETHERS_BLOCKCHAIN_GET_BLOCK_NUMBER_REQUEST,
  ETHERS_BLOCKCHAIN_GET_GAS_PRICE_REQUEST,
  ETHERS_BLOCKCHAIN_GET_BLOCK_REQUEST,
  ETHERS_BLOCKCHAIN_GET_TRANSACTION_REQUEST,
  ETHERS_BLOCKCHAIN_GET_TRANSACTION_RECEIPT_REQUEST,
  ETHERS_ENS_RESOLVE_NAME_REQUEST,
  ETHERS_ENS_LOOKUP_ADDRESS_REQUEST,
  ETHERS_CONTRACT_STATE_GET_CODE_REQUEST,
  ETHERS_CONTRACT_STATE_GET_STORAGE_AT_REQUEST,
  ETHERS_CONTRACT_STATE_GET_LOGS_REQUEST,
  ETHERS_EVENTS_SET_ON_REQUEST,
  ETHERS_EVENTS_SET_ONCE_REQUEST,
  ETHERS_EVENTS_REMOVE_LISTENER_REQUEST,
  ETHERS_EVENTS_REMOVE_ALL_LISTENERS_REQUEST,
  ETHERS_EVENTS_GET_LISTNER_COUNT_REQUEST,
  ETHERS_EVENT_RESET_BLOCK_REQUEST,
  ETHERS_NEW_CONTRACT_REQUEST,
  ETHERS_CONTRACT_GET_FUNCTIONS_REQUEST,
  ETHERS_CONTRACT_GET_ESTIMATE_REQUEST,
  ETHERS_CONTRACT_GET_EVENTS_REQUEST,
  ETHERS_CONTRACT_NEW_INSTANCE_REQUEST,
  ETHERS_CONTRACT_DEPLOY_BYTECODE_REQUEST,
} from './actions'
import {
  ethersNewWalletSuccess,
  ethersNewWalletFailure,
  ethersWalletCreateRandomSuccess,
  ethersWalletCreateRandomFailure,
  ethersWalletCreateFromEncryptedSuccess,
  ethersWalletCreateFromEncryptedFailure,
  ethersWalletCreateFromMenemonicSuccess,
  ethersWalletCreateFromMenemonicFailure,
  ethersWalletCreateFromBrainSuccess,
  ethersWalletCreateFromBrainFailure,
  ethersWalletAddressSuccess,
  ethersWalletAddressFailure,
  ethersWalletPrivateKeySuccess,
  ethersWalletPrivateKeyFailure,
  ethersWalletGetAddressSuccess,
  ethersWalletGetAddressFailure,
  ethersWalletSignSuccess,
  ethersWalletSignFailure,
  ethersWalletSignMessageSuccess,
  ethersWalletSignMessageFailure,
  ethersWalletEncryptSuccess,
  ethersWalletEncryptFailure,
  ethersWalletGetBalnceSuccess,
  ethersWalletGetBalnceFailure,
  ethersWalletGetTransactionCountSuccess,
  ethersWalletGetTransactionCountFailure,
  ethersWalletEstimateGasSuccess,
  ethersWalletEstimateGasFailure,
  ethersWalletSendTransactionSuccess,
  ethersWalletSendTransactionFailure,
  ethersWalletSendSuccess,
  ethersWalletSendFailure,
  ethersWalletParseTransactionSuccess,
  ethersWalletParseTransactionFailure,
  ethersWalletVerifyMessageSuccess,
  ethersWalletVerifyMessageFailure,
  ethersNewProviderEtherscanSuccess,
  ethersNewProviderEtherscanFailure,
  ethersNewProviderJsonRpcSuccess,
  ethersNewProviderJsonRpcFailure,
  ethersNewProviderInfuraSuccess,
  ethersNewProviderInfuraFailure,
  ethersNewProviderFallbackSuccess,
  ethersNewProviderFallbackFailure,
  ethersGetProviderDefaultSuccess,
  ethersGetProviderDefaultFailure,
  ethersProviderNameSuccess,
  ethersProviderNameFailure,
  ethersProviderChainIdSuccess,
  ethersProviderChainIdFailure,
  ethersProviderProvidersSuccess,
  ethersProviderProvidersFailure,
  ethersProviderUrlSuccess,
  ethersProviderUrlFailure,
  ethersProviderSendSuccess,
  ethersProviderSendFailure,
  ethersProviderApiTokenSuccess,
  ethersProviderApiTokenFailure,
  ethersProviderApiAccessTokenSuccess,
  ethersProviderApiAccessTokenFailure,
  ethersAccountGetBalanceSuccess,
  ethersAccountGetBalanceFailure,
  ethersAccountGetTransactionCountSuccess,
  ethersAccountGetTransactionCountFailure,
  ethersAccountLookupAddressSuccess,
  ethersAccountLookupAddressFailure,
  ethersAccountResolveNameSuccess,
  ethersAccountResolveNameFailure,
  ethersBlockchainGetBlockNumberSuccess,
  ethersBlockchainGetBlockNumberFailure,
  ethersBlockchainGetGasPriceSuccess,
  ethersBlockchainGetGasPriceFailure,
  ethersBlockchainGetBlockSuccess,
  ethersBlockchainGetBlockFailure,
  ethersBlockchainGetTransactionSuccess,
  ethersBlockchainGetTransactionFailure,
  ethersBlockchainGetTransactionReceiptSuccess,
  ethersBlockchainGetTransactionReceiptFailure,
  ethersEnsResolveNameSuccess,
  ethersEnsResolveNameFailure,
  ethersEnsLookupAddressSuccess,
  ethersEnsLookupAddressFailure,
  ethersContractStateGetCodeSuccess,
  ethersContractStateGetCodeFailure,
  ethersContractStateGetStorageAtSuccess,
  ethersContractStateGetStorageAtFailure,
  ethersContractStateGetLogsSuccess,
  ethersContractStateGetLogsFailure,
  ethersEventsSetOnSuccess,
  ethersEventsSetOnFailure,
  ethersEventsSetOnceSuccess,
  ethersEventsSetOnceFailure,
  ethersEventsRemoveListenerSuccess,
  ethersEventsRemoveListenerFailure,
  ethersEventsRemoveAllListenersSuccess,
  ethersEventsRemoveAllListenersFailure,
  ethersEventsGetListnerCountSuccess,
  ethersEventsGetListnerCountFailure,
  ethersEventResetBlockSuccess,
  ethersEventResetBlockFailure,
  ethersNewContractSuccess,
  ethersNewContractFailure,
  ethersContractGetFunctionsSuccess,
  ethersContractGetFunctionsFailure,
  ethersContractGetEstimateSuccess,
  ethersContractGetEstimateFailure,
  ethersContractGetEventsSuccess,
  ethersContractGetEventsFailure,
  ethersContractNewInstanceSuccess,
  ethersContractNewInstanceFailure,
  ethersContractDeployBytecodeSuccess,
  ethersContractDeployBytecodeFailure,
} from './actions'

import {
  notificationOpen
} from 'store/departments/actions'

import ethers from 'ethers'
const Wallet = ethers.Wallet;
const Contract = ethers.Contract;
const providers = ethers.providers;
const providerDefault = providers.getDefaultProvider();

const networkList = {
  'homstead': providers.networks.homestead,
  'ropsten': providers.networks.ropsten,
  'rinkeby': providers.networks.rinkeby,
  'kovan': providers.networks.kovan,
}

// Exceptions
function ProviderException(message) {
  this.name = 'ProviderException';
  this.message = message;
}

/*---*--- New Wallet ---*---*/
function* newWallet({payload, metadata}) {
  try {
    const { provider } = metadata
    const newWallet = new Wallet(payload, provider);
    yield put(ethersNewWalletSuccess({
      payload: newWallet,
      metadata
    }))
  } catch(e) {
    yield put(ethersNewWalletFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Create Random ---*---*/
function* walletCreateRandom({metadata}) {
  try {
    const { extraEntropy } = metadata
    const newWallet = Wallet.createRandom(extraEntropy);
    yield put(ethersWalletCreateRandomSuccess({
      payload: newWallet,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletCreateRandomFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Create From Encrypted ---*---*/
function* walletCreateFromEncrypted({payload, metadata}) {
  try {
    const { data, password } = payload
    const encryptedWallet = yield Wallet.fromEncryptedWallet(data, password)
    yield put(ethersWalletCreateFromEncryptedSuccess({
      payload: encryptedWallet,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletCreateFromEncryptedFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Create From Menemonic ---*---*/
function* walletCreateFromMenemonic({payload, metadata}) {
  try {
    const mnemonic = payload
    const mnemonicWallet = Wallet.fromMnemonic(mnemonic);
    yield put(ethersWalletCreateFromMenemonicSuccess({
      payload: mnemonicWallet,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletCreateFromMenemonicFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Create From Brain ---*---*/
function* walletCreateFromBrain({payload, metadata}) {
  try {
    const { username, password } = payload
    const brainWallet = yield Wallet.fromBrainWallet(username, password)
    yield put(ethersWalletCreateFromMenemonicSuccess({
      payload: newWallet,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletCreateFromBrainFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Address ---*---*/
function* walletAddress({payload, metadata}) {
  try {

    yield put(ethersWalletAddressSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletAddressFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Private Key ---*---*/
function* walletPrivateKey({payload, metadata}) {
  try {

    yield put(ethersWalletPrivateKeySuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletPrivateKeyFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Get Address ---*---*/
function* walletGetAddress({payload, metadata}) {
  try {

    yield put(ethersWalletGetAddressSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletGetAddressFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Sign ---*---*/
function* walletSign({payload, metadata}) {
  try {
    const { transaction, wallet} = payload
    const signedTransaction = wallet.sign(transaction)
    yield put(ethersWalletSignSuccess({
      payload: signedTransaction,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletSignFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Sign Message ---*---*/

function* walletSignMessage({payload, metadata}) {
  try {
    const { wallet, message } = payload
    const messageSigned = wallet.signMessage(message)
    yield put(ethersWalletSignMessageSuccess({
      payload: messageSigned,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletSignMessageFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Encrypt ---*---*/
function* walletEncrypt({payload, metadata}) {
  try {
    const { wallet, password } = payload
    const encryptedWallet = yield walletEncryptAsync(payload, metadata)
    yield put(ethersWalletSignMessageSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletSignMessageFailure({payload: e, metadata}))
  }
}

async function walletEncryptAsync(payload, metadata) {
  const { wallet, password } = payload
  function callback(percent) {
    console.log("Encrypting: " + parseInt(percent * 100) + "% complete");
  }
  return wallet.encrypt(password, callback);
}



/*---*--- Wallet Get Balnce ---*---*/
function* walletGetBalnce({payload, metadata}) {
  try {
    const { wallet, blockTag } = payload
    if(!wallet.provider) throw new ProviderException('Wallet Provider is undefined')
    const walletBalance = yield wallet.getBalance(blockTag);
    yield put(ethersWalletGetBalnceSuccess({
      payload: walletBalance,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletGetBalnceFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Get Transaction Count ---*---*/
function* walletGetTransactionCount({payload, metadata}) {
  try {
    const { wallet, blockTag } = payload
    if(!wallet.provider) throw new ProviderException('Wallet: Provider is undefined')
    const walletTransactionCount = yield wallet.getTransactionCount(blockTag);
    yield put(ethersWalletGetTransactionCountSuccess({
      payload: walletTransactionCount,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletGetTransactionCountFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Estimate Gas ---*---*/
function* walletEstimateGas({payload, metadata}) {
  try {
    const { wallet, transaction } = payload
    if(!wallet.provider) throw new ProviderException('Wallet: Provider is undefined')
    const gasEstimate = yield wallet.estimateGas(transaction);
    yield put(ethersWalletEstimateGasSuccess({
      payload: gasEstimate,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletEstimateGasFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Send Transaction ---*---*/
function* walletSendTransaction({payload, metadata}) {
  try {
    const { wallet, transaction } = payload
    if(!wallet.provider) throw new ProviderException('Wallet: Provider is undefined')
    const transactionHash = yield wallet.sendTransaction(transaction);
    yield put(ethersWalletSendTransactionSuccess({
      payload: transactionHash,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletSendTransactionFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Send ---*---*/
function* walletSend({payload, metadata}) {
  try {
    const { wallet, addressOrName, amountWei, options } = payload
    if(!wallet.provider) throw new ProviderException('Wallet: Provider is undefined')
    const transactionHash = yield wallet.send(addressOrName, amountWei, options)
    yield put(ethersWalletCreateFromMenemonicSuccess({
      payload: transactionHash,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletSendFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Parse Transaction ---*---*/
function* walletParseTransaction({payload, metadata}) {
  try {
    const { wallet, transaction } = payload
    const signedTransaction = wallet.sign(transaction);
    const transactionParsed = Wallet.parseTransaction(signedTransaction);
    yield put(ethersWalletParseTransactionSuccess({
      payload: transactionParsed,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletParseTransactionFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Verify Message ---*---*/
function* walletVerifyMessage({payload, metadata}) {
  try {
    const { message, signature } = payload
    const address = Wallet.verifyMessage(message, signature);
    yield put(ethersWalletVerifyMessageSuccess({
      payload: address,
      metadata
    }))
  } catch(e) {
    yield put(ethersWalletVerifyMessageFailure({payload: e, metadata}))
  }
}


/*---*--- New Provider Etherscan ---*---*/
function* newProviderEtherscan({payload, metadata}) {
  try {
    const { network } = payload
    const networkSelection = networkList[network]
    if(!networkSelection) throw new Error('Provider: invalid network selection')
    const provider = new providers.EtherscanProvider(networkSelection);
    window.ethers = {
      ...window.ethers,
      providerInfura: provider
    }
    yield put(ethersNewProviderEtherscanSuccess({
      payload: provider, 
      metadata
    }))
  } catch(e) {
    yield put(ethersNewProviderEtherscanFailure({payload: e, metadata}))
  }
}


/*---*--- New Provider Json Rpc ---*---*/
function* newProviderJsonRpc({payload, metadata}) {
  try {
    const { url, network } = payload
    const networkSelection = networkList[network]
    if(!networkSelection) throw new Error('Provider: invalid network selection')
    const provider = new providers.JsonRpcProvider(url, networkSelection);
    window.ethers = {
      ...window.ethers,
      providerInfura: provider
    }
    yield put(ethersNewProviderJsonRpcSuccess({
      payload: provider, 
      metadata
    }))
  } catch(e) {
    yield put(ethersNewProviderJsonRpcFailure({payload: e, metadata}))
  }
}


/*---*--- New Provider Infura ---*---*/
function* newProviderInfura({payload, metadata}) {
  try {
    const { network } = payload
    const publishableKey = process.env.REACT_APP_INFURA // Waiting to fix bug, before adding API key option (https://github.com/ethers-io/ethers.js/issues/64)
    const networkSelection = networkList[network]
    if(!networkSelection) throw new Error('Provider: invalid network selection')
    const provider = new providers.InfuraProvider(networkSelection);
    window.ethers = {
      ...window.ethers,
      providerInfura: provider
    }
    yield put(ethersNewProviderInfuraSuccess({
      payload: provider, 
      metadata
    }))
  } catch(e) {
    console.log(e)
    yield put(ethersNewProviderInfuraFailure({payload: e, metadata}))
  }
}


/*---*--- New Provider Fallback ---*---*/
function* newProviderFallback({payload, metadata}) {
  try {
    const { fallbackProviders } = payload 
    const fallbackProvider = new providers.FallbackProvider(fallbackProviders);
    yield put(ethersNewProviderFallbackSuccess({
      payload: fallbackProvider, 
      metadata
    }))
  } catch(e) {
    yield put(ethersNewProviderFallbackFailure({payload: e, metadata}))
  }
}


/*---*--- Get Provider Default ---*---*/
function* getProviderDefault({payload, metadata}) {
  try {

    yield put(ethersGetProviderDefaultSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersGetProviderDefaultFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Name ---*---*/
function* providerName({payload, metadata}) {
  try {

    yield put(ethersProviderNameSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderNameFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Chain Id ---*---*/
function* providerChainId({payload, metadata}) {
  try {

    yield put(ethersProviderChainIdSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderChainIdFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Providers ---*---*/
function* providerProviders({payload, metadata}) {
  try {

    yield put(ethersProviderProvidersSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderProvidersFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Url ---*---*/
function* providerUrl({payload, metadata}) {
  try {

    yield put(ethersProviderUrlSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderUrlFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Send ---*---*/
function* providerSend({payload, metadata}) {
  try {

    yield put(ethersProviderSendSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderSendFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Api Token ---*---*/
function* providerApiToken({payload, metadata}) {
  try {

    yield put(ethersProviderApiTokenSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderApiTokenFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Api Access Token ---*---*/
function* providerApiAccessToken({payload, metadata}) {
  try {

    yield put(ethersProviderApiAccessTokenSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderApiAccessTokenFailure({payload: e, metadata}))
  }
}


/*---*--- Account Get Balance ---*---*/
function* accountGetBalance({payload, metadata}) {
  try {
    const { address } = payload
    const balance = yield providerDefault.getBalance(address)
    const balanceFormatted = ethers.utils.formatEther(balance);
    yield put(ethersAccountGetBalanceSuccess({
      payload: {
        balance,
        balanceFormatted
      }, 
      metadata
    }))
  } catch(e) {
    yield put(ethersAccountGetBalanceFailure({payload: e, metadata}))
  }
}


/*---*--- Account Get Transaction Cost ---*---*/
function* accountGetTransactionCount({payload, metadata}) {
  try {
    const { address } = payload
    const transactionCount = yield providerDefault.getTransactionCount(address)
    yield put(ethersAccountGetTransactionCountSuccess({
      payload: transactionCount,
      metadata
    }))
  } catch(e) {
    yield put(ethersAccountGetTransactionCountFailure({payload: e, metadata}))
  }
}


/*---*--- Account Lookup Address ---*---*/
function* accountLookupAddress({payload, metadata}) {
  try {

    yield put(ethersAccountLookupAddressSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersAccountLookupAddressFailure({payload: e, metadata}))
  }
}


/*---*--- Account Resolve Name ---*---*/
function* accountResolveName({payload, metadata}) {
  try {

    yield put(ethersAccountResolveNameSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersAccountResolveNameFailure({payload: e, metadata}))
  }
}


/*---*--- Blockchain Get Block Number ---*---*/
function* blockchainGetBlockNumber({payload, metadata}) {
  try {
    const provider = providers.getDefaultProvider();
    const blockNumber = yield provider.getBlockNumber()

    yield put(ethersBlockchainGetBlockNumberSuccess({
      payload: blockNumber, 
      metadata
    }))
  } catch(e) {
    yield put(ethersBlockchainGetBlockNumberFailure({payload: e, metadata}))
  }
}


/*---*--- Blockchain Get Gas Price ---*---*/
function* blockchainGetGasPrice({payload, metadata}) {
  try {
    const provider = providers.getDefaultProvider();
    const gasPrice = yield provider.getGasPrice()
    console.log(gasPrice.toString())
    yield put(ethersBlockchainGetGasPriceSuccess({
      payload: gasPrice.toString(), 
      metadata
    }))
  } catch(e) {
    yield put(ethersBlockchainGetGasPriceFailure({payload: e, metadata}))
  }
}


/*---*--- Blockchain Get Block ---*---*/
function* blockchainGetBlock({payload, metadata}) {
  try {
    const { block } = payload
    const provider = providers.getDefaultProvider();
    const blockInfo = yield provider.getBlock(block)
    yield put(ethersBlockchainGetBlockSuccess({
      payload: EthersBlockFlowIn(blockInfo), 
      metadata
    }))
  } catch(e) {
    yield put(ethersBlockchainGetBlockFailure({payload: e, metadata}))
  }
}


/*---*--- Blockchain Get Transaction ---*---*/
function* blockchainGetTransaction({payload, metadata}) {
  try {
    const { transactionHash } = payload
    const provider = providers.getDefaultProvider();
    const transaction = yield provider.getTransactions(transactionHash)
    yield put(ethersBlockchainGetTransactionSuccess({
      payload: transaction, 
      metadata
    }))
  } catch(e) {
    yield put(ethersBlockchainGetTransactionFailure({payload: e, metadata}))
  }
}


/*---*--- Blockchain Get Transaction Receipt ---*---*/
function* blockchainGetTransactionReceipt({payload, metadata}) {
  try {

    yield put(ethersBlockchainGetTransactionReceiptSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersBlockchainGetTransactionReceiptFailure({payload: e, metadata}))
  }
}


/*---*--- Ens Resolve Name ---*---*/
function* ensResolveName({payload, metadata}) {
  try {
    const { ethName } = payload
    const address = yield providerDefault.resolveName(ethName)
    yield put(ethersEnsResolveNameSuccess({
      payload: address,
      metadata
    }))
  } catch(e) {
    yield put(ethersEnsResolveNameFailure({payload: e, metadata}))
  }
}


/*---*--- Ens Lookup Address ---*---*/
function* ensLookupAddress({payload, metadata}) {
  try {
    const { address } = payload
    const name = yield providerDefault.lookupAddress(address)
    yield put(ethersEnsResolveNameSuccess({
      payload: name,
      metadata
    }))
    yield put(ethersEnsLookupAddressSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEnsLookupAddressFailure({payload: e, metadata}))
  }
}



/*---*--- Contract State Get Code ---*---*/
function* contractStateGetCode({payload, metadata}) {
  try {
    const { addressOrName } = payload
    const code = yield providerDefault.getCode(addressOrName)
    yield put(ethersContractStateGetCodeSuccess({
      payload: code,
      metadata
    }))
  } catch(e) {
    yield put(ethersContractStateGetCodeFailure({payload: e, metadata}))
  }
}


/*---*--- Contract State Get Storage At ---*---*/
function* contractStateGetStorageAt({payload, metadata}) {
  try {
    const { addressOrName, position } = payload
    const code = yield providerDefault.getStorageAt(addressOrName, position)
    yield put(ethersContractStateGetStorageAtSuccess({
      payload: code,
      metadata
    }))
  } catch(e) {
    yield put(ethersContractStateGetStorageAtFailure({payload: e, metadata}))
  }
}


/*---*--- Contract State Get Logs ---*---*/
function* contractStateGetLogs({payload, metadata}) {
  try {
    const { filter } = payload
    const logs = yield providerDefault.getLogs(filter)
    yield put(ethersContractStateGetLogsSuccess({
      payload: logs,
      metadata
    }))
  } catch(e) {
    yield put(ethersContractStateGetLogsFailure({payload: e, metadata}))
  }
}


/*---*--- Events Set On ---*---*/
function* eventsSetOn({payload, metadata}) {
  try {

    yield put(ethersEventsSetOnSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventsSetOnFailure({payload: e, metadata}))
  }
}


/*---*--- Events Set Once ---*---*/
function* eventsSetOnce({payload, metadata}) {
  try {

    yield put(ethersEventsSetOnceSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventsSetOnceFailure({payload: e, metadata}))
  }
}


/*---*--- Events Remove Listener ---*---*/
function* eventsRemoveListener({payload, metadata}) {
  try {

    yield put(ethersEventsRemoveListenerSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventsRemoveListenerFailure({payload: e, metadata}))
  }
}


/*---*--- Events Remove All Listeners ---*---*/
function* eventsRemoveAllListeners({payload, metadata}) {
  try {

    yield put(ethersEventsRemoveAllListenersSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventsRemoveAllListenersFailure({payload: e, metadata}))
  }
}


/*---*--- Events Get Listner Count ---*---*/
function* eventsGetListnerCount({payload, metadata}) {
  try {

    yield put(ethersEventsGetListnerCountSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventsGetListnerCountFailure({payload: e, metadata}))
  }
}


/*---*--- Event Reset Block ---*---*/
function* eventResetBlock({payload, metadata}) {
  try {

    yield put(ethersEventResetBlockSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventResetBlockFailure({payload: e, metadata}))
  }
}


/*---*--- New Contract ---*---*/
function* newContract({payload, metadata}) {
  try {

    yield put(ethersNewContractSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersNewContractFailure({payload: e, metadata}))
  }
}


/*---*--- Contract Get Functions ---*---*/
function* contractGetFunctions({payload, metadata}) {
  try {

    yield put(ethersContractGetFunctionsSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractGetFunctionsFailure({payload: e, metadata}))
  }
}


/*---*--- Contract Get Estimate ---*---*/
function* contractGetEstimate({payload, metadata}) {
  try {

    yield put(ethersContractGetEstimateSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractGetEstimateFailure({payload: e, metadata}))
  }
}


/*---*--- Contract Get Events ---*---*/
function* contractGetEvents({payload, metadata}) {
  try {

    yield put(ethersContractGetEventsSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractGetEventsFailure({payload: e, metadata}))
  }
}


/*---*--- Contract New Instance ---*---*/
function* contractNewInstance({payload, metadata}) {
  try {

    yield put(ethersContractNewInstanceSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractNewInstanceFailure({payload: e, metadata}))
  }
}


/*---*--- Contract Deploy Bytecode ---*---*/
function* contractDeployBytecode({payload, metadata}) {
  try {

    yield put(ethersContractDeployBytecodeSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractDeployBytecodeFailure({payload: e, metadata}))
  }
}

export default function* rxdbRootSaga() {
  yield [
   takeEvery(ETHERS_NEW_WALLET_REQUEST, newWallet),
   takeEvery(ETHERS_WALLET_CREATE_RANDOM_REQUEST, walletCreateRandom),
   takeEvery(ETHERS_WALLET_CREATE_FROM_ENCRYPTED_REQUEST, walletCreateFromEncrypted),
   takeEvery(ETHERS_WALLET_CREATE_FROM_MENEMONIC_REQUEST, walletCreateFromMenemonic),
   takeEvery(ETHERS_WALLET_CREATE_FROM_BRAIN_REQUEST, walletCreateFromBrain),
   takeEvery(ETHERS_WALLET_ADDRESS_REQUEST, walletAddress),
   takeEvery(ETHERS_WALLET_PRIVATE_KEY_REQUEST, walletPrivateKey),
   takeEvery(ETHERS_WALLET_GET_ADDRESS_REQUEST, walletGetAddress),
   takeEvery(ETHERS_WALLET_SIGN_REQUEST, walletSign),
   takeEvery(ETHERS_WALLET_SIGN_MESSAGE_REQUEST, walletSignMessage),
   takeEvery(ETHERS_WALLET_ENCRYPT_REQUEST, walletEncrypt),
   takeEvery(ETHERS_WALLET_GET_BALNCE_REQUEST, walletGetBalnce),
   takeEvery(ETHERS_WALLET_GET_TRANSACTION_COUNT_REQUEST, walletGetTransactionCount),
   takeEvery(ETHERS_WALLET_ESTIMATE_GAS_REQUEST, walletEstimateGas),
   takeEvery(ETHERS_WALLET_SEND_TRANSACTION_REQUEST, walletSendTransaction),
   takeEvery(ETHERS_WALLET_SEND_REQUEST, walletSend),
   takeEvery(ETHERS_WALLET_PARSE_TRANSACTION_REQUEST, walletParseTransaction),
   takeEvery(ETHERS_WALLET_VERIFY_MESSAGE_REQUEST, walletVerifyMessage),
   takeEvery(ETHERS_NEW_PROVIDER_ETHERSCAN_REQUEST, newProviderEtherscan),
   takeEvery(ETHERS_NEW_PROVIDER_JSON_RPC_REQUEST, newProviderJsonRpc),
   takeEvery(ETHERS_NEW_PROVIDER_INFURA_REQUEST, newProviderInfura),
   takeEvery(ETHERS_NEW_PROVIDER_FALLBACK_REQUEST, newProviderFallback),
   takeEvery(ETHERS_GET_PROVIDER_DEFAULT_REQUEST, getProviderDefault),
   takeEvery(ETHERS_PROVIDER_NAME_REQUEST, providerName),
   takeEvery(ETHERS_PROVIDER_CHAIN_ID_REQUEST, providerChainId),
   takeEvery(ETHERS_PROVIDER_PROVIDERS_REQUEST, providerProviders),
   takeEvery(ETHERS_PROVIDER_URL_REQUEST, providerUrl),
   takeEvery(ETHERS_PROVIDER_SEND_REQUEST, providerSend),
   takeEvery(ETHERS_PROVIDER_API_TOKEN_REQUEST, providerApiToken),
   takeEvery(ETHERS_PROVIDER_API_ACCESS_TOKEN_REQUEST, providerApiAccessToken),
   takeEvery(ETHERS_ACCOUNT_GET_BALANCE_REQUEST, accountGetBalance),
   takeEvery(ETHERS_ACCOUNT_GET_TRANSACTION_COUNT_REQUEST, accountGetTransactionCount),
   takeEvery(ETHERS_ACCOUNT_LOOKUP_ADDRESS_REQUEST, accountLookupAddress),
   takeEvery(ETHERS_ACCOUNT_RESOLVE_NAME_REQUEST, accountResolveName),
   takeEvery(ETHERS_BLOCKCHAIN_GET_BLOCK_NUMBER_REQUEST, blockchainGetBlockNumber),
   takeEvery(ETHERS_BLOCKCHAIN_GET_GAS_PRICE_REQUEST, blockchainGetGasPrice),
   takeEvery(ETHERS_BLOCKCHAIN_GET_BLOCK_REQUEST, blockchainGetBlock),
   takeEvery(ETHERS_BLOCKCHAIN_GET_TRANSACTION_REQUEST, blockchainGetTransaction),
   takeEvery(ETHERS_BLOCKCHAIN_GET_TRANSACTION_RECEIPT_REQUEST, blockchainGetTransactionReceipt),
   takeEvery(ETHERS_ENS_RESOLVE_NAME_REQUEST, ensResolveName),
   takeEvery(ETHERS_ENS_LOOKUP_ADDRESS_REQUEST, ensLookupAddress),
   takeEvery(ETHERS_CONTRACT_STATE_GET_CODE_REQUEST, contractStateGetCode),
   takeEvery(ETHERS_CONTRACT_STATE_GET_STORAGE_AT_REQUEST, contractStateGetStorageAt),
   takeEvery(ETHERS_CONTRACT_STATE_GET_LOGS_REQUEST, contractStateGetLogs),
   takeEvery(ETHERS_EVENTS_SET_ON_REQUEST, eventsSetOn),
   takeEvery(ETHERS_EVENTS_SET_ONCE_REQUEST, eventsSetOnce),
   takeEvery(ETHERS_EVENTS_REMOVE_LISTENER_REQUEST, eventsRemoveListener),
   takeEvery(ETHERS_EVENTS_REMOVE_ALL_LISTENERS_REQUEST, eventsRemoveAllListeners),
   takeEvery(ETHERS_EVENTS_GET_LISTNER_COUNT_REQUEST, eventsGetListnerCount),
   takeEvery(ETHERS_EVENT_RESET_BLOCK_REQUEST, eventResetBlock),
   takeEvery(ETHERS_NEW_CONTRACT_REQUEST, newContract),
   takeEvery(ETHERS_CONTRACT_GET_FUNCTIONS_REQUEST, contractGetFunctions),
   takeEvery(ETHERS_CONTRACT_GET_ESTIMATE_REQUEST, contractGetEstimate),
   takeEvery(ETHERS_CONTRACT_GET_EVENTS_REQUEST, contractGetEvents),
   takeEvery(ETHERS_CONTRACT_NEW_INSTANCE_REQUEST, contractNewInstance),
   takeEvery(ETHERS_CONTRACT_DEPLOY_BYTECODE_REQUEST, contractDeployBytecode),
  ];
}