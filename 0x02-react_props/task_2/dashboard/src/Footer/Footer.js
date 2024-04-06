import React from 'react'
import './Footer.css';
import { getFullYear , getFooterCopy} from '../utils/utils'

const Footer = () => {
  return (
    <div>
        <div className="App-footer">
        <em>
        <p>Copyright {getFullYear()}- {getFooterCopy(true)}</p>
        </em>
      </div>
    </div>
  )
}

export default Footer