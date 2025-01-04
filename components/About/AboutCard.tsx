import React from 'react';

import BentoBox from '../BentoBox';
import { GiCroissant, GiSpaceship } from 'react-icons/gi';
import { TbPokeball } from 'react-icons/tb';

// Adjust the path to BentoBox if necessary

function AboutCard() {
  return (
    <BentoBox className='mx-auto max-w-md rounded-lg bg-white bg-opacity-30 shadow-lg backdrop-blur-sm transition duration-300 dark:bg-gray-800'>
      <p className='mb-6 text-justify text-gray-800 dark:text-gray-200'>
        Hello, I am{' '}
        <span className='font-bold text-purple-700 dark:text-purple-400'>
          Reyaham Shrestha
        </span>
        , a passionate Full Stack Developer with deep expertise in modern web technologies and digital solutions. I specialize in building robust, scalable applications using Next.js, with a strong focus on Search Engine Optimization (SEO) to ensure maximum visibility and impact.
        <br />
        <br />
        My technical journey encompasses the entire web development spectrum, from crafting elegant front-end interfaces to architecting powerful back-end solutions. With a keen interest in emerging technologies and best practices, I consistently deliver solutions that combine performance, user experience, and search engine friendliness.
        <br />
        <br />
        Outside of my technical pursuits, I enjoy:
      </p>
      <ul className='mb-6 list-inside list-disc space-y-3 text-gray-800 dark:text-gray-300'>
        <li className='flex items-center'>
          <TbPokeball className='mr-2 text-2xl text-purple-700 dark:text-purple-400' />{' '}
          Gaming: Exploring the Pokémon universe
        </li>
        <li className='flex items-center'>
          <GiCroissant className='mr-2 text-2xl text-purple-700 dark:text-purple-400' />{' '}
          Culinary Adventures: Discovering cultures through food
        </li>
        <li className='flex items-center'>
          <GiSpaceship className='mr-2 text-2xl text-purple-700 dark:text-purple-400' />{' '}
          Traveling: Experiencing the wonders of the world
        </li>
      </ul>
      <p className='mb-4 italic text-gray-700 dark:text-gray-400'>
        &quot;As we code from the foothills of the Himalayas, let our work echo the resilience and adaptability of our people, creating digital bridges that connect Nepal to global opportunities while staying rooted in our unique cultural identity. Through technology, we can help write Nepal's next chapter in the digital age.&quot;
      </p>
      <p className='text-right text-sm text-gray-600 dark:text-gray-500'>
        — Reyaham Shrestha
      </p>
    </BentoBox>
  );
}

export default AboutCard;
