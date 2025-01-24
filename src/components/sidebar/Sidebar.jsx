'use client';
import Magnetic from '../magnetic/magnetic';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { FiLinkedin, FiMail } from 'react-icons/fi';

import './sidebar.scss';

const Sidebar = () => {
  return (
    <motion.div
      className='sidebar'
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className='social'>
        <Magnetic>
          <Link
            data-icon='email'
            href='mailto:rebeccawolete01@gmail.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconContext.Provider value={{ style: { strokeWidth: '2px' } }}>
              <FiMail className='soc-item soc-icon' />
            </IconContext.Provider>
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            data-icon='linkedin'
            href='https://www.linkedin.com/in/rebecca-wolete-andreasson-b8074b1aa/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconContext.Provider value={{ style: { strokeWidth: '2px' } }}>
              <FiLinkedin className='soc-item soc-icon' />
            </IconContext.Provider>
          </Link>
        </Magnetic>
      </div>
    </motion.div>
  );
};

export default Sidebar;
