import {createRequestTypes, action} from '../utils'
const entity = 'dether'
export const actions = {
TELLER_GET: createRequestTypes('TELLER_GET'),
TELLER_BALANCE: createRequestTypes('TELLER_BALANCE'),
TELLERS_GET: createRequestTypes('TELLERS_GET'),
TELLERS_IN_ZONE: createRequestTypes('TELLERS_IN_ZONE'),
SELL_POINT_ADD: createRequestTypes('SELL_POINT_ADD'),
SELL_POINT_DELETE: createRequestTypes('SELL_POINT_DELETE'),
BUYER_SEND: createRequestTypes('BUYER_SEND'),
tellerGet: status => (payload, metadata) => action(actions.TELLER_GET[status], payload, metadata, status, entity ),
tellerBalance: status => (payload, metadata) => action(actions.TELLER_BALANCE[status], payload, metadata, status, entity ),
tellersGet: status => (payload, metadata) => action(actions.TELLERS_GET[status], payload, metadata, status, entity ),
tellersInZone: status => (payload, metadata) => action(actions.TELLERS_IN_ZONE[status], payload, metadata, status, entity ),
sellPointAdd: status => (payload, metadata) => action(actions.SELL_POINT_ADD[status], payload, metadata, status, entity ),
sellPointDelete: status => (payload, metadata) => action(actions.SELL_POINT_DELETE[status], payload, metadata, status, entity ),
buyerSend: status => (payload, metadata) => action(actions.BUYER_SEND[status], payload, metadata, status),
}
export default actions