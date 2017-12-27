import { removeProps } from 'styled-system'

const clean = props => {
  const rebassProps = removeProps(props)
  const next = {}

  for (let key in rebassProps) {
    if (dict[key]) continue
    next[key] = rebassProps[key]
  }

  return next
}

const dict = {
  authLogin: true,
  layout: true,
  b: true,
  backgroundImage: true, 
  border: true,
  bg: true,
  br: true,
  bi: true,
  bc: true,
  bs: true,
  dis: true,
  gradient: true,
  gradientDir: true,
  f: true,
  fw: true,
  flex: true,
  mh: true, 
  o: true,
  p: true,
  pos: true,
  position: true,
  py: true,
  px: true,
  level: true,
  t: true,
  ts: true,
  ta: true,
  textAlign: true,
  ratio: true,
  bold: true,
  caps: true,
  size: true,
  left: true,
  center: true,
  justify: true,
  top: true,
  right: true,
  bottom: true,
  zIndex: true,
  z: true,
}

export default clean
