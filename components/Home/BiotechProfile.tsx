import React, { memo, useMemo } from 'react';

import Image from 'next/image';

import { useTheme } from 'next-themes';

import BentoBox from '../BentoBox';
import { motion } from 'framer-motion';
import { RiTwitterXLine } from 'react-icons/ri';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://www.instagram.com/reyaham_/',
    Icon: FaInstagram,
    label: 'Instagram'
  },
  {
    href: 'https://facebook.com/narutooffi07',
    Icon: FaFacebookF,
    label: 'Facebook'
  },
  {
    href: 'https://www.linkedin.com/in/reyaham-shrestha-/',
    Icon: AiFillLinkedin,
    label: 'LinkedIn'
  },
  {
    href: 'https://x.com/ReyahamShrestha',
    Icon: RiTwitterXLine,
    label: 'Twitter'
  }
];

// Changed {} to unknown
const GradientText: React.FC<React.PropsWithChildren<unknown>> = memo(
  ({ children }) => (
    <span className='bg-gradient-to-r from-blue-light to-purple-light bg-clip-text text-transparent'>
      {children}
    </span>
  )
);

const BiotechProfile: React.FC = () => {
  const { theme } = useTheme();

  const colors = useMemo(() => {
    const mutedColor = theme === 'dark' ? 'text-[#EAEAFF]' : 'text-[#16141E]';
    const glowColorPrimary =
      theme === 'dark' ? 'rgba(0, 191, 174, 0.2)' : 'rgba(0, 191, 174, 0.5)';
    const glowColorSecondary =
      theme === 'dark' ? 'rgba(127, 0, 255, 0.2)' : 'rgba(127, 0, 255, 0.5)';
    return { mutedColor, glowColorPrimary, glowColorSecondary };
  }, [theme]);

  return (
    <section className='relative min-h-[50vh] py-20'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          <div className='space-y-8'>
            <BentoBox
              className='bg-opacity-30 backdrop-blur-sm'
              glowColor={colors.glowColorPrimary}>
              <h1 className={`mb-4 text-4xl font-bold md:text-5xl`}>
              Where Code Meets <GradientText>Search Intent,</GradientText> Performance
                <br />
                <GradientText>Meets Purpose</GradientText>
              </h1>
              <p className={`text-xl ${colors.mutedColor}`}>
              From semantic HTML structures to lightning-fast Next.js applications, my approach combines technical precision with SEO artistry, ensuring your digital presence not only ranks well but resonates with your target audience.
                    <li>🎯 Strategic Development</li>  <li>🔍 SEO Mastery </li> <li> ⚡ Performance Optimization</li>
              </p>
            </BentoBox>

            <BentoBox
              className='bg-opacity-30 backdrop-blur-sm'
              glowColor={colors.glowColorSecondary}>
              <h2 className={`mb-4 text-2xl font-semibold`}>Expertise</h2>
              <ul className={`grid grid-cols-2 gap-2 ${colors.mutedColor}`}>
                {[
                  'Next.js & React',
                  'Full-Stack Development',
                  'SEO Optimization',
                  'Web Performance',
                  'Cloud Solutions',
                  'DevOps & CI/CD',
                  'UI/UX Design',
                  'TypeScript & JavaScript',
                  'Digital Marketing',
                  'IT Consultancy',
                  'Web Analytics',
                  'Project Management'
                ].map((item) => (
                  <li
                    key={item}
                    className='flex items-center'>
                    <span className='mr-2 text-blue-light'>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </BentoBox>
          </div>

          <div className='relative mx-auto h-80 w-80'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <Image
                src='/dna-helix.svg'
                width={300}
                height={150}
                alt='DNA Helix'
                className='h-full w-full object-contain'
              />
            </div>
            <motion.div
              className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform'
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
              <Image
                src='/avatar.svg'
                alt='avatar'
                width={200}
                height={200}
                className='rounded-full border-4 border-secondary shadow-lg'
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='mt-16 text-center'>
          <h2 className={`mb-6 text-3xl font-bold`}>Connect & Collaborate</h2>
          <p className={`mb-8 text-xl`}>
            Got a tricky biology problem that needs a tech solution? I
            specialize in turning complex life science challenges into elegant
            code. From gene sequencing to protein folding, I'm here to help your
            team make sense of the data and push research forward. Let&apos;s
            build something great together.
          </p>
          <ul className='flex justify-center space-x-6'>
            {socialLinks.map(({ href, Icon, label }) => (
              <motion.li
                key={href}
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}>
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='text-2xl text-primary'
                  aria-label={label}>
                  <Icon />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

// Set display name for the component
BiotechProfile.displayName = 'BiotechProfile';

export default BiotechProfile;
