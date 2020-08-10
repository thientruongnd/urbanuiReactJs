/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
// @ts-ignore
import Logo from '../../assets/logo/logo-salefie.png';

interface isState{
	isState: boolean
}
interface isProps{

	children: any
}
class DefaultComponent extends React.Component <isProps, isState> {
    constructor(props) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        const {
            children,
        } = this.props;
        console.log(children);
        return (
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                    <div className="row flex-grow">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <div className="auth-form-transparent text-left p-3">
                                <div className="brand-logo">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <h4>Welcome back!</h4>
                                <h6 className="font-weight-light">Happy to see you again!</h6>
	                            {children}
                            </div>
                        </div>
                        <div className="col-lg-6 login-half-bg d-flex flex-row">
                            <p className="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2018
								All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DefaultComponent;
