import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'typography',
    shows: ['typography'],
    title: 'Typography',
    description: 'Choose a font that is easy to read across different devices and sizes.',
  },
  {
    state: 'spacing',
    shows: ['typography', 'spacing'],
    title: 'Spacing',
    description: 'Ensure that there is enough space between elements to make them easy to distinguish.',
  },
  {
    state: 'colors',
    shows: ['typography', 'spacing', 'colors'],
    title: 'Colors',
    description: 'Choose a color scheme that is visually appealing and aligns with your brand.',
  },
  {
    state: 'effects',
    shows: ['typography', 'spacing', 'colors', 'effects'],
    title: 'Effects',
    description: 'Use effects like shadows and transitions to enhance the user experience.',
  },
  {
    state: 'responsiveness',
    shows: ['typography', 'spacing', 'colors', 'effects', 'responsiveness'],
    title: 'Responsiveness',
    description: 'Ensure that your design looks good on all screen sizes.',
  },
  {
    state: 'accessibility',
    shows: ['typography', 'spacing', 'colors', 'effects', 'responsiveness', 'accessibility'],
    title: 'Accessibility',
    description: 'Make sure your design is accessible to all users, including those with disabilities.',
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Eye Catching, Modern & Minimalist Design."
          caption="Clean & Intuitive"
          description="Keep the User Interface clean with a modern touch without
            compromising the User Experience."
        />
      </header>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['typography', 'spacing', 'colors', 'effects', 'responsiveness', 'accessibility']
                  }
                />
              </div>
              <div className={clsx('hidden', 'sm:block lg:hidden')}>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['typography', 'spacing', 'colors', 'effects', 'responsiveness', 'accessibility']
                  }
                  title="UI Implementation"
                  description="Start creating UI components using React and Tailwind CSS."
                  date="10:00 AM · Tomorrow"
                  tag1="Design"
                  tag2="Components"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
