import React, { useState } from 'react'
import Loading from './Loading';
import { Alert } from '@mui/material';
import './Body.css'
const Body = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [fetchedUrl, SetFetchedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);


  const apiRequest = () => {
    if (inputUrl !== '') {
      setLoading(true)
      fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)
        .then((res) => res.json())
        .then((response) => {
          if (response.ok) {
            SetFetchedUrl(response.result.full_short_link2);
            setLoading(false);
            setSuccess(true);
          } else {
            setError(true);
            setErrorMessage(response.error);
            setLoading(false);
          }
        }
        )
        .catch((err) => {
          setError(true);
          setErrorMessage(err);
          setLoading(false);
        }
        );
    } else {
      setError(true);
      setErrorMessage("Please Input a URL");
      setLoading(false);
    }

  }
  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 home">
            <div className="row ">
              <h1 className='ml-5 heading'>More than just shorter Links</h1>

              <h5 className='ml-5'>Build your brand's recognition and get detailed insights on hoe your links are performing</h5>
            </div>
          </div>
          <div className="col-lg-4 svg">
            <img src="./developer.svg" alt="" />
          </div>
        </div>

      </div>

      <div className="container">
        {error && (<Alert style={{}} severity="error" onClose={() => { setError(false) }}>{errorMessage}</Alert>)}

        {success && <Alert severity="success" onClose={() => { setSuccess(false) }}>Url Shortened Successfully</Alert>}
        <div className="col-lg-11">
          <div className="row box">
            <input className='form-control in' 
              onChange={(e) => setInputUrl(e.target.value)}
              value={inputUrl}
              placeholder="Enter Your url Here"
            />
            <button
              onClick={apiRequest}>
              Fetch Shorten Url
            </button>
          </div>
          <div className="row box">
          {(fetchedUrl !== '') &&
          <>
          
        <span  >
        <span className='name'>fetched Url - </span> 
          <a className='link_new' href={`${fetchedUrl}`}>
            {fetchedUrl}
          </a>
        </span>
        </>}
          </div>
        </div>
      </div>






      <br />
     

      {loading && <Loading />}
    </div>
  )
}

export default Body