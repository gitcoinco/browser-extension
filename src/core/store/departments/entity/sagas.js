/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import idx from 'idx'
import { call, put, takeEvery } from 'redux-saga/effects';
import reduxSagaFirebase from 'logic/services/Firebase';
/* ------------------------- Internal Dependencies -------------------------- */
/*--- Entity Actions ---*/
import {
  ENTITY_ADD_REQUEST,
  ENTITY_EDIT_REQUEST,
  ENTITY_UPDATE_REQUEST,
  ENTITY_DELETE_REQUEST,
  ENTITY_PERSON_ADD_REQUEST,
  ENTITY_PERSON_EDIT_REQUEST,
  ENTITY_PERSON_DELETE_REQUEST,
  ENTITY_ORGANIZATION_ADD_REQUEST,
  ENTITY_ORGANIZATION_EDIT_REQUEST,
  ENTITY_ORGANIZATION_DELETE_REQUEST,
  ENTITY_PROJECT_ADD_REQUEST,
  ENTITY_PROJECT_EDIT_REQUEST,
  ENTITY_PROJECT_DELETE_REQUEST,
  ENTITY_TASK_ADD_REQUEST,
  ENTITY_TASK_EDIT_REQUEST,
  ENTITY_TASK_DELETE_REQUEST,
  ENTITY_RESOURCE_ADD_REQUEST,
  ENTITY_RESOURCE_EDIT_REQUEST,
  ENTITY_RESOURCE_DELETE_REQUEST,
  ENTITY_BANNER_ADD_REQUEST,
  ENTITY_FILE_ADD_REQUEST,
  ENTITY_FILE_EDIT_REQUEST,
  ENTITY_FILE_DELETE_REQUEST,
  ENTITY_FILES_ADD_REQUEST,
  ENTITY_IMAGE_ADD_REQUEST,
  ENTITY_IMAGE_EDIT_REQUEST,
  ENTITY_IMAGE_DELETE_REQUEST,
  ENTITY_IMAGES_ADD_REQUEST,
} from './actions'
import {
  entityAddSuccess,
  entityAddFailure,
  entityEditSuccess,
  entityEditFailure,
  entityUpdateSuccess,
  entityUpdateFailure,
  entityDeleteSuccess,
  entityDeleteFailure,
  entityPersonAddSuccess,
  entityPersonAddFailure,
  entityPersonEditSuccess,
  entityPersonEditFailure,
  entityPersonDeleteSuccess,
  entityPersonDeleteFailure,
  entityOrganizationAddSuccess,
  entityOrganizationAddFailure,
  entityOrganizationEditSuccess,
  entityOrganizationEditFailure,
  entityOrganizationDeleteSuccess,
  entityOrganizationDeleteFailure,
  entityProjectAddSuccess,
  entityProjectAddFailure,
  entityProjectEditSuccess,
  entityProjectEditFailure,
  entityProjectDeleteSuccess,
  entityProjectDeleteFailure,
  entityTaskAddSuccess,
  entityTaskAddFailure,
  entityTaskEditSuccess,
  entityTaskEditFailure,
  entityTaskDeleteSuccess,
  entityTaskDeleteFailure,
  entityResourceAddSuccess,
  entityResourceAddFailure,
  entityResourceEditSuccess,
  entityResourceEditFailure,
  entityResourceDeleteSuccess,
  entityResourceDeleteFailure,
  entityBannerAddSuccess,
  entityBannerAddFailure,
  entityFileAddSuccess,
  entityFileAddFailure,
  entityFileEditSuccess,
  entityFileEditFailure,
  entityFileDeleteSuccess,
  entityFileDeleteFailure,
  entityFilesAddSuccess,
  entityFilesAddFailure,
  entityImageAddSuccess,
  entityImageAddFailure,
  entityImageEditSuccess,
  entityImageEditFailure,
  entityImageDeleteSuccess,
  entityImageDeleteFailure,
  entityImagesAddSuccess,
  entityImagesAddFailure,
} from './actions'


