import { PostItemView } from './components/PostItem/PostItemView';
import { MasonryGrid } from '@egjs/react-grid';

export const PostListView = () => {
  return (
    <MasonryGrid
      gap={15}
      defaultDirection={'end'}
      align={'center'}
      column={2}
      columnSize={200}
      columnSizeRatio={0}
      onRenderComplete={(e) => {
        console.log(e);
      }}
    >
      <div className={'item'}>
        <PostItemView imgPath={'/img/baby.jpg'} hashTags={'#Look Kids #Long Live #Box Office'} />
      </div>
      <div className={'item'}>
        <PostItemView
          imgPath={'/img/kids.jpg'}
          hashTags={'#룩키즈 #기웅이형 #OOTD #Long Live #Box Office #Guarantee'}
        />
      </div>
      <div className={'item'}>
        <PostItemView
          imgPath={'/img/kids.jpg'}
          hashTags={'#룩키즈 #기웅이형 #OOTD #Long Live #Box Office #Guarantee'}
        />
      </div>
      <div className={'item'}>
        <PostItemView imgPath={'/img/baby.jpg'} hashTags={'#Look Kids #Long Live #Box Office'} />
      </div>
    </MasonryGrid>
  );
};
