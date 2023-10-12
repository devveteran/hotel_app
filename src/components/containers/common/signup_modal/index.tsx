import { STORAGE_USERINFO_KEY } from "@constants/constants";
import { defaultUserInfo } from "@constants/types";
import { GlobalContext } from "@context/usercontext";
import { userInstance } from "@services/axios";
import { useContext, useState } from "react";
import { Md5 } from 'ts-md5';

interface PropType {
    onCloseModal : () => void,
}

const SignupModal = ({onCloseModal} : PropType) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [emailValidation, setEmailValidation] = useState<boolean>(true);
    const [pwdValidation, setPwdValidation] = useState<boolean>(true);
    const [pwdRecheckValidation, setPwdRecheckValidation] = useState<boolean>(true);
    const [message, setMessage] = useState<string>('');
    const {userInfo, setUserInfo} = useContext(GlobalContext);
    
    const onChangeName = (v: any) => {
        setName(v.target.value);
    }

    const onChangePassword = (v: any) => {
        setPassword(v.target.value);
    }

    const onChangeConfirmPassword = (v: any) => {
        setConfirmPassword(v.target.value);
    }

    const onChangeEmail = (v: any) => {
        setEmail(v.target.value);
    }

    const signUp = () => {
        const EmailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if(!EmailRegex.test(email)) {
            setEmailValidation(false);
            setMessage('Please check your email.');
            return;
        } else {
            setMessage('');
            setEmailValidation(true);
        }
        if (password.trim() === '') {
            setPwdValidation(false);
            setMessage('Please enter password.');
            return;
        } else {
            setPwdValidation(true);
            setMessage('');
        }

        if (password !== confirmPassword) {
            setPwdRecheckValidation(false);
            setMessage('Please re-check your password');
            return;
        } else {
            setMessage('');
            setPwdRecheckValidation(true);
        }

        let val =  Md5.hashStr(password);
        let urlparam = name + ";" + email + ";" + val;
        urlparam = window.btoa(urlparam);

        let param = window.btoa(email);
        userInstance().get(`api/User/check/${param}`).then((response) => {
            let res = response.data as boolean;
            if (res === true) {
                setEmailValidation(false);
                setMessage('Another account related to this email already exists.');
            } else if (res === false) {
                setEmailValidation(true);
                setMessage('');

                userInstance().post(`/User/${urlparam}`).then((response) => {
                    const data = response.data;
                    
                    if (data.value?.detail?.toLowerCase() === "duplicate") {
                        setMessage("Another account related to this email already exists.");
                        setEmailValidation(false);
                        return;
                    } else if (data?.id > 0){
                        setUserInfo(data);
                        localStorage.setItem(STORAGE_USERINFO_KEY, JSON.stringify(data));
                        setMessage("");
                        setEmailValidation(true);
                        onCloseModal();
                    }
                    //     setMessage('');
                    
                    //     if (result.result === 'success') {
                    //         // setUserInfo(data[0]);
                    //         // console.log(JSON.stringify(data[0]));
                            
                    //         // localStorage.setItem(STORAGE_USERINFO_KEY, JSON.stringify(data[0]));
                    //         onCloseModal();
                    //     } else if (result.result === 'duplicate') {
                    //         setMessage('Another account related to this email already exists.');
                    //         return;
                    //     } else {
                    //         setMessage('Please try again.');
                    //         return;
                    //     }
                    // } else {
                    //     setMessage('Connection error... Please try again.');
                    //     setUserInfo(defaultUserInfo);
                    //     localStorage.setItem(STORAGE_USERINFO_KEY, JSON.stringify(defaultUserInfo));
                }).catch(error => {
                    console.log(error);
                    setMessage("Connection error, Please try again.");
                });
            }
        });

        
    }

    return (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
        style={{backgroundColor:'rgba(0, 0, 0, 0.8)'}}>
            <div className="modal-dialog" role="document" style={{top: '50%', transform: 'translateY(-50%)'}}>
                <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onCloseModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body mx-3">
                    <div className="md-form mb-3">
                        <i className="fas fa-user prefix grey-text"></i>
                        <input type="text" id="orangeForm-name" className="form-control validate" value={name} onChange={onChangeName}/>
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-name">Name</label>
                    </div>
                    <div className="md-form mb-3">
                        <i className="fas fa-envelope prefix grey-text"></i>
                        <input type="email" id="orangeForm-email" className={`form-control validate ${emailValidation === true ? '' : 'is-invalid'}`}
                            value={email} onChange={onChangeEmail} />
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">Email</label>
                    </div>

                    <div className="md-form mb-3">
                        <i className="fas fa-lock prefix grey-text"></i>
                        <input type="password" id="orangeForm-pass" className={`form-control validate ${pwdValidation === true ? '' : 'is-invalid'}`}
                            value={password} onChange={onChangePassword} />
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-pass">Password</label>
                    </div>

                    <div className="md-form mb-3">
                        <i className="fas fa-lock prefix grey-text"></i>
                        <input type="password" id="orangeForm-pass-confirm" className={`form-control validate ${pwdRecheckValidation === true ? '' : 'is-invalid'}`} 
                            value={confirmPassword} onChange={onChangeConfirmPassword} />
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-pass-confirm">Confirm password</label>
                    </div>
                    {
                    message !== '' && (
                        <p className={`fs-6 fw-bold text-danger`}>{message}</p>)
                    }
                </div>

                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-primary px-6" onClick={signUp}>SIGN UP</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default SignupModal;