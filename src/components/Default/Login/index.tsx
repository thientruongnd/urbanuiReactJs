/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';

interface isState{
	isState: boolean
}

class LoginComponent extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        return (
	        <form className="pt-3">
		        <div className="form-group">
			        <label htmlFor="exampleInputEmail">Username</label>
			        <div className="input-group">
				        <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0">
                                <i className="typcn typcn-user-outline text-primary" />
                            </span>
				        </div>
				        <input
                            type="text"
                            className="form-control form-control-lg border-left-0"
				               id="exampleInputEmail"
                            placeholder="Username"
				        />
			        </div>
		        </div>
		        <div className="form-group">
			        <label htmlFor="exampleInputPassword">Password</label>
			        <div className="input-group">
				        <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0">
                                <i className="typcn typcn-lock-closed-outline text-primary" />
                            </span>
				        </div>
				        <input
                            type="password"
				               className="form-control form-control-lg border-left-0"
				               id="exampleInputPassword"
                            placeholder="Password"
				        />
			        </div>
		        </div>
		        <div className="my-2 d-flex justify-content-between align-items-center">
			        <div className="form-check">
				        <label className="form-check-label text-muted">
					        <input type="checkbox" className="form-check-input" />
						        Keep me signed in
				        </label>
			        </div>
			        <a href="#" className="auth-link text-black">Forgot password?</a>
		        </div>
		        <div className="my-3">
			        <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">LOGIN</a>
		        </div>
		        <div className="mb-2 d-flex">
			        <button type="button" className="btn btn-facebook auth-form-btn flex-grow mr-1">
				        <i className="typcn typcn-social-facebook mr-2" />Facebook
			        </button>
			        <button type="button" className="btn btn-google auth-form-btn flex-grow ml-1">
				        <i className="typcn typcn-social-google-plus-circular mr-2" />Google
			        </button>
		        </div>
		        <div className="text-center mt-4 font-weight-light">
			        Don't have an account?
			        <a href="register-2.html" className="text-primary">Create</a>
		        </div>
	        </form>
        );
    }
}

export default LoginComponent;
