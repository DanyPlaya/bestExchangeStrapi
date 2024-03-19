import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogBlogHeader extends Schema.Component {
  collectionName: 'components_blog_blog_headers';
  info: {
    displayName: 'BlogHeader';
  };
  attributes: {
    Title: Attribute.String;
    TimeCreated: Attribute.Date;
    ReadTime: Attribute.Integer;
  };
}

export interface PageMeta extends Schema.Component {
  collectionName: 'components_page_metas';
  info: {
    displayName: 'meta';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.String;
  };
}

export interface PageSeo extends Schema.Component {
  collectionName: 'components_page_seos';
  info: {
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    meta: Attribute.Component<'page.meta'>;
    preventIndexing: Attribute.Boolean;
    structurData: Attribute.JSON;
    metaImage: Attribute.Media;
  };
}

export interface UiAccordion extends Schema.Component {
  collectionName: 'components_ui_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'stack';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    icon: 'stack';
  };
  attributes: {};
}

export interface UiCarousel extends Schema.Component {
  collectionName: 'components_ui_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    CarouselContent: Attribute.Media;
    CarouselTitle: Attribute.String;
  };
}

export interface UiTags extends Schema.Component {
  collectionName: 'components_ui_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.blog-header': BlogBlogHeader;
      'page.meta': PageMeta;
      'page.seo': PageSeo;
      'ui.accordion': UiAccordion;
      'ui.button': UiButton;
      'ui.carousel': UiCarousel;
      'ui.tags': UiTags;
    }
  }
}
