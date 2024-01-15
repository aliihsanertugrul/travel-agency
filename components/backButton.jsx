import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <Button 
        as={Link} to="/" 
        variant='danger'
        className='rounded-0 position-fixed backButton'
        style={{bottom:"10px",right:"10px"}}>
      <i className='fa-solid fa-arrow-left me-2'></i>Home Page
    </Button>
  )
}

export default BackButton
