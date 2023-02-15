import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon, NpmIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

  return (
    <>
      <SectionTitle
        title="VATSAT"
        caption="My Work"
        description="just a side project - Virtual Air Traffic Statistics and Tracking is what VATSAT stands for and is currently only just a performant tracker."
        button={{
          title: 'learn more',
          href: 'https://vatsat.pages.dev',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Concept Collective on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access powerful and flexible resources on GitHub with GNU GPL v3.0 license."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
              <SectionButton
                title="VATSAT on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Making tracking statistics and aircraft over multiple FSD-Networks easily accomplishable in one place."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
               /> 
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'Concept-Collective - GitHub',
                      isActive: currentState === 'github',
                    },
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'VATSAT - Github',
                      isActive: currentState === 'npm',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <GitHubWireframe
                      author="Concept-Collective"
                      license="GNU GPL v3.0"
                      repository="cc-chat"
                      description="Adds a chat theme for FiveM & RedM."
                    />
                  )}
                  {currentState === 'npm' && (
                    <GitHubWireframe
                      author="VATSAT"
                      license="GNU GPL v3.0"
                      repository="welcome"
                      description="Making tracking statistics and aircraft over multiple FSD-Networks easily accomplishable in one place."
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
