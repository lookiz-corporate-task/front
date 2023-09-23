import { Post } from '@/types/post';
import { PostItemView } from './components/PostItem/PostItemView';
import { MasonryGrid } from '@egjs/react-grid';

interface Props {
  postList: Post[];
  toggleLike: any;
}

export const PostListView = ({ postList, toggleLike }: Props) => {
  return (
    <MasonryGrid
      gap={15}
      defaultDirection={'end'}
      align={'center'}
      column={2}
      columnSize={200}
      columnSizeRatio={0}
    >
      {postList.map((post: Post) => (
        <div className={'item'} key={post.id}>
          <PostItemView post={post} toggleLike={toggleLike} />
        </div>
      ))}
    </MasonryGrid>
  );
};
