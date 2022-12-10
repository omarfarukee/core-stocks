import React from 'react';
 import img from '../image/pngwing.com (4) - Copy.png'
const Footer = () => {
  return (
    <div className='mt-10'>
      <footer className="footer footer-center p-10 bg-orange-200" data-aos='fade-up'>
        <div>
          <img src={img} className='h-28' alt="" />
          <p className="font-bold">
          Core-Stocks Limited, Since 1995 
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
              <a className='text-2xl text-green-200' target={'_blank'} href="https://www.facebook.com/profile.php?id=100064049902400"></a>
              <a className='text-2xl text-green-200' target={'_blank'} href="https://www.linkedin.com/in/omar-faruk-b66513257/"></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;