export interface Post {
    title: string;
    overview: string;
    meta:any;
    content: any;
    _id: string;
    slug: {
      current: string;
    };
    _createdAt: string;
  }