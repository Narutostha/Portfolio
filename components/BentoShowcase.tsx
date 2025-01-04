'use client';

import BlurIn from '@/components/magicui/blur-in';
import { FadeIn } from '@/components/magicui/fade-in';
import MeteorShower from '@/components/magicui/meteors';
import WordPullUp from '@/components/magicui/word-pull-up';
import { Button } from '@/components/ui/button';

import { Instagram, Mail } from 'lucide-react'; // Ensure you import an appropriate Instagram icon

export default function BentoShowcase() {
  return (
    <div className='relative mx-auto flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
      <div className='z-50 flex h-full flex-col items-start justify-center overflow-hidden p-6'>
        <WordPullUp words='Code Meets SEO' />

        <div className='w-full text-xs text-neutral-500 dark:text-neutral-400 sm:text-sm md:text-lg lg:px-1'>
          <BlurIn className='w-3/4 sm:w-2/3'>
            Crafting smart, scalable solutions for the web. Less errors, more visibility.
          </BlurIn>

          <FadeIn
            direction='down'
            className='my-class'>
            <div className='mt-3 flex w-full items-center gap-2 sm:mt-4 lg:w-2/3'>
              <a
                href='https://www.instagram.com/reyaham_/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1'>
                <Button
                  variant='default'
                  size='sm'
                  className='group/Instagram flex w-full items-center gap-2'>
                  <div className='text-xs sm:text-sm'>Instagram</div>
                  <Instagram className='h-3 w-3 transition-all duration-300 lg:group-hover/Instagram:translate-x-1' />
                </Button>
              </a>

              <a
                href='mailto:bhuwanshrestha475@gmail.com'
                target='_blank'
                className='flex-1'>
                <Button
                  variant='default'
                  size='sm'
                  className='group/Mail flex w-full items-center gap-2'>
                  <div className='text-xs sm:text-sm'>Get in Touch</div>
                  <Mail className='h-3 w-3 transition-all duration-300 lg:group-hover/Mail:translate-x-1' />
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
      <MeteorShower />
    </div>
  );
}
