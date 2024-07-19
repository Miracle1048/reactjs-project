import Header from "../component/Header/Header";
import LatestBlog from "../component/LatestBlog/LatestBlog";
import BlogGrid from "../component/BlogGrid/BlogGrid";
import Footer from "../component/FOOTER/footer";
function Blog(){
    return(
     <div>
        <Header />
        <LatestBlog />
        <BlogGrid /> 
        <Footer />
     </div>
    )
}
export default Blog;