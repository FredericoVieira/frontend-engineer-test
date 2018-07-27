import React from 'react'

const Footer = () => (
  <footer className="footer">
    <p className="credits">
      Data provided for free by
      {' '}
      <a className="credits__link" href="https://iextrading.com/developer/" target="_blank">
        IEX
      </a>
      . View
      {' '}
      <a className="credits__link" href="https://iextrading.com/api-exhibit-a/" target="_blank">
        IEX’s sTerms of Use
      </a>
      .
    </p>
  </footer>
)

export default Footer
