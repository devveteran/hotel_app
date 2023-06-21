import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import Dropdown from 'antd/es/dropdown';
import { MenuProps, Space } from 'antd';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import HeaderLeft from '../headerleft';

const Header = () => {
    return (
        <header className='header header-sticky'>
            <div className='container'>
                <div  className={'svg-logo-wrapper'}>
                    <Link to={'/'}>
                        <img src={require('@images/logo.svg').default} className={'light-mode-item navbar-brand-item svg-logo'}/>
                        <img src={require('@images/logo-light.svg').default} className={'dark-mode-item navbar-brand-item  svg-logo'}/>
                    </Link>
                </div>
                <HeaderLeft />
            </div>
        </header>
    )
};
export default Header;