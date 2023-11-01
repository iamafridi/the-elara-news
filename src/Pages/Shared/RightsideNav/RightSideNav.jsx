import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle className='text-2xl'></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className='text-2xl'></FaGithub>
                    Login With Github
                </button>
            </div>
            {/* FInd US On */}
            <div className='p-4  mb-6 '>
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a className='p-4 flex items-center gap-4 text-lg border rounded-t-lg' href="">
                    <FaFacebook className='text-2xl'></FaFacebook>
                    Facebook
                </a>
                <a className='p-4 flex items-center gap-4 text-lg border-x ' href="">
                    <FaInstagram className='text-2xl'></FaInstagram>
                    Instagram
                </a>
                <a className='p-4 flex items-center gap-4 text-lg border rounded-b-lg' href="">
                    <FaTwitter className='text-2xl'></FaTwitter>
                    Twitter
                </a>
            </div>
            {/* Q Zone */}
            <div className='bg-[#F3F3F3] p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zone</h2>
                <img className='mb-10' src={qzone1} alt="" />
                <img className='mb-10' src={qzone2} alt="" />
                <img className='mb-10' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;