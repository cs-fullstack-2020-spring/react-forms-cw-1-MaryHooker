import React,{Component} from 'react';

class BlogPost extends Component{
    constructor(props){
        super(props);
        this.state =
        {
            blogTitle : '',
            blogPost : '',
        }
    }

    newTitle = (evt) => {

        // console.log(`Another DEBUG ${evt.target.value}`)

        this.setState(
            {
                blogTitle : evt.target.value
            }
        )
            // console.log(`DEBUG ${this.state.blogTitle}`);
    }

    newPost = (evt) => {
        this.setState(
            {
                blogPost : evt.target.value
            }
        )
    }

    buttonClicked = (evt) => {
        evt.preventDefault();

        let newBlogPost = {
            blogTitle : this.state.blogTitle,
            blogPost : this.state.blogPost,
        }

        console.log(`DEBUG ${newBlogPost.blogTitle}`);

        console.log(this.props.callBackFunction);
        
        this.props.callBackFunction(newBlogPost);

    }

    

    render(){
        return(
            <div>
                <form action="">
                    <fieldset>
                        <legend>Blog Post</legend>

                        <label htmlFor="blogTitle">Blog Title:</label>
                        <input type="text" id='blogTitle' value={this.state.blogTitle} onChange={this.newTitle}/>

                        <label htmlFor="blogPost">Blog Post:</label>
                        <textarea name="blogText" id="blogPost" cols="30" rows="10" value={this.state.blogPost} onChange={this.newPost}></textarea>

                        <button onClick={this.buttonClicked}>Submit</button>

                    </fieldset>
                </form>
            </div>
        )
    }
}

export default BlogPost;