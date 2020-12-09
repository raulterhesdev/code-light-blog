import React from 'react';
import url from 'url';

import config from '../../../utils/siteConfig';
import ArticleMeta from './ArticleMeta';
import WebsiteMeta from './WebsiteMeta';
import { Location, Post, Tag } from '../../../types';
/**
 * MetaData will generate all relevant meta data information incl.
 * JSON-LD (schema.org), Open Graph (Facebook) and Twitter properties.
 *
 */

type MetaDataTypes = {
  data?: {
    ghostPost?: Post;
    ghostTag?: Tag;
  };
  location: Location;
  type?: string;
};

const MetaData: React.FC<MetaDataTypes> = ({ data = {}, location }) => {
  const canonical: string = 'https://raulterhes.com';
  const { ghostPost, ghostTag } = data;
  let title: string;
  let description: string;

  if (ghostPost) {
    return <ArticleMeta data={ghostPost} canonical={canonical} />;
  } else if (ghostTag) {
    return <WebsiteMeta data={ghostTag} canonical={canonical} type='Series' />;
  } else {
    title = config.siteTitleMeta;
    description = config.siteDescriptionMeta;
    //   image = image || settings.cover_image || null;

    //   image = image ? url.resolve(config.siteUrl, image) : null;

    return (
      <WebsiteMeta
        data={{}}
        canonical={canonical}
        title={title}
        description={description}
        type='WebSite'
      />
    );
  }
};
export default MetaData;
