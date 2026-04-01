/**
 * i18n Utilities
 * Helper functions for internationalization
 */

import { useTranslation } from 'react-i18next';
import type { Experience, Education } from '../content/content';

export const useLocalizedContent = () => {
  const { i18n } = useTranslation();

  const getLocalizedText = (
    enText: string | string[],
    ptText: string | string[]
  ): string | string[] => {
    return i18n.language === 'pt' ? ptText : enText;
  };

  const formatExperience = (exp: Experience): Experience => {
    return {
      ...exp,
      title: getLocalizedText(exp.titleEn, exp.titlePt) as string,
      description: getLocalizedText(
        exp.descriptionEn,
        exp.descriptionPt
      ) as string[],
    } as Experience;
  };

  const formatEducation = (edu: Education): Education => {
    return {
      ...edu,
      degree: getLocalizedText(edu.degreeEn, edu.degreePt) as string,
    } as Education;
  };

  return {
    getLocalizedText,
    formatExperience,
    formatEducation,
  };
};

/**
 * SEO Utilities
 */

export const getSEOMetaTags = (pageTitle: string, pageDescription: string) => {
  return {
    title: pageTitle,
    description: pageDescription,
    'og:title': pageTitle,
    'og:description': pageDescription,
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': pageTitle,
    'twitter:description': pageDescription,
  };
};
