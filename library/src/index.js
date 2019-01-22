import React from 'react'
import PropTypes from 'prop-types'

const Versionning = ({ version }) => (
  <h2 style={{ color: 'cyan' }}>{`This is v${version}`}</h2>
)

Versionning.propTypes = {
  version: PropTypes.string.isRequired,
}

export default Versionning
