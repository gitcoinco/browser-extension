/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import idx from './idx'
import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Globalize from 'globalize';
import { Absolute } from 'particles'
import { Block } from 'atomic'
import { CalendarItem } from 'logic/interface/DataScaffold'
BigCalendar.setLocalizer(
  BigCalendar.globalizeLocalizer(Globalize)
);
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
/* ------------------------------- Component -------------------------------- */
export default ({
  data, dataFeed, culture, cultures, cultureChange, styledContainer, styledCalendar, ...props
}) =>{
if(!dataFeed) return null
const dataFeedNew = _.map(dataFeed, item=>({
  title: idx(item, _=> _.name.nameDisplay),
  start: idx(item, _=> _.date.dateStart)? moment(idx(item, _=> _.date.dateStart)).format(): null,
  end: idx(item, _=> _.date.dateEnd)? moment(idx(item, _=> _.date.dateEnd)).format(): null,
}))
const t = CalendarItem(dataFeed)
return <Block {...styledContainer} is='div' >
  <Absolute top bottom left right bg='white' color='charcoal' {...styledCalendar} >
    <BigCalendar
      culture={'es'}
      events={dataFeedNew ? dataFeedNew : []}
      views={allViews}
      step={60}
    />
  </Absolute>
  </Block>
}