/*--- Department Actions ---*/
import {
  firestormEntityCreateRequest,
  firestoreDocumentAddRequest,
  firestoreDocumentSetRequest,
  firestoreDocumentGetRequest,
  firestoreDocumentUpdateRequest,
  firestoreDocumentAllGetRequest,
  firestoreDocumentFilterGetRequest,
  firestoreDocumentDeleteRequest,
  firestoreDocumentFieldsDeleteRequest,
} from 'store/departments/actions'

import {
  notificationOpen
} from 'store/departments/actions'

import { 
  storageUploadFileRequest
} from 'store/departments/actions'

import { mapboxGeocode } from 'store/async'

/*--- Firebase | Require Last ---*/
import firebase from 'firebase';
require("firebase/firestore");




/*---*--- Add ---*---*/
function* entityAdd({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      console.log(geopoint)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentAddRequest({payload, metadata}))
    yield put(notificationOpen({payload:{title: 'Entity Add Success'}}))
    yield put(entityAddSuccess({payload: {}, metadata}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentFilterGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    console.log(e)
    yield put(notificationOpen({payload:{title: 'Entity Add Failure'}}))
    yield put(entityAddFailure({payload: e, metadata}))
  }
}


/*---*--- Edit ---*---*/
function* entityEdit({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentUpdateRequest({payload, metadata }))
    yield put(entityEditSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Entity Edit Success'}}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Entity Edit Failure'}}))
    yield put(entityEditFailure({payload: e, metadata}))
  }
}

function* entityUpdate({payload, metadata}) {
  try {
    yield put(firestoreDocumentUpdateRequest({payload, metadata }))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentGetRequest({payload:{}, metadata:trigger}))
    }
    yield put(notificationOpen({payload:{title: 'Entity Edit Success'}}))
    yield put(entityUpdateSuccess({metadata}))
  } catch(e) {
    yield put(entityUpdateFailure({payload: e, metadata}))
  }
}


/*---*--- Delete ---*---*/
function* entityDelete({payload, metadata}) {
  try {

    yield put(entityDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityDeleteFailure({payload: e, metadata}))
  }
}







