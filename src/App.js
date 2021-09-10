import React, { useMemo, useRef, useState } from "react";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import PostList from "./components/PostList";
// import PostItem from "./components/PostItem";
import './styles/app.css';
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
// import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/select/MyModal";
import MyButton from "./components/UI/button/MyButton";
function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Phython", body: "Description 1"},
    {id: 2, title: "JavaScript", body: "Description 2"},
    {id: 3, title: "C++", body: "Description 3"},
    
  ]);

// const [selectedSort, setSelectdSort] = useState('')  
// const [searchQuery, setSearchQuery] = useState('')
const [filter, setFilter] = useState({sort:'', query: ''});
const [modal, setModal] = useState(false);


const sortedPosts = useMemo(() => {
  console.log('aaaaa');
  if (filter.sort) {
    return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
  }
  return posts;
}, [filter.sort, posts]);

const sortedAndSearchedPosts = useMemo(() => {
  return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));

}, [filter.query, sortedPosts]);

const createPost = (newPost) => {
  setPosts([...posts, newPost]);
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id));
}
  
// const sortPost = (sort) => {
//   setSelectdSort(sort);

// }
  return (
    
    <div className="App">
      <MyButton onClick={() => setModal(true)} >Add new task</MyButton>
      <MyModal visible={modal} setVisible={setModal}> 
      <PostForm create={createPost}/>
      </MyModal>

     
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
      filter={filter}
      setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Post list one'/> 
    </div>
  );
}

export default App;
