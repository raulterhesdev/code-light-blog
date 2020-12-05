import { Tag } from './index';

export type Post = {
  featured: boolean;
  id: number;
  title: string;
  feature_image: string;
  html: string;
  primaryAuthor: { name: string };
  created_at: string;
  created_at_pretty: string;
  tags: Tag[];
  slug: string;
  excerpt: string;
};
