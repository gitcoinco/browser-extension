export const ContributorsList = values => values.map(i=> i.eid)

export const PhoneUnformatted = (value) => '+1'+value.replace(/[^0-9.]/g, "")

export const HotlineDirectory = index => ({
  rapidResponse: 'Rapid Response'
}[index])