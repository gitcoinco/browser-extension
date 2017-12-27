/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import { Switch } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute } from 'particles'
import { Flex, Box, Route }from 'atomic'
import { 
  DataFormEntityEdit,
  DataEntityHero
} from 'logic/interface/DataScaffold'
import { PhoneUnformatted, ContributorsList } from 'logic/interface/FlowInvert'
import {
  FirestoreFeed,
  FirestoreList,
  FirestoreListCompose,
  FirestoreListFilter,
  StripeContainer
} from 'containers'
import {
  Item,
  ImageList,
  FormAddContributorPerson,
  FormProfileSmsSend,
  FormStatusUpdate,
  EntityStatusUpdates,
  FormPaymentCreditCard,
} from 'foundry'
import {
  FormPersonEdit,
  EntityProfileHero,
  EntityProfileGallery,
  EntityProfileInterfaceBiography,
  EntityProfileInterfaceIdentity,
  PersonProfileMenu,
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => { 
  const id = idx(props, _ => _.id)
  let contributors = idx(props, _ => _.contributors.contributorPeople), contributorsRef
  let phone = idx(props, _ => _.contact.contactPhone)
  if(contributors) contributorsRef = ContributorsList(contributors)
  return <div>
    <Absolute top bottom right bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} height={[1]} of='hidden' w={[1,1, 0.77]}>
        <PerfectScrollbar>
          <Route exact path="/dashboard/:entity/:eid"
            component={EntityProfileHero}
            images={props.images}
            name={props.name}
            metadata={props.metadata}
          />
        <Box p={[20,35]}>
          {/*--- People::Person ---*/}
          {!contributorsRef ? null :
            <Route exact 
              component={FirestoreListCompose}
              collection={'people'}
              delta='PersonsComposePeople'
              foundry='PersonCard'
              path='/dashboard/:entity/:eid/people'
              references={contributorsRef}
            />
          }
          {/*--- Activity::Person ---*/}
          <Route 
            exact 
            path="/dashboard/person/:eid/activity" 
            component={EntityStatusUpdates}
            collection='people' 
          />
          <Route 
            exact 
            path="/dashboard/person/:eid/account" 
            component={StripeContainer}
            collection='people' 
          />

          {/*--- CART :: Person ---*/}
          <Route exact 
            path="/dashboard/person/:eid/cart" 
            component={Item} 
            foundry='CommerceCartInformation'
          />
          <Route exact 
            path="/dashboard/person/:eid/cart" 
            component={FirestoreList} 
            collection='carts'
            delta='CartActive'
            filters={{
              where: [
                ['createdBy', '==', props.authentication.uid]
              ]
            }}
            foundry='CommerceCartItems'
            styled={{
              w: [1, 1, 0.5],
            }}
          />

          <Route exact 
            path="/dashboard/person/:eid/cart" 
            component={Item} 
            foundry='CommerceCartOrderDraft'
          />

          {/*--- Orders :: Person ---*/}
          <Route exact 
            path="/dashboard/person/:eid/orders" 
            component={FirestoreList} 
            collection='orders'
            delta='OrdersList'
            foundry='CommerceOrderCard'
            filters={{
              where: [
                ['createdBy', '==', props.authentication.uid]
              ]
            }}
            styled={{
              mb: [15,30],
              w: [1],
            }}
          />

          {/*--- ACCOUNT :: Person ---*/}
          <Route exact 
            path="/dashboard/person/:eid/account" 
            component={FirestoreList} 
            collection='commerceTokens'
            delta='CommercePaymentSouceCard'
            filters={{
              where: [
                ['createdBy', '==', props.authentication.uid]
              ]
            }}
            foundry='CommercePaymentSouceCard'
            styled={{
              w: [1, 1, 0.5],
            }}
          />
          
          {/*--- Edit::Person ---*/}
          {!props.name ? null : 
          <Route exact path="/dashboard/person/:eid/edit" component={FormPersonEdit}/>}


          {!phone ? null :
          <Route exact path="/dashboard/person/:eid/sms"
            phoneTo={PhoneUnformatted(phone)}
            component={FormProfileSmsSend} 
          />
          }
          {!phone ? null :
          <Route exact path="/dashboard/person/:eid/sms" component={FirestoreFeed} 
              delta='MessagesSearch'
              collection='messages'
              foundry='DataTable'
              filters={{
                where: [
                  ['to', '==', PhoneUnformatted(phone)]
                ]
              }}
              tableHeader={'Text Message (SMS) Records'}
              columns={[
                {
                  field: 'status',
                  header: 'Status',
                },
                {
                  field: 'direction',
                  header: 'Direction',
                },
                {
                  field: 'body',
                  header: 'Body',
                },
                {
                  field: 'from',
                  header: 'From',
                },
                {
                  field: 'to',
                  header: 'To',
                },
              ]}
            />
          }
          {!phone ? null :
          <Route exact path="/dashboard/person/:eid/calls" component={FirestoreFeed} 
              delta='MessagesSearch'
              collection='calls'
              foundry='DataTable'
              filters={{
                where: [
                  ['to', '==', PhoneUnformatted(phone)]
                ]
              }}
              tableHeader={'Call Records'}
              columns={[
                {
                  field: 'status',
                  header: 'Status',
                },
                {
                  field: 'duration',
                  header: 'Duration(seconds)',
                },
        
                {
                  field: 'forwardedFrom',
                  header: 'Forwarding',
                },
                {
                  field: 'from',
                  header: 'From',
                },
                {
                  field: 'to',
                  header: 'To',
                },
              ]}
            />
          }


          {/*--- Person ---*/}
          <Route exact path="/dashboard/:entity/:eid"
          component={EntityProfileGallery} collection='people'
          images={props.images}
          />

          {!idx(props, _ => _.biography) ? null :
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileInterfaceBiography} data={props.data} w={1} />}

        </Box>
      </PerfectScrollbar>
    </Absolute>
    <Absolute top left gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} height={[1]} w={[1,1, 0.23]} z={15}>
      <PerfectScrollbar>
        <EntityProfileInterfaceIdentity {...props} w={1} />
        <PersonProfileMenu {...props} />
      </PerfectScrollbar>
    </Absolute>
  </div>
}