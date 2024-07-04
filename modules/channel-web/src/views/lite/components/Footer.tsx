import React from 'react'
import { FormattedMessage } from 'react-intl'

const Footer = () => {
  return (
    <span>
      <div className={'bpw-powered'}>
        <span>
          <FormattedMessage
            id="footer.poweredBy"
            defaultMessage="Feito com amor por UnB"
          />
        </span>
      </div>
    </span>
  )
}

export default Footer