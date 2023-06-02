import React from 'react'
import loader from '../../assets/loading.gif';
const Loading = () => {
  return (
    <img src={loader} style={{ width:"100px", height:"100px"}}alt="loading..." />
  )
}

export default Loading;