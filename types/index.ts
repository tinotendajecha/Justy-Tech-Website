export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageSrc: string;
};

export type TestimonialType = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageSrc?: string;
};