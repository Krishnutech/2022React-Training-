import React from 'react';
import {fetchBlogs} from '../../actions';
import {connect} from 'react-redux';

class Blogs extends React.Component {

    componentDidMount = () => {
        console.log('mounted')
        this.props.fetchBlogs()
    }
    render() {
        return this.props.loading ? ' Your Data Is Being Processing....' : ( 

            <table>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {this.props.blogs.map(blog =>{
                    return <tr><td>{blog.id}</td><td>{blog.title}</td></tr>
                })
            }
                </tbody>           
                 </table>)


    }
}

const mapStateToProps = state => {
    return {
        blogs: state.blogs,
        loading:state.loading
    }
}

const mapDispatchToProps = dispatch => {
        return {
            fetchBlogs: () => dispatch(fetchBlogs())
                }
            }
        export default connect(mapStateToProps,mapDispatchToProps)(Blogs)