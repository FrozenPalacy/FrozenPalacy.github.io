import { BlogPost } from '../../types';
import { post as post4 } from './machine-learning-and-ai';
import { post as post5 } from './natural_geo';
import { post as post6 } from './hmath_function';
import { post as post7 } from './informal_logic';
import { post as post8 } from './logic_regulation';
import { post as post9 } from './it_and_society';
import { post as post10 } from './cpp_basic_tutorial';
import { post as post11 } from './hello_world';
import { post as post12 } from './202411midterm_pol';
import { post as post13 } from './pol_b4';
import { post as post14 } from './his_xb1';
import { post as post15 } from './oi_toposort';
import { post as post16 } from './pol_xb1';
import { post as post17 } from './solution_abc427a';
import { post as post18 } from './oi_dfs';
import { post as post19 } from './oi_halfsearch';
import { post as post20 } from './oi_basicmath';
import { post as post21 } from './oi_prefixsum';
import { post as post22 } from './oi_timecomplexity';
import { post as post23 } from './oi_binaryindexedtree';
import { post as post24 } from './it_algorithm';

const rawPosts: BlogPost[] = [
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
  post12,
  post13,
  post14,
  post15,
  post16,
  post17,
  post18,
  post19,
  post20,
  post21,
  post22,
  post23,
  post24
];

export const posts = rawPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
