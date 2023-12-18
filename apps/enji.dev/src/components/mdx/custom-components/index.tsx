import { H2, H3 } from './Heading';
import { Hr } from './Hr';
import { Link } from './Link';
import { Pre } from './Pre';
import Slideshow from './Slideshow';
import { Table } from './Table';

import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  a: Link,
  h2: H2,
  h3: H3,
  hr: Hr,
  pre: Pre,
  table: Table,
  Slideshow
};

export default components;
