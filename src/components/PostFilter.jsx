import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';


const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
        value={filter.query}
        onChange={event => setFilter({...filter, query: event.target.value})}
        placeholder="Search..."
        type="text"/>
        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Sorted by"
        options={[
          {value: 'title', name: 'name'},
          {value: 'body', name: 'description'}
        ]}


        />
        </div>

    );
};

export default PostFilter;