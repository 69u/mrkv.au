import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import React, { useEffect,useState } from 'react';

interface SlideshowProps {
  slides: string;
}

function Slideshow({ slides }: SlideshowProps) {
  const parsedSlides = JSON.parse(slides);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const handleClick = (action) => {
    let newIndex = currentSlideIndex;

    if (action === 'thumbnail') {
      setIsModalOpen(true);
      setIsLoading(true);
      setIsPaused(true);
    } else if (action === 'prev') {
      newIndex = (currentSlideIndex - 1 + parsedSlides.length) % parsedSlides.length;
    } else if (action === 'next') {
      newIndex = (currentSlideIndex + 1) % parsedSlides.length;
    }

    setCurrentSlideIndex(newIndex);
  };

  useEffect(() => {
    if (isPaused || !parsedSlides.length) {
      return () => {}; // Return no-op function if condition is met
    }
  
    const timer = setInterval(() => {
      setCurrentSlideIndex((currentSlideIndex + 1) % parsedSlides.length);
    }, 3000); // Change image every 3 seconds
  
    return () => clearInterval(timer); // Clean up on unmount
  }, [currentSlideIndex, parsedSlides.length, isPaused]);

  return (
    <div className="relative">
      <Image src={parsedSlides[currentSlideIndex]?.image} alt="" width={500} height={300} className="w-full cursor-zoom-in" onClick={() => handleClick('thumbnail')} />
      <Dialog open={isModalOpen} onClose={() => {setIsModalOpen(false); setIsPaused(false);}} className="fixed inset-0 flex items-center justify-center z-[902]">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        {isLoading && <div>Loading...</div>}
        <Image src={parsedSlides[currentSlideIndex]?.highResImage} alt="" width={6000} height={4000} style={{objectFit: "contain"}} className="max-h-[96vh] max-w-[75vw] mt-[4vh] z-50 cursor-zoom-out" onClick={() => {setIsModalOpen(false); setIsPaused(false);}} onLoad={() => setIsLoading(false)} />
        <button
          type="button"
          className="absolute top-1/2 left-0 ml-[5vw] hover:bg-slate-100 hover:dark:bg-[#1d263a] bg-slate-100 dark:bg-[#1d263a] p-2"
          onClick={() => handleClick('prev')}
        >
          Prev
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-0 mr-[5vw] hover:bg-slate-100 hover:dark:bg-[#1d263a] bg-slate-100 dark:bg-[#1d263a] p-2"
          onClick={() => handleClick('next')}
        >
          Next
        </button>
      </Dialog>
      <button
        type="button"
        className="absolute top-1/2 left-0 hover:bg-slate-100 hover:dark:bg-[#1d263a] bg-slate-100 dark:bg-[#1d263a] p-2"
        onClick={() => setCurrentSlideIndex((currentSlideIndex - 1 + parsedSlides.length) % parsedSlides.length)}
      >
        Prev
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-0 hover:bg-slate-100 hover:dark:bg-[#1d263a] bg-slate-100 dark:bg-[#1d263a] p-2"
        onClick={() => setCurrentSlideIndex((currentSlideIndex + 1) % parsedSlides.length)}
      >
        Next
      </button>
    </div>
  );
}

export default Slideshow;