import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import Dropdown from 'antd/es/dropdown';
import { MenuProps, Space } from 'antd';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import HeaderLeft from '../headerleft';

interface PropType {
    scroll: boolean,
}
const Header = ({scroll} : PropType) => {
    return (
        <header className={`header-sticky ${scroll ? 'header-sticky-on' : ''}`}>
            <nav className='navbar navbar-expand-xl'>
                <div className='container'>
                    <Link className="navbar-brand" to={'/'}>
                        <img className="light-mode-item navbar-brand-item" src={require('@images/logo.svg')} alt="logo" />
                        <img className="dark-mode-item navbar-brand-item" src={require('@images/logo-light.svg').default} alt="logo" />
                    </Link>                    
                    {/* <div className={'svg-logo-wrapper'}>
                        <Link to={'/'}>
                            <img src={require('@images/logo.svg').default} className={'light-mode-item navbar-brand-item svg-logo'}/>
                            <img src={require('@images/logo-light.svg').default} className={'dark-mode-item navbar-brand-item  svg-logo'}/>
                        </Link>
                    </div> */}
                    <HeaderLeft />
                </div>
            </nav>
        </header>
    )
};
export default Header;