export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface IPost {
  id: number;
  image_url: string;
  title: string;
  content: string;
  created_at: string;
  user_id: number;
  userFirstName: string;
  createdAt: string;
  image: string;
  isLiked: boolean;
  likes: number;
}

export interface ILike {
  user_id: number;
  post_id: number;
}