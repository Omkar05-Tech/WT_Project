import PostCreation from '../components/CreatePost/PostCreation';
import PostPreview from '../components/CreatePost/PostPreview';

export default function CreatePostPage() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <PostCreation />
        <PostPreview />
      </div>
    </div>
  );
}