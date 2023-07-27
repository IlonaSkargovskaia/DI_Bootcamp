import postsData from '../posts.json'

const PostList = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
        <h2>This is a title</h2>
            {
                postsData.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default PostList;