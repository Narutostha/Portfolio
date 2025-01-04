import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { EvervaultCard } from '../ui/evervault-card';
import { Check, Copy, MapPin } from 'lucide-react';
import { Instagram, MessageCircle } from 'lucide-react';

// Dynamically import the Globe component to disable SSR
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const BentoContact = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('bhuwanshrestha475@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section
      className='my-20 space-y-20 bg-background p-4 text-foreground'
      id='contact'>
      <div className='grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {/* Section 1: Introduction */}
        <div className='col-span-1 rounded-lg border border-border bg-card bg-opacity-50 p-6 shadow-lg backdrop-blur-lg backdrop-filter xl:row-span-3'>
          <div className='flex flex-col items-start justify-center'>
            <EvervaultCard
              text="Building Digital Excellence"
              className='h-48 w-full md:h-72 lg:h-80'
            />
            <div className='mt-4'>
              <p className='text-muted-foreground'>
                In the dynamic landscape of web development and digital marketing, 
                success lies in the perfect blend of technical excellence and strategic SEO. 
                Through years of experience, I've mastered the art of creating 
                high-performance web solutions that not only look great but also 
                rank effectively in search results.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Web Development Journey */}
        <div className='col-span-1 rounded-lg border border-border bg-card bg-opacity-50 p-6 shadow-lg backdrop-blur-lg backdrop-filter xl:row-span-3'>
          <div className='flex flex-col items-start justify-center'>
            <EvervaultCard
              text='Strategic Digital Solutions'
              className='h-48 w-full md:h-72 lg:h-80'
            />
            <div className='mt-4'>
              <p className='text-muted-foreground'>
                Each project is an opportunity to push the boundaries of web technology.
                By leveraging Next.js, React, and cutting-edge SEO practices, 
                I create digital experiences that not only engage users but also 
                drive measurable results through improved visibility and conversions.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Global Impact */}
        <div className='col-span-1 rounded-lg border border-border bg-card bg-opacity-50 p-6 shadow-lg backdrop-blur-lg backdrop-filter xl:row-span-4'>
          <div className='flex flex-col items-center justify-center'>
            <div className='h-80 w-full'>
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0, 0, 0, 0)'
                showAtmosphere
                showGraticules
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                labelsData={[
                  {
                    lat: 27.7172,
                    lng: 85.3240,
                    text: 'Kathmandu, Nepal',
                    color: 'white',
                    size: 15
                  }
                ]}
              />
            </div>
            <div className='mt-4 text-center'>
              <p className='text-2xl font-bold text-foreground'>
                Digital Solutions Without Borders
              </p>
              <p className='mt-2 text-muted-foreground'>
                From Kathmandu to the world, delivering web solutions that transcend 
                geographical boundaries. Specializing in creating digital experiences 
                that make a global impact while maintaining local relevance.
              </p>
              <Button
                variant='outline'
                className='mt-6 w-full'>
                <MapPin className='mr-2' /> Connect
              </Button>
            </div>
          </div>
        </div>

        {/* Section 4: Development Philosophy */}
        <div className='rounded-lg border border-border bg-card bg-opacity-50 p-6 shadow-lg backdrop-blur-lg backdrop-filter xl:col-span-2 xl:row-span-3'>
          <div className='flex flex-col items-start justify-center'>
            <EvervaultCard
              text='Code, Optimize, Succeed'
              className='h-32 w-full md:h-48 lg:h-56'
            />
            <div className='mt-4'>
              <p className='text-muted-foreground'>
                My approach combines technical expertise with strategic thinking.
                Every line of code is written with performance in mind, every design
                decision is made with user experience at heart, and every deployment
                is optimized for search engines. This holistic approach ensures
                your digital presence stands out in today's competitive landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Connect */}
        <div className='rounded-lg border border-border bg-card bg-opacity-50 p-6 shadow-lg backdrop-blur-lg backdrop-filter xl:col-span-1 xl:row-span-2'>
          <div className='flex flex-col items-center'>
            <EvervaultCard
              text="Let's Create Together"
              className='h-32 w-full md:h-48 lg:h-56'
            />
            <div className='mt-4 w-full space-y-2'>
              <p className='text-center text-muted-foreground'>
                Ready to elevate your digital presence? Whether you need a high-performance
                website, SEO optimization, or comprehensive digital solutions, let's
                collaborate to bring your vision to life.
              </p>
              <Button
                className='flex w-full items-center justify-center'
                variant='outline'
                onClick={handleCopy}>
                {hasCopied ? (
                  <Check className='mr-2' />
                ) : (
                  <Copy className='mr-2' />
                )}
                <span>
                  {hasCopied ? 'Copied!' : 'bhuwanshrestha475@gmail.com'}
                </span>
              </Button>
              <div className='mt-4 flex justify-center space-x-4'>
                <a
                  href='https://instagram.com/reyaham_/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Button
                    variant='outline'
                    size='icon'>
                    <Instagram size={20} />
                  </Button>
                </a>
                <a
                  href='https://wa.me/+9779804936669'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Button
                    variant='outline'
                    size='icon'>
                    <MessageCircle size={20} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoContact;