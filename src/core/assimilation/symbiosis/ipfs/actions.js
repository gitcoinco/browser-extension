import {createRequestTypes, action} from '../utils'
const entity = 'ipfs'
export const actions = {
FILES_ADD: createRequestTypes('FILES_ADD'),
FILES_GET: createRequestTypes('FILES_GET'),
FILES_CREATE_STREAM: createRequestTypes('FILES_CREATE_STREAM'),
FILES_CAT: createRequestTypes('FILES_CAT'),

BLOCKS_ADD: createRequestTypes('BLOCKS_ADD'),
BLOCKS_GET: createRequestTypes('BLOCKS_GET'),
BLOCKS_CREATE_STREAM: createRequestTypes('BLOCKS_CREATE_STREAM'),
BLOCKS_CAT: createRequestTypes('BLOCKS_CAT'),

DAG_PUT: createRequestTypes('DAG_PUT'),
DAG_GET: createRequestTypes('DAG_GET'),
DAG_TREE: createRequestTypes('DAG_TREE'),

OBJECT_NEW: createRequestTypes('OBJECT_NEW'),
OBJECT_PUT: createRequestTypes('OBJECT_PUT'),
OBJECT_GET: createRequestTypes('OBJECT_GET'),
OBJECT_DATA: createRequestTypes('OBJECT_DATA'),
OBJECT_LINKS: createRequestTypes('OBJECT_LINKS'),
OBJECT_STAT: createRequestTypes('OBJECT_STAT'),

filesAdd: status => (payload, metadata) => action(actions.FILES_ADD[status], payload, metadata, status, entity),
filesGet: status => (payload, metadata) => action(actions.FILES_GET[status], payload, metadata, status, entity),
filesCreateStream: status => (payload, metadata) => action(actions.FILES_CREATE_STREAM[status], payload, metadata, status, entity),
filesCat: status => (payload, metadata) => action(actions.FILES_CAT[status], payload, metadata, status, entity),

blocksAdd: status => (payload, metadata) => action(actions.BLOCKS_ADD[status], payload, metadata, status, entity),
blocksGet: status => (payload, metadata) => action(actions.BLOCKS_GET[status], payload, metadata, status, entity),
blocksCreateStream: status => (payload, metadata) => action(actions.BLOCKS_CREATE_STREAM[status], payload, metadata, status, entity),
blocksCat: status => (payload, metadata) => action(actions.BLOCKS_CAT[status], payload, metadata, status, entity),

dagPut: status => (payload, metadata) => action(actions.DAG_PUT[status], payload, metadata, status, entity),
dagGet: status => (payload, metadata) => action(actions.DAG_GET[status], payload, metadata, status, entity),
dagTree: status => (payload, metadata) => action(actions.DAG_TREE[status], payload, metadata, status, entity),

objectNew: status => (payload, metadata) => action(actions.OBJECT_NEW[status], payload, metadata, status, entity),
objectPut: status => (payload, metadata) => action(actions.OBJECT_PUT[status], payload, metadata, status, entity),
objectGet: status => (payload, metadata) => action(actions.OBJECT_GET[status], payload, metadata, status, entity),
objectData: status => (payload, metadata) => action(actions.OBJECT_DATA[status], payload, metadata, status, entity),
objectLinks: status => (payload, metadata) => action(actions.OBJECT_LINKS[status], payload, metadata, status, entity),
objectStat: status => (payload, metadata) => action(actions.OBJECT_STAT[status], payload, metadata, status, entity),

}
export default actions