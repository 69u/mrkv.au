import clsx from 'clsx';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';

const HeaderImage = () => {
  const controls = useAnimationControls();

  return (
    <div
      className={clsx('relative h-[590px] w-[603px]')}
      style={{
        maskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
      }}
    >
      <div
        className={clsx(
          'absolute top-0 right-0 h-[590px] w-[375px] rounded-full bg-gradient-to-t from-primary-400/20 via-primary-400/0',
          'dark:from-primary-600/10 dark:via-primary-600/0'
        )}
      >
        <motion.div
          className={clsx('absolute right-0 bottom-0 overflow-hidden')}
          initial={{
            opacity: 0,
            x: 64,
          }}
          animate={controls}
          transition={{ delay: 0.4 }}
        >
          <Image
            alt="Enji Kusnadi Illustration"
            src="/me.png"
            width={457}
            height={526}
            className={clsx('max-w-none', 'dark:brightness-[.82]')}
            quality={100}
            onLoadingComplete={() => {
              controls.start({
                opacity: 1,
                x: 0,
              });
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderImage;
