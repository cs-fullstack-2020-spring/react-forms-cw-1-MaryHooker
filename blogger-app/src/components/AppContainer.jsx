import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import BlogPost from './BlogPost';
import PostList from './PostList';
import FooterComponent from './FooterComponent';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPostsArray: [{blogTitle:'', blogPost:''}]
        }
    }

    callBackFunction = (newPost) => {

        this.state.blogPostsArray.push(newPost);

        this.setState(
            {

                blogPostsArray: this.state.blogPostsArray
            }
        )

        console.log(`Dubug ${this.state.blogPostsArray[0].blogTitle} ${this.state.blogPostsArray[0].blogPost}`);

    }

    render() {
        //sanity
        // console.log(this.state.blogPostsArray);

        return (
            <div>
                <HeaderComponent/>
                <BlogPost callBackFunction={this.callBackFunction}/>
                <PostList blogPostsArray={this.state.blogPostsArray}/>
                <FooterComponent fname='Mary'/>
            </div>
        )
    }
}

export default AppContainer;

// Create a new react ***app called blogger-app

// Create a AppContainer component to maintain shared state (an array of blog posts)

// Create a HeaderComponent that*** displays a H1 header that says My Blog

// Create a FooterComponent ***that displays This site created by [YOURNAME]

// Create a PostList component ***that will be used to display a blog entry

// Create a BlogPost component that ***contains a form and allows you to enter a blogTitle and a blogPost
// This should be a controlled component meaning all values come from and are saved to the component state

// When the form is submitted, update the shared state which then should update your blog posts in state and then iterate the array creating a new BlogPost component for each blog post in the shared state array