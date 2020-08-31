import jsSHA from 'jssha'

const sha256Hash = text => {
  if (text.length > 0) {
    // eslint-disable-next-line new-cap
    const sha256 = new jsSHA('SHA-256', 'TEXT')
    sha256.update(text)
    return sha256.getHash('HEX')
  }
  return null
}

export {
  sha256Hash
}
