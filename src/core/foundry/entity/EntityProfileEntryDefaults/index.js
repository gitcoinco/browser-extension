/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import { branch,compose,renderComponent } from 'recompose'
import { Switch } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import {Absolute, Flex, Box, Route, Heading, Markdown, SpinnerSquares }from 'atomic'
import {
  FirestoreListCompose
} from 'containers'
import {
  ImageList,
  EntityDeleteButton,
  FormAddContributorPerson,
  FormStatusUpdate,
  EntityStatusUpdates,
  MarkdownEditor,
  FormContentBasics,
} from 'foundry'
import {
  FormArticleEdit,
  FormEntityEdit,
  FormOrganizationEdit,
  EntityProfileHero,
  EntityProfileGallery,
  EntityProfileInterfaceBiography,
  EntityProfileInterfaceIdentity,
  ArticleProfileMenu,
} from 'entity'
import {
  FirestoreDelete
} from 'containers'
/* ------------------------------- Component -------------------------------- */

const Routes = props => {
let contributors = idx(props.data, _ => _.contributors.contributorsFormatted), contributorsRef
if(contributors) contributorsRef = contributors.map(i=> i.eid)
const contentBody = idx(props.data, _ => _.content.contentBody)

let name = idx(props.data, _ => _.name)
let images = idx(props.data, _ => _.images)
let metadata = idx(props.data, _ => _.metadata)
return <Box>
<Route exact path="/dashboard/:entity/:eid"
  component={EntityProfileHero}
  collection={props.collection}
  images={images}
  name={name}
  metadata={metadata}
/>
<Box p={[20,35]}>
{/*--- 

Profile (/:eid)

---*/}

{!contentBody ? null :
<Route
  exact
  path="/dashboard/:entity/:eid"
  component={Markdown}
  source={contentBody}
  bg='white'
  br={10}
  bs={2}
  mb={20}
  p={[20,30]}
/>}

{/*--- 

{/*--- People::Article ---*/}
<Box p={[10]} >
{!(props.data && props.data.id) ? null : 
<Route 
  exact 
  path="/dashboard/:entity/:eid/contributors"
  component={FormAddContributorPerson}
  valueDefault={contributors} 
  collection={props.collection}
  delta="ArticleContributorAdd"
/> }
</Box>

{!contributorsRef ? null :
  <Route 
    exact 
    path='/dashboard/:entity/:eid/contributors'
    component={FirestoreListCompose}
    collection={'people'}
    entity={'person'}
    delta='ArticlesComposePeople'
    foundry='PersonCardDashboard'
    references={contributorsRef} 
  />
}
{/*--- 

  Activity::Article

---*/}
{!(props.data && props.data.collection) ? null : 
<Route 
  exact
  path="/dashboard/:entity/:eid/activity" 
  component={FormStatusUpdate} 
  collection={props.collection}
/> }

{!props.data ? null : 
<Route 
  exact
  path="/dashboard/:entity/:eid/activity"
  component={EntityStatusUpdates}
  collection={props.collection}
  data={props.data}
/>
}

{/*--- 

  Administrator::Article

---*/}
{!(props.data && props.data.id) ? null : 
<Route 
  exact
  path="/dashboard/:entity/:eid/settings/administrator" 
  component={EntityDeleteButton} 
  id={props.data.id}
  collection={props.collection}
  gradient='cherry'
/> }

{/*--- Edit::Article ---*/}
{!props ? null : 
<Route
  exact 
  path="/dashboard/:entity/:eid/settings"
  component={FormEntityEdit}
  collection={props.collection}
  data={props.data}
  /> }

{/*--- 

Edit (/:eid/edit)

---*/}
{!(props.data && props.data.id) ? null : 
<Route 
  exact 
  path="/dashboard/:entity/:eid/edit"
  component={FormContentBasics}
  collection={props.collection}
  delta={props.data.id}
  />
}

{!(props.data && props.data.id) ? null : 
<Route 
  exact 
  path="/dashboard/:entity/:eid/edit" 
  component={MarkdownEditor} 
  collection={props.collection} 
  delta={props.data.id}
  markdownDefault={idx(props.data, _ => _.content.contentBody)}
  />}

{!props ? null :
<Route 
  exact 
  path="/dashboard/:entity/:eid/edit"
  component={EntityProfileGallery} 
  collection={props.collection}
  images={props.data.images}
/>}

</Box>
</Box>
}

const spinnerWhileLoading = (test) => branch(test,renderComponent(()=><SpinnerSquares gradient='cherry' />))
export default compose(
  spinnerWhileLoading(
    (props) =>!(props.data && props.data.id) ? true : false
  ),
)(Routes);
