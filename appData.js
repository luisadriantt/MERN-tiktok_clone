import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
  name: String,
  userName: String,
  avatar: String,
  is_followed: Boolean,
  video: String,
  caption: String,
  likes: String,
  comments: String,
  timestamp: String,
  button_visible: Boolean,
});

export default mongoose.model("posts", postsSchema);
