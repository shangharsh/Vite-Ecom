import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {

  return (
        <div className="row w-100 h-75 mt-2">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img className="w-75 h-75" src="/registration.png" alt="inquiry image"/>
            </div>
            <div className="col-5"> 
                <div className="card w-100 border-0 shadow-lg">
                    <div className="card-header">
                        <h3 className="text-center">Fill the form to signup.</h3>
                    </div>
                    <div className="card-body">
                        <RegisterForm/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RegisterPage;