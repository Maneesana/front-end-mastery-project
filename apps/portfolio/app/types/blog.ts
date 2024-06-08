import blogSample from '../../assets/blogs/sample/index.json';

export enum BlogBodyContentDisplayOrder {
  PUT_DOWN = 'IMAGE-DOWN',
  PUT_UP = 'IMAGE-UP',
  PUT_NOTHING = 'DO-NOT-SHOW',
}
export interface IBlogBodyContent {
  id: string;
  subContentImage: string | null;
  subContentText: string;
  subContentOrder: BlogBodyContentDisplayOrder;
}
export type TBlog = Omit<typeof blogSample, 'blogBodyContent'> & {
  blogBodyContent: IBlogBodyContent[];
};
