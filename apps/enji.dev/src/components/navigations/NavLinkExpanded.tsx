import clsx from 'clsx';
import { AnimatePresence,m } from 'framer-motion';
import React from 'react';

import { ChevronRightIcon } from '@/components/Icons';
import NavLink from '@/components/navigations/NavLink';

import type { NavLinkProps } from '@/components/navigations/NavLink';

interface NavLinkExpandedProps {
  title: string;
  items: Array<NavLinkProps>;
  isOpen: boolean;
  onClick: () => void;
}

function NavLinkExpanded({ title, items, isOpen, onClick }: NavLinkExpandedProps) {
  return (
    <div className={clsx('flex')} onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0}>
      <div
        className={clsx(
          'nav-link nav-link--label pointer-events-none ml-2 mr-2'
        )}
      >
        {title}
        <ChevronRightIcon className={clsx('h-3 w-3')} />
      </div>
      <AnimatePresence>
      {isOpen && ( 
      <m.ul layout className={clsx('flex items-center')} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        {items.map((item, idx) => (
          <React.Fragment key={item.href}>
            <m.li>
              <NavLink title={item.title} href={item.href} />
            </m.li>
            {idx !== items.length - 1 && (
              <m.li>
                <div className="nav-link__separator">&middot;</div>
              </m.li>
            )}
          </React.Fragment>
        ))}
      </m.ul>
      )}
      </AnimatePresence>
    </div>
  );
}

export default NavLinkExpanded;