/*---*--- Person Add ---*---*/
function* personAdd({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentAddRequest({payload, metadata }))
    yield put(entityPersonAddSuccess({payload: {}, metadata}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(notificationOpen({payload:{title: 'Person Add Success'}}))
      yield put(firestoreDocumentFilterGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Person Add Failure'}}))
    yield put(entityPersonAddFailure({payload: e, metadata}))
  }
}


/*---*--- Person Edit ---*---*/
function* personEdit({payload, metadata}) {
  try {


    yield put(entityPersonEditSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityPersonEditFailure({payload: e, metadata}))
  }
}


/*---*--- Person Delete ---*---*/
function* personDelete({payload, metadata}) {
  try {

    yield put(entityPersonDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityPersonDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Organization Add ---*---*/
function* organizationAdd({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentAddRequest({payload, metadata }))
    yield put(entityOrganizationAddSuccess({payload: {}, metadata}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(notificationOpen({payload:{title: 'Organization Add Success'}}))
      yield put(firestoreDocumentFilterGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Organization Add Failure'}}))
    yield put(entityOrganizationAddFailure({payload: e, metadata}))
  }
}

/*---*--- Organization Delete ---*---*/
function* organizationDelete({payload, metadata}) {
  try {

    yield put(entityOrganizationDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityOrganizationDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Organization Edit ---*---*/
function* organizationEdit({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentUpdateRequest({payload, metadata }))
    yield put(entityOrganizationEditSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Organization Edit Success'}}))
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Organization Edit Failure'}}))
    yield put(entityOrganizationEditFailure({payload: e, metadata}))
  }
}
/*---*--- Project Add ---*---*/
function* projectAdd({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentAddRequest({payload, metadata}))
    yield put(entityProjectAddSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Project Add Success'}}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentFilterGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    console.log(e)
    yield put(notificationOpen({payload:{title: 'Project Add Failure'}}))
    yield put(entityProjectAddFailure({payload: e, metadata}))
  }
}


/*---*--- Project Edit ---*---*/
function* projectEdit({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentUpdateRequest({payload, metadata }))
    yield put(entityProjectEditSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Project Edit Success'}}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Project Edit Failure'}}))
    yield put(entityProjectEditFailure({payload: e, metadata}))
  }
}


/*---*--- Project Delete ---*---*/
function* projectDelete({payload, metadata}) {
  try {

    yield put(entityProjectDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityProjectDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Task Add ---*---*/
function* taskAdd({payload, metadata}) {
  try {

    yield put(entityTaskAddSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityTaskAddFailure({payload: e, metadata}))
  }
}


/*---*--- Task Edit ---*---*/
function* taskEdit({payload, metadata}) {
  try {

    yield put(entityTaskEditSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityTaskEditFailure({payload: e, metadata}))
  }
}


/*---*--- Task Delete ---*---*/
function* taskDelete({payload, metadata}) {
  try {

    yield put(entityTaskDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityTaskDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Resource Add ---*---*/
function* resourceAdd({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentAddRequest({payload, metadata}))
    yield put(entityResourceAddSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Resource Add Success'}}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentFilterGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Resource Add Failure'}}))
    yield put(entityResourceAddFailure({payload: e, metadata}))
  }
}


/*---*--- Resource Edit ---*---*/
function* resourceEdit({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentUpdateRequest({payload, metadata }))
    yield put(entityResourceEditSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Resource Edit Success'}}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Resource Edit Failure'}}))
    yield put(entityResourceEditFailure({payload: e, metadata}))
  }
}


/*---*--- Resource Delete ---*---*/
function* resourceDelete({payload, metadata}) {
  try {

    yield put(entityResourceDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityResourceDeleteFailure({payload: e, metadata}))
  }
}

/*---*--- Banner Add ---*---*/
function* bannerAdd({payload, metadata}) {
  try {
    const file = payload[0],
    { location, fileMetadata } = metadata
    const fileID = yield call(reduxSagaFirebase.storage.uploadFile, `${location}/${file.name}`, file);
    const images = {
      "images.imageBanner": fileID.downloadURL
    }
    yield put(firestoreDocumentUpdateRequest({payload: images, metadata }))
    yield put(entityBannerAddSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Banner Upload Success'}}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    console.log(e)
    yield put(entityBannerAddFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{title: 'Banner Upload Failure'}}))
  }
}

/*---*--- File Add ---*---*/
function* fileAdd({payload, metadata}) {
  try {

    yield put(entityFileAddSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityFileAddFailure({payload: e, metadata}))
  }
}


/*---*--- File Edit ---*---*/
function* fileEdit({payload, metadata}) {
  try {

    yield put(entityFileEditSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityFileEditFailure({payload: e, metadata}))
  }
}


/*---*--- File Delete ---*---*/
function* fileDelete({payload, metadata}) {
  try {

    yield put(entityFileDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityFileDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Files Add ---*---*/
function* filesAdd({payload, metadata}) {
  try {

    yield put(entityFilesAddSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityFilesAddFailure({payload: e, metadata}))
  }
}


/*---*--- Image Add ---*---*/
function* imageAdd({payload, metadata}) {
  try {

    yield put(entityImageAddSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityImageAddFailure({payload: e, metadata}))
  }
}


/*---*--- Image Edit ---*---*/
function* imageEdit({payload, metadata}) {
  try {

    yield put(entityImageEditSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityImageEditFailure({payload: e, metadata}))
  }
}


/*---*--- Image Delete ---*---*/
function* imageDelete({payload, metadata}) {
  try {

    yield put(entityImageDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityImageDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Images Add ---*---*/
function* imagesAdd({payload, metadata}) {
  try {
    yield put(notificationOpen({payload:{title: 'Gallery Upload Starting'}}))
    const { location, fileMetadata } = metadata
    const fileCollection = {}
    const filesNew = {}
    for (var index = 0; index < payload.length; index++) {
      fileCollection[payload[index].name] = yield call(reduxSagaFirebase.storage.uploadFile, `${location}/${payload[index].name}`, payload[index]);
    }
    const save = _.forEach(fileCollection, (file, i)=> {
      
      const name = file.metadata.name /* TODO: We need WAY better REGEX handling and resource tracking system. @kamescg built a wack one. -Kames */
      .substring(0, file.metadata.name.lastIndexOf('.'))
      .replace(/\s+/g, '')
      .replace(/\./g,'');
      filesNew[`images.imageGallery.${name}`] = {
        src:file.downloadURL,
        md5Hash: file.metadata.md5Hash,
        name: file.metadata.name,
        fullPath: file.metadata.fullPath,
    }})
    const payloadNew = {
         ...filesNew
    }
    yield put(entityImagesAddSuccess({payload: {}, metadata}))
    yield put(firestoreDocumentUpdateRequest({payload: payloadNew, metadata: {
      ...metadata,
      delta: `${metadata.delta}|GalleryUpload`,
      merge: true
    }}))
    yield put(firestoreDocumentGetRequest({payload:{}, metadata}))
    yield put(notificationOpen({payload:{title: 'Gallery Upload Success'}}))
  } catch(e) {
    console.log(e)
    yield put(entityImagesAddFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{title: 'Gallery Upload Failure'}}))
  }
}

export default function* rxdbRootSaga() {
  yield [
   takeEvery(ENTITY_ADD_REQUEST, entityAdd),
   takeEvery(ENTITY_EDIT_REQUEST, entityEdit),
   takeEvery(ENTITY_UPDATE_REQUEST, entityUpdate),
   takeEvery(ENTITY_DELETE_REQUEST, entityDelete),
   takeEvery(ENTITY_PERSON_ADD_REQUEST, personAdd),
   takeEvery(ENTITY_PERSON_EDIT_REQUEST, personEdit),
   takeEvery(ENTITY_PERSON_DELETE_REQUEST, personDelete),
   takeEvery(ENTITY_ORGANIZATION_ADD_REQUEST, organizationAdd),
   takeEvery(ENTITY_ORGANIZATION_EDIT_REQUEST, organizationEdit),
   takeEvery(ENTITY_ORGANIZATION_DELETE_REQUEST, organizationDelete),
   takeEvery(ENTITY_PROJECT_ADD_REQUEST, projectAdd),
   takeEvery(ENTITY_PROJECT_EDIT_REQUEST, projectEdit),
   takeEvery(ENTITY_PROJECT_DELETE_REQUEST, projectDelete),
   takeEvery(ENTITY_TASK_ADD_REQUEST, taskAdd),
   takeEvery(ENTITY_TASK_EDIT_REQUEST, taskEdit),
   takeEvery(ENTITY_TASK_DELETE_REQUEST, taskDelete),
   takeEvery(ENTITY_RESOURCE_ADD_REQUEST, resourceAdd),
   takeEvery(ENTITY_RESOURCE_EDIT_REQUEST, resourceEdit),
   takeEvery(ENTITY_RESOURCE_DELETE_REQUEST, resourceDelete),
   takeEvery(ENTITY_BANNER_ADD_REQUEST, bannerAdd),
   takeEvery(ENTITY_FILE_ADD_REQUEST, fileAdd),
   takeEvery(ENTITY_FILE_EDIT_REQUEST, fileEdit),
   takeEvery(ENTITY_FILE_DELETE_REQUEST, fileDelete),
   takeEvery(ENTITY_FILES_ADD_REQUEST, filesAdd),
   takeEvery(ENTITY_IMAGE_ADD_REQUEST, imageAdd),
   takeEvery(ENTITY_IMAGE_EDIT_REQUEST, imageEdit),
   takeEvery(ENTITY_IMAGE_DELETE_REQUEST, imageDelete),
   takeEvery(ENTITY_IMAGES_ADD_REQUEST, imagesAdd),
  ];
}

