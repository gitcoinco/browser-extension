import {createRequestTypes, action} from '../utils'
const entity = 'coinhive'
export const actions = {
CORE_INITIALIZE: createRequestTypes('CORE_INITIALIZE'),
CORE_START: createRequestTypes('CORE_START'),
CORE_STOP: createRequestTypes('CORE_STOP'),
THREADS_COUNT_GET: createRequestTypes('THREADS_COUNT_GET'),
THREADS_COUNT_SET: createRequestTypes('THREADS_COUNT_SET'),
THREADS_AUTO_GET: createRequestTypes('THREADS_AUTO_GET'),
THREADS_AUTO_SET: createRequestTypes('THREADS_AUTO_SET'),
HASH_TOTAL: createRequestTypes('HASH_TOTAL'),
HASH_AVERAGE: createRequestTypes('HASH_AVERAGE'),
HASH_ACCEPTED: createRequestTypes('HASH_ACCEPTED'),
TOKEN_GET: createRequestTypes('TOKEN_GET'),
coreInitialize: status => (payload, metadata) => action(actions.CORE_INITIALIZE[status], payload, metadata, status, entity),
coreStart: status => (payload, metadata) => action(actions.CORE_START[status], payload, metadata, status, entity),
coreStop: status => (payload, metadata) => action(actions.CORE_STOP[status], payload, metadata, status, entity),
threadsCountGet: status => (payload, metadata) => action(actions.THREADS_COUNT_GET[status], payload, metadata, status, entity),
threadsCountSet: status => (payload, metadata) => action(actions.THREADS_COUNT_SET[status], payload, metadata, status, entity),
threadsAutoGet: status => (payload, metadata) => action(actions.THREADS_AUTO_GET[status], payload, metadata, status, entity),
threadsAutoSet: status => (payload, metadata) => action(actions.THREADS_AUTO_SET[status], payload, metadata, status, entity),
hashTotal: status => (payload, metadata) => action(actions.HASH_TOTAL[status], payload, metadata, status, entity),
hashAverage: status => (payload, metadata) => action(actions.HASH_AVERAGE[status], payload, metadata, status, entity),
hashAccepted: status => (payload, metadata) => action(actions.HASH_ACCEPTED[status], payload, metadata, status, entity),
tokenGet: status => (payload, metadata) => action(actions.TOKEN_GET[status], payload, metadata, status, entity),
}
export default actions