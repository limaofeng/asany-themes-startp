/// <reference path="custom-typings.d.ts" />

export type MenuData = {
  id: string;
  name: string;
  children?: MenuData[];
};

export type IService = {
  id: string;
  icon?: string;
  name: string;
  description: string;
};

export type BlogData = {
  id: string;
  title: string;
  summary: string;
  author: string;
  releaseDate: string;
};

export type TeamMemberData = {
  id: string;
  photo: string;
  name: string;
  title: string;
};
