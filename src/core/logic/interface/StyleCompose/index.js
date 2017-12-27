import _ from 'lodash'
export default (styled) => _.curry(_.curry((styles,props)=> ({...props,...styles})))(styled)