import { useState } from 'react';
import EmojiPicker from './EmojiPicker';

export default function PostCreation() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [content, setContent] = useState('');

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const insertEmoji = (emoji) => {
    setContent(content + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <i className="fas fa-plus-circle mr-3"></i> Create New Post
      </h2>
      
      <div className="flex items-start space-x-4">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <div className="border rounded-lg mb-4">
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="4" 
              className="w-full p-4 rounded-lg focus:outline-none" 
              placeholder="What's on your mind?"
            ></textarea>
            <div className="p-3 border-t flex justify-between items-center">
              <div className="flex space-x-2">
                <button 
                  type="button" 
                  className="text-gray-500 hover:text-blue-500" 
                  onClick={toggleEmojiPicker}
                >
                  <i className="far fa-smile"></i>
                </button>
                <button className="text-gray-500 hover:text-blue-500">
                  <i className="fas fa-image"></i>
                  <input type="file" id="image-upload" className="hidden" />
                </button>
              </div>
              <EmojiPicker 
                show={showEmojiPicker} 
                onEmojiSelect={insertEmoji} 
              />
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-3">Select Platforms</h3>
            <PlatformSelector />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-3">Schedule Options</h3>
            <ScheduleOptions />
          </div>
          
          <div className="flex justify-end space-x-4">
            <button type="button" className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300">
              Save Draft
            </button>
            <button type="button" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
              Post Now
            </button>
            <button type="button" className="bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600">
              <i className="far fa-clock mr-2"></i> Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformSelector() {
  const platforms = [
    { icon: 'facebook-f', color: 'bg-blue-500', name: 'Facebook', checked: true },
    { icon: 'instagram', color: 'bg-pink-500', name: 'Instagram', checked: false },
    { icon: 'twitter', color: 'bg-blue-400', name: 'Twitter', checked: false }
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {platforms.map((platform, index) => (
        <label key={index} className="flex items-center space-x-2 cursor-pointer">
          <div className="relative">
            <input type="checkbox" className="sr-only peer" defaultChecked={platform.checked} />
            <div className={`w-12 h-6 bg-gray-200 rounded-full peer peer-checked:${platform.color}`}></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></div>
          </div>
          <div className="flex items-center">
            <i className={`fab fa-${platform.icon} ${platform.color} mr-2`}></i>
            <span>{platform.name}</span>
          </div>
        </label>
      ))}
    </div>
  );
}

function ScheduleOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 mb-2">Post Date</label>
        <input type="date" className="w-full p-2 border rounded-lg" min="2000-01-01" max="2030-12-31" />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Post Time</label>
        <input type="time" className="w-full p-2 border rounded-lg" />
      </div>
    </div>
  );
}