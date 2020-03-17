import React, { Component} from 'react';

class PostList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(`yooo ${this.props.blogPostsArray}`);

        return (
            <div>
                {
                    this.props.blogPostsArray.map((el) => {
                        
                    
                        return (
                            <div>
                                <h2>{el.blogTitle}</h2>
                                <p>{el.blogPost}</p>
                                <hr/>
                            </div>
                        )

                    })
                }
            </div>
        )
    }
}

export default PostList;