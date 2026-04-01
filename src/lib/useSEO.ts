/**
 * SEO Meta Tags Hook
 * Updates document head with SEO metadata
 */

import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export const useSEO = ({ title, description, url, image }: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | Lucas Castro - Full-Stack Developer`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags
    const updateOG = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateOG('og:title', `${title} | Lucas Castro`);
    updateOG('og:description', description);
    if (url) updateOG('og:url', url);
    if (image) updateOG('og:image', image);
    updateOG('og:type', 'website');

    // Update Twitter Card
    const updateTwitter = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateTwitter('twitter:card', 'summary_large_image');
    updateTwitter('twitter:title', `${title} | Lucas Castro`);
    updateTwitter('twitter:description', description);
    if (image) updateTwitter('twitter:image', image);
  }, [title, description, url, image]);
};
