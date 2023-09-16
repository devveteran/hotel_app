import { STORAGE_USERINFO_KEY } from "@constants/constants";
import { defaultUserInfo } from "@constants/types";
import { userInstance } from "@services/axios";
import { useState, useContext } from "react";
import { GlobalContext } from "@context/usercontext";
import {Md5} from 'ts-md5';


interface PropType {
    onCloseModal : () => void,
    onOpenSignUp : () => void,
}
const SignInModal = ({onCloseModal, onOpenSignUp} : PropType) => {
    const [email, setEmail] = useState<string>('');
    const [emailValidation, setEmailValidation] = useState<boolean>(true);
    const [password, setPassword] = useState<string>('');
    const {userInfo, setUserInfo} = useContext(GlobalContext);
    const [message, setMessage] = useState<string>('');

    const onChangeEmail = (v: any) => {
        setEmail(v.target.value);
    }
    
    const onChangePassword = (v: any) => {
        setPassword(v.target.value);
    }

    const signin = () => {
        const EmailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if(!EmailRegex.test(email)) {
            setEmailValidation(false);
        } else {
            setEmailValidation(true);
        }

        let val =  Md5.hashStr(password);
        let urlparam = email + ";" + val;
        urlparam = window.btoa(urlparam);

        userInstance().get(`/api/User/${urlparam}`).then((response) => {
            const data = response.data;
            
            if (data.length === 1) {
                setMessage('');
                setUserInfo(data[0]);
                // console.log(JSON.stringify(data[0]));
                
                localStorage.setItem(STORAGE_USERINFO_KEY, JSON.stringify(data[0]));
                onCloseModal();
            } else {
                setMessage('Please check your password and try again.')
                setUserInfo(defaultUserInfo);
                localStorage.setItem(STORAGE_USERINFO_KEY, JSON.stringify(defaultUserInfo));
            }
        }).catch(error => {
            console.log(error);
        });
    }

    return (
    <div className="modal fade show d-block" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true" style={{backgroundColor:'rgba(0, 0, 0, 0.8)'}}>
        <div className="modal-dialog" role="document" style={{top: '50%', transform: 'translateY(-50%)'}}>
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onCloseModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body mx-3">
                    <div className="md-form mb-4">
                        <i className="fas fa-envelope prefix grey-text"></i>
                        <input type="email" id="defaultForm-email" className={`form-control validate ${emailValidation === true ? '' : 'is-invalid'}`} value={email} onChange={onChangeEmail}/>
                        <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Email</label>
                    </div>

                    <div className="md-form mb-3">
                        <i className="fas fa-lock prefix grey-text"></i>
                        <input type="password" id="defaultForm-pass" className="form-control validate" value={password} onChange={onChangePassword}/>
                        <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Password</label>
                    </div>
                    {
                    message !== '' && (
                        <p className={`fs-6 fw-bold text-danger`}>{message}</p>
                    )
                }
                </div>
                
                <div className="modal-footer d-flex justify-content-end">
                    <button className="btn btn-primary px-6" onClick={signin}>SIGN IN</button>
                    <button className="btn btn-primary-soft" onClick={onOpenSignUp}>JOIN NOW</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default SignInModal;