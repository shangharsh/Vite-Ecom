import React from 'react';
import Login from '../components/LoginForm';

const LoginPage = () => {

return (
          <div className="row w-100 h-75 mt-2">
            <div className="col-6 h-50 d-flex justify-content-center align-items-center">
              <img className="w-75 h-100" src='/inquiry.jpg' alt="inquiry image"/>
            </div>
            <div className="col-5"> 
            <div className="card w-100 border-0 shadow-lg">
              <div className="card-header">
                <h3 className="text-center">Login to Continue</h3>
              </div>
            <div className="card-body">
              <Login/>
            </div>
            </div>
            </div>
          </div>

  )
}

export default LoginPage


        