import { IComment } from '@/model/comment';

export interface IPost {
  id: number,
  username: string
  content: string
  comments: IComment[],
}
