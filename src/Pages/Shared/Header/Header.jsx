import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto p-4 w-[600px]' src={logo} alt="The Elara News" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D , YYYY")}</p>
        </div>
    );
};

export default Header;