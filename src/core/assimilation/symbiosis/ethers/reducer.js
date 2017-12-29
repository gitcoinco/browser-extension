import {
ETHERS_NEW_WALLET_REQUEST,
ETHERS_NEW_WALLET_SUCCESS,
ETHERS_NEW_WALLET_FAILURE,
ETHERS_WALLET_CREATE_RANDOM_REQUEST,
ETHERS_WALLET_CREATE_RANDOM_SUCCESS,
ETHERS_WALLET_CREATE_RANDOM_FAILURE,
ETHERS_WALLET_CREATE_FROM_ENCRYPTED_REQUEST,
ETHERS_WALLET_CREATE_FROM_ENCRYPTED_SUCCESS,
ETHERS_WALLET_CREATE_FROM_ENCRYPTED_FAILURE,
ETHERS_WALLET_CREATE_FROM_MENEMONIC_REQUEST,
ETHERS_WALLET_CREATE_FROM_MENEMONIC_SUCCESS,
ETHERS_WALLET_CREATE_FROM_MENEMONIC_FAILURE,
ETHERS_WALLET_CREATE_FROM_BRAIN_REQUEST,
ETHERS_WALLET_CREATE_FROM_BRAIN_SUCCESS,
ETHERS_WALLET_CREATE_FROM_BRAIN_FAILURE,
ETHERS_WALLET_ADDRESS_REQUEST,
ETHERS_WALLET_ADDRESS_SUCCESS,
ETHERS_WALLET_ADDRESS_FAILURE,
ETHERS_WALLET_PRIVATE_KEY_REQUEST,
ETHERS_WALLET_PRIVATE_KEY_SUCCESS,
ETHERS_WALLET_PRIVATE_KEY_FAILURE,
ETHERS_WALLET_GET_ADDRESS_REQUEST,
ETHERS_WALLET_GET_ADDRESS_SUCCESS,
ETHERS_WALLET_GET_ADDRESS_FAILURE,
ETHERS_WALLET_SIGN_REQUEST,
ETHERS_WALLET_SIGN_SUCCESS,
ETHERS_WALLET_SIGN_FAILURE,
ETHERS_WALLET_SIGN_MESSAGE_REQUEST,
ETHERS_WALLET_SIGN_MESSAGE_SUCCESS,
ETHERS_WALLET_SIGN_MESSAGE_FAILURE,
ETHERS_WALLET_ENCRYPT_REQUEST,
ETHERS_WALLET_ENCRYPT_SUCCESS,
ETHERS_WALLET_ENCRYPT_FAILURE,
ETHERS_WALLET_GET_BALNCE_REQUEST,
ETHERS_WALLET_GET_BALNCE_SUCCESS,
ETHERS_WALLET_GET_BALNCE_FAILURE,
ETHERS_WALLET_GET_TRANSACTION_COUNT_REQUEST,
ETHERS_WALLET_GET_TRANSACTION_COUNT_SUCCESS,
ETHERS_WALLET_GET_TRANSACTION_COUNT_FAILURE,
ETHERS_WALLET_ESTIMATE_GAS_REQUEST,
ETHERS_WALLET_ESTIMATE_GAS_SUCCESS,
ETHERS_WALLET_ESTIMATE_GAS_FAILURE,
ETHERS_WALLET_SEND_TRANSACTION_REQUEST,
ETHERS_WALLET_SEND_TRANSACTION_SUCCESS,
ETHERS_WALLET_SEND_TRANSACTION_FAILURE,
ETHERS_WALLET_SEND_REQUEST,
ETHERS_WALLET_SEND_SUCCESS,
ETHERS_WALLET_SEND_FAILURE,
ETHERS_WALLET_PARSE_TRANSACTION_REQUEST,
ETHERS_WALLET_PARSE_TRANSACTION_SUCCESS,
ETHERS_WALLET_PARSE_TRANSACTION_FAILURE,
ETHERS_WALLET_VERIFY_MESSAGE_REQUEST,
ETHERS_WALLET_VERIFY_MESSAGE_SUCCESS,
ETHERS_WALLET_VERIFY_MESSAGE_FAILURE,
ETHERS_NEW_PROVIDER_ETHERSCAN_REQUEST,
ETHERS_NEW_PROVIDER_ETHERSCAN_SUCCESS,
ETHERS_NEW_PROVIDER_ETHERSCAN_FAILURE,
ETHERS_NEW_PROVIDER_JSON_RPC_REQUEST,
ETHERS_NEW_PROVIDER_JSON_RPC_SUCCESS,
ETHERS_NEW_PROVIDER_JSON_RPC_FAILURE,
ETHERS_NEW_PROVIDER_INFURA_REQUEST,
ETHERS_NEW_PROVIDER_INFURA_SUCCESS,
ETHERS_NEW_PROVIDER_INFURA_FAILURE,
ETHERS_NEW_PROVIDER_FALLBACK_REQUEST,
ETHERS_NEW_PROVIDER_FALLBACK_SUCCESS,
ETHERS_NEW_PROVIDER_FALLBACK_FAILURE,
ETHERS_GET_PROVIDER_DEFAULT_REQUEST,
ETHERS_GET_PROVIDER_DEFAULT_SUCCESS,
ETHERS_GET_PROVIDER_DEFAULT_FAILURE,
ETHERS_PROVIDER_NAME_REQUEST,
ETHERS_PROVIDER_NAME_SUCCESS,
ETHERS_PROVIDER_NAME_FAILURE,
ETHERS_PROVIDER_CHAIN_ID_REQUEST,
ETHERS_PROVIDER_CHAIN_ID_SUCCESS,
ETHERS_PROVIDER_CHAIN_ID_FAILURE,
ETHERS_PROVIDER_PROVIDERS_REQUEST,
ETHERS_PROVIDER_PROVIDERS_SUCCESS,
ETHERS_PROVIDER_PROVIDERS_FAILURE,
ETHERS_PROVIDER_URL_REQUEST,
ETHERS_PROVIDER_URL_SUCCESS,
ETHERS_PROVIDER_URL_FAILURE,
ETHERS_PROVIDER_SEND_REQUEST,
ETHERS_PROVIDER_SEND_SUCCESS,
ETHERS_PROVIDER_SEND_FAILURE,
ETHERS_PROVIDER_API_TOKEN_REQUEST,
ETHERS_PROVIDER_API_TOKEN_SUCCESS,
ETHERS_PROVIDER_API_TOKEN_FAILURE,
ETHERS_PROVIDER_API_ACCESS_TOKEN_REQUEST,
ETHERS_PROVIDER_API_ACCESS_TOKEN_SUCCESS,
ETHERS_PROVIDER_API_ACCESS_TOKEN_FAILURE,
ETHERS_ACCOUNT_GET_BALANCE_REQUEST,
ETHERS_ACCOUNT_GET_BALANCE_SUCCESS,
ETHERS_ACCOUNT_GET_BALANCE_FAILURE,
ETHERS_ACCOUNT_GET_TRANSACTION_COUNT_REQUEST,
ETHERS_ACCOUNT_GET_TRANSACTION_COUNT_SUCCESS,
ETHERS_ACCOUNT_GET_TRANSACTION_COUNT_FAILURE,
ETHERS_ACCOUNT_LOOKUP_ADDRESS_REQUEST,
ETHERS_ACCOUNT_LOOKUP_ADDRESS_SUCCESS,
ETHERS_ACCOUNT_LOOKUP_ADDRESS_FAILURE,
ETHERS_ACCOUNT_RESOLVE_NAME_REQUEST,
ETHERS_ACCOUNT_RESOLVE_NAME_SUCCESS,
ETHERS_ACCOUNT_RESOLVE_NAME_FAILURE,
ETHERS_BLOCKCHAIN_GET_BLOCK_NUMBER_REQUEST,
ETHERS_BLOCKCHAIN_GET_BLOCK_NUMBER_SUCCESS,
ETHERS_BLOCKCHAIN_GET_BLOCK_NUMBER_FAILURE,
ETHERS_BLOCKCHAIN_GET_GAS_PRICE_REQUEST,
ETHERS_BLOCKCHAIN_GET_GAS_PRICE_SUCCESS,
ETHERS_BLOCKCHAIN_GET_GAS_PRICE_FAILURE,
ETHERS_BLOCKCHAIN_GET_BLOCK_REQUEST,
ETHERS_BLOCKCHAIN_GET_BLOCK_SUCCESS,
ETHERS_BLOCKCHAIN_GET_BLOCK_FAILURE,
ETHERS_BLOCKCHAIN_GET_TRANSACTION_REQUEST,
ETHERS_BLOCKCHAIN_GET_TRANSACTION_SUCCESS,
ETHERS_BLOCKCHAIN_GET_TRANSACTION_FAILURE,
ETHERS_BLOCKCHAIN_GET_TRANSACTION_RECEIPT_REQUEST,
ETHERS_BLOCKCHAIN_GET_TRANSACTION_RECEIPT_SUCCESS,
ETHERS_BLOCKCHAIN_GET_TRANSACTION_RECEIPT_FAILURE,
ETHERS_ENS_RESOLVE_NAME_REQUEST,
ETHERS_ENS_RESOLVE_NAME_SUCCESS,
ETHERS_ENS_RESOLVE_NAME_FAILURE,
ETHERS_ENS_LOOKUP_ADDRESS_REQUEST,
ETHERS_ENS_LOOKUP_ADDRESS_SUCCESS,
ETHERS_ENS_LOOKUP_ADDRESS_FAILURE,
ETHERS_CONTRACT_STATE_GET_CODE_REQUEST,
ETHERS_CONTRACT_STATE_GET_CODE_SUCCESS,
ETHERS_CONTRACT_STATE_GET_CODE_FAILURE,
ETHERS_CONTRACT_STATE_GET_STORAGE_AT_REQUEST,
ETHERS_CONTRACT_STATE_GET_STORAGE_AT_SUCCESS,
ETHERS_CONTRACT_STATE_GET_STORAGE_AT_FAILURE,
ETHERS_CONTRACT_STATE_GET_LOGS_REQUEST,
ETHERS_CONTRACT_STATE_GET_LOGS_SUCCESS,
ETHERS_CONTRACT_STATE_GET_LOGS_FAILURE,
ETHERS_EVENTS_SET_ON_REQUEST,
ETHERS_EVENTS_SET_ON_SUCCESS,
ETHERS_EVENTS_SET_ON_FAILURE,
ETHERS_EVENTS_SET_ONCE_REQUEST,
ETHERS_EVENTS_SET_ONCE_SUCCESS,
ETHERS_EVENTS_SET_ONCE_FAILURE,
ETHERS_EVENTS_REMOVE_LISTENER_REQUEST,
ETHERS_EVENTS_REMOVE_LISTENER_SUCCESS,
ETHERS_EVENTS_REMOVE_LISTENER_FAILURE,
ETHERS_EVENTS_REMOVE_ALL_LISTENERS_REQUEST,
ETHERS_EVENTS_REMOVE_ALL_LISTENERS_SUCCESS,
ETHERS_EVENTS_REMOVE_ALL_LISTENERS_FAILURE,
ETHERS_EVENTS_GET_LISTNER_COUNT_REQUEST,
ETHERS_EVENTS_GET_LISTNER_COUNT_SUCCESS,
ETHERS_EVENTS_GET_LISTNER_COUNT_FAILURE,
ETHERS_EVENT_RESET_BLOCK_REQUEST,
ETHERS_EVENT_RESET_BLOCK_SUCCESS,
ETHERS_EVENT_RESET_BLOCK_FAILURE,
ETHERS_NEW_CONTRACT_REQUEST,
ETHERS_NEW_CONTRACT_SUCCESS,
ETHERS_NEW_CONTRACT_FAILURE,
ETHERS_CONTRACT_GET_FUNCTIONS_REQUEST,
ETHERS_CONTRACT_GET_FUNCTIONS_SUCCESS,
ETHERS_CONTRACT_GET_FUNCTIONS_FAILURE,
ETHERS_CONTRACT_GET_ESTIMATE_REQUEST,
ETHERS_CONTRACT_GET_ESTIMATE_SUCCESS,
ETHERS_CONTRACT_GET_ESTIMATE_FAILURE,
ETHERS_CONTRACT_GET_EVENTS_REQUEST,
ETHERS_CONTRACT_GET_EVENTS_SUCCESS,
ETHERS_CONTRACT_GET_EVENTS_FAILURE,
ETHERS_CONTRACT_NEW_INSTANCE_REQUEST,
ETHERS_CONTRACT_NEW_INSTANCE_SUCCESS,
ETHERS_CONTRACT_NEW_INSTANCE_FAILURE,
ETHERS_CONTRACT_DEPLOY_BYTECODE_REQUEST,
ETHERS_CONTRACT_DEPLOY_BYTECODE_SUCCESS,
ETHERS_CONTRACT_DEPLOY_BYTECODE_FAILURE,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {


      case ETHERS_NEW_WALLET_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_NEW_WALLET_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_NEW_WALLET_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_CREATE_RANDOM_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_CREATE_RANDOM_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_CREATE_RANDOM_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_CREATE_FROM_ENCRYPTED_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_CREATE_FROM_ENCRYPTED_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_CREATE_FROM_ENCRYPTED_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_CREATE_FROM_MENEMONIC_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_CREATE_FROM_MENEMONIC_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_CREATE_FROM_MENEMONIC_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_CREATE_FROM_BRAIN_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_CREATE_FROM_BRAIN_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_CREATE_FROM_BRAIN_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_ADDRESS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_ADDRESS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_ADDRESS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_PRIVATE_KEY_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_PRIVATE_KEY_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_PRIVATE_KEY_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_GET_ADDRESS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_GET_ADDRESS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_GET_ADDRESS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_SIGN_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_SIGN_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_SIGN_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_SIGN_MESSAGE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_SIGN_MESSAGE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_SIGN_MESSAGE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_ENCRYPT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_ENCRYPT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_ENCRYPT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_GET_BALNCE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_GET_BALNCE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_GET_BALNCE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_GET_TRANSACTION_COUNT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_GET_TRANSACTION_COUNT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_GET_TRANSACTION_COUNT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_ESTIMATE_GAS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_ESTIMATE_GAS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_ESTIMATE_GAS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_SEND_TRANSACTION_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_SEND_TRANSACTION_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_SEND_TRANSACTION_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_SEND_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_SEND_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_SEND_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_PARSE_TRANSACTION_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_PARSE_TRANSACTION_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_PARSE_TRANSACTION_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_WALLET_VERIFY_MESSAGE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_WALLET_VERIFY_MESSAGE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_WALLET_VERIFY_MESSAGE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_NEW_PROVIDER_ETHERSCAN_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_NEW_PROVIDER_ETHERSCAN_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_NEW_PROVIDER_ETHERSCAN_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_NEW_PROVIDER_JSON_RPC_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_NEW_PROVIDER_JSON_RPC_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_NEW_PROVIDER_JSON_RPC_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_NEW_PROVIDER_INFURA_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_NEW_PROVIDER_INFURA_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_NEW_PROVIDER_INFURA_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_NEW_PROVIDER_FALLBACK_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_NEW_PROVIDER_FALLBACK_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_NEW_PROVIDER_FALLBACK_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_GET_PROVIDER_DEFAULT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_GET_PROVIDER_DEFAULT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_GET_PROVIDER_DEFAULT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_PROVIDER_NAME_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_PROVIDER_NAME_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_PROVIDER_NAME_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_PROVIDER_CHAIN_ID_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_PROVIDER_CHAIN_ID_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_PROVIDER_CHAIN_ID_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_PROVIDER_PROVIDERS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_PROVIDER_PROVIDERS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_PROVIDER_PROVIDERS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_PROVIDER_URL_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_PROVIDER_URL_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_PROVIDER_URL_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_PROVIDER_SEND_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_PROVIDER_SEND_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_PROVIDER_SEND_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_PROVIDER_API_TOKEN_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_PROVIDER_API_TOKEN_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_PROVIDER_API_TOKEN_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_PROVIDER_API_ACCESS_TOKEN_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_PROVIDER_API_ACCESS_TOKEN_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_PROVIDER_API_ACCESS_TOKEN_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_ACCOUNT_GET_BALANCE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_ACCOUNT_GET_BALANCE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_ACCOUNT_GET_BALANCE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_ACCOUNT_GET_TRANSACTION_COUNT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_ACCOUNT_GET_TRANSACTION_COUNT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_ACCOUNT_GET_TRANSACTION_COUNT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_ACCOUNT_LOOKUP_ADDRESS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_ACCOUNT_LOOKUP_ADDRESS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_ACCOUNT_LOOKUP_ADDRESS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_ACCOUNT_RESOLVE_NAME_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_ACCOUNT_RESOLVE_NAME_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_ACCOUNT_RESOLVE_NAME_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_BLOCKCHAIN_GET_BLOCK_NUMBER_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_BLOCKCHAIN_GET_BLOCK_NUMBER_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_BLOCKCHAIN_GET_BLOCK_NUMBER_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_BLOCKCHAIN_GET_GAS_PRICE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_BLOCKCHAIN_GET_GAS_PRICE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_BLOCKCHAIN_GET_GAS_PRICE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_BLOCKCHAIN_GET_BLOCK_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_BLOCKCHAIN_GET_BLOCK_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_BLOCKCHAIN_GET_BLOCK_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_BLOCKCHAIN_GET_TRANSACTION_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_BLOCKCHAIN_GET_TRANSACTION_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_BLOCKCHAIN_GET_TRANSACTION_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_BLOCKCHAIN_GET_TRANSACTION_RECEIPT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_BLOCKCHAIN_GET_TRANSACTION_RECEIPT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_BLOCKCHAIN_GET_TRANSACTION_RECEIPT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_ENS_RESOLVE_NAME_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_ENS_RESOLVE_NAME_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_ENS_RESOLVE_NAME_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_ENS_LOOKUP_ADDRESS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_ENS_LOOKUP_ADDRESS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_ENS_LOOKUP_ADDRESS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_CONTRACT_STATE_GET_CODE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_CONTRACT_STATE_GET_CODE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_CONTRACT_STATE_GET_CODE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_CONTRACT_STATE_GET_STORAGE_AT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_CONTRACT_STATE_GET_STORAGE_AT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_CONTRACT_STATE_GET_STORAGE_AT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_CONTRACT_STATE_GET_LOGS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_CONTRACT_STATE_GET_LOGS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_CONTRACT_STATE_GET_LOGS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_EVENTS_SET_ON_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_EVENTS_SET_ON_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_EVENTS_SET_ON_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_EVENTS_SET_ONCE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_EVENTS_SET_ONCE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_EVENTS_SET_ONCE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_EVENTS_REMOVE_LISTENER_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_EVENTS_REMOVE_LISTENER_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_EVENTS_REMOVE_LISTENER_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_EVENTS_REMOVE_ALL_LISTENERS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_EVENTS_REMOVE_ALL_LISTENERS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_EVENTS_REMOVE_ALL_LISTENERS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_EVENTS_GET_LISTNER_COUNT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_EVENTS_GET_LISTNER_COUNT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_EVENTS_GET_LISTNER_COUNT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_EVENT_RESET_BLOCK_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_EVENT_RESET_BLOCK_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_EVENT_RESET_BLOCK_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_NEW_CONTRACT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_NEW_CONTRACT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_NEW_CONTRACT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_CONTRACT_GET_FUNCTIONS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_CONTRACT_GET_FUNCTIONS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_CONTRACT_GET_FUNCTIONS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_CONTRACT_GET_ESTIMATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_CONTRACT_GET_ESTIMATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_CONTRACT_GET_ESTIMATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_CONTRACT_GET_EVENTS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_CONTRACT_GET_EVENTS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_CONTRACT_GET_EVENTS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_CONTRACT_NEW_INSTANCE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_CONTRACT_NEW_INSTANCE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_CONTRACT_NEW_INSTANCE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ETHERS_CONTRACT_DEPLOY_BYTECODE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ETHERS_CONTRACT_DEPLOY_BYTECODE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ETHERS_CONTRACT_DEPLOY_BYTECODE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


    default:
      return state
  }
}