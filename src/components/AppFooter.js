import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://hntechno.com/" target="_blank" rel="noopener noreferrer">
          Vijay Prajapati
        </a>
        <span className="ms-1">&copy; 2024 HN Techno.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://hntechno.com" target="_blank" rel="noopener noreferrer">
          HN Techno Ecommerce Admin Panel
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
