import type { Nil } from './common-types';

export const APP_URL = 'https://Shopping.vercel.app';
export const APP_TITLE = 'Shopping';
export const APP_DESCRIPTION = `${APP_TITLE} is a simple Product Catalog website demo built with Next.js`;

export const createMockArray = (length: number) => {
  return Array.from(Array(length).keys());
};

export const isNil = (value: unknown): value is Nil => {
  return value === null || value === undefined;
};
