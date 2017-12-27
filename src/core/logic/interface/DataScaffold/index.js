import _ from 'lodash'
import idx from './idx'
import moment from 'moment';
export const CalendarItem = data => _.map(data, item=>({
  title: idx(item, _=> _.name.nameDisplay),
  start: idx(item, _=> _.date.dateStart)? moment(idx(item, _=> _.date.dateStart)).format(): null,
  end: idx(item, _=> _.date.dateEnd)? moment(idx(item, _=> _.date.dateEnd)).format(): null,
}))


export const DataFormEntityEdit = data => ({
  biography: data.biography,
  contact: data.contact,
  name: data.name,
  metadata: data.metadata,
})
export const DataEntityHero = data => ({
  images: data.images,
  name: data.name,
  metadata: data.metadata,
})

export const HotlineItem = data => ({
  name: idx(data, _=> _.name.nameDisplay),
  dateStart: idx(data, _=> _.date.dateStart)
            ? moment(idx(data, _=> _.date.dateStart)).format("MM-DD-YYYY")
            : null,
  dateEnd: idx(data, _=> _.date.dateEnd)
            ? moment(idx(data, _=> _.date.dateEnd)).format("MM-DD-YYYY")
            : null,
  hotline: HotlineDirectory(idx(data, _=> _.hotline.hotlineSelection)),
  days:  idx(data, _=> _.time.days) 
    ? Object.keys(idx(data, _=> _.time.days)).map(key=>DayDirectory(key))
    : null,
  hourStart:  idx(data, _=> _.time.hourStart),
  hourEnd:  idx(data, _=> _.time.hourEnd),
})

export const HotlineDirectory = index => ({
  rapidResponse: 'Rapid Response',
  generalInformation: 'General Information',
}[index])

export const DayDirectory = index => ({
  dayMonday: 'Monday',
  dayTuesday: 'Tuesday',
  dayWednesday: 'Wednesday',
  dayThursday: 'Thursday',
  dayFriday: 'Friday',
  daySaturday: 'Saturday',
  daySunday: 'Sunday',
}[index])


export const ScaffoldCommercePaymentSourceCard = props => ({
  brand:  idx(props, _=> _.token.card.brand),
  created:  idx(props, _=> _.token.created),
  exp_month:  idx(props, _=> _.token.card.exp_month),
  exp_year:  idx(props, _=> _.token.card.exp_year),
  funding:  idx(props, _=> _.token.card.funding),
  last4:  idx(props, _=> _.token.card.last4),
  object: idx(props, _=> _.token.card.object),
  name: idx(props, _=> _.token.card.name),
})

export const CommerceProductPriceSum = data => _.reduce(data, (priceTotal, document)=> priceTotal + Number(document.price.priceDefault), 0 ).toFixed(2)


// Ethers
export const EthersBlockFlowIn = data => ({
  ...data,
  gasLimit: data.gasUsed.toString(),
  gasUsed: data.gasUsed.toString(),
  hash: data.hash.toString(),
})