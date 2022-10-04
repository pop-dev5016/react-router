import React from 'react'
import { Link } from "react-router-dom"

const Missing = () => {
  return (
    <main className='Missing'>
        <h2>Page Not Found</h2>
        <p>well,that's disappointing</p>
        <p>
          <link to='/'>visit our webpage</link>
        </p>
    </main>

  )
}

export default Missing