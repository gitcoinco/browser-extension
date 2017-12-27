/**
 * @func actionExists
 * @desc Check to see if a Redux Action has been registered.
 */
export const actionExists = (entity) => true

/**
 * @func entityStatus
 * @desc Confirm the database write contains a valid entity in the application database schema.
 */
export const entityCorrect = (entity) => [
  'self',
  'community',
  'organization',
  'infrastructure',
  'mutate',
  ].filter((entityMatch) => entity === entityMatch ? true : false)

/**
 * @func typeCorrect
 * @desc Confirm the database write contains a valid database write type before attempting a database change.
 */
export const typeCorrect = (type) => ['create', 'update', 'patch'].filter((dataWriteTypeMatch) => type === dataWriteTypeMatch ? true : false)

/**
 * @func branchAcceptable
 * @desc Predict the liklihood the branch matches implicit application schema or generating a new data model branch.
 * 
 * @todo Brainmap The Logc
 * Catalog the implicit schema by scanning the database in timed intervals and/or asking application architects to
 * upload the application schema using a JSON file, so the application can reference the implied schema.
 * 
 * Additionally, an authentication layer might be included, so certain roles (Administrator, Architect, etc...) can
 * dynamically generate new data schemas, while other roles (Users, Staff, Marketing) may be limited to a specific
 * section of the database to included dynamic data branches.
 * 
 */
export const branchAcceptable = (branch) => true


/**
 * @func identifictionInjection
 * @desc Confirm the user is submitting a entity id, which the interface store contains.
 * When requesting to delete database records we want to confirm the interfac should have knowledge of entity object id.
 * Ulitamately the backend will confirm authentication roles/permissions are correct, but hopefully this will help identify
 * malicious actors attempting to interface with the application in ways it should not be.
 * 
 * @const {String} id @desc The entity reference identification  
 * @const {String} department @desc The store department containing the entity id
 */
export const identifictionInjection = ({id, department}) => false


