import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import img404 from '../../assets/404.jpg'
const BlogCard = ({blog}) => {
    const  {cover_image, title, published_at, description, id} = blog;
    // console.log(blog);
    return (
      
            <Link rel="noopener noreferrer" to={`/blog/${id}`} className="max-w-sm mx-auto group transition  hover:scale-105 border-2 border-primary hover:border-secondary  border-opacity-30">
				<img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image|| img404} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
     
    );
};
BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
    
}
export default BlogCard;