import Markdown from 'react-markdown'
import { Link, useLoaderData } from 'react-router-dom';
import img404 from '../../assets/404.jpg';
import rehypeRaw from 'rehype-raw';
const Content = () => {
    const blog = useLoaderData();
    const {title, cover_image, body_html, tags, url}= blog;
    return (
        <div>
            <div className="mx-auto group p-2 border-2 ">

				<img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image|| img404} />
                <ul className="space-x-2 flex my-4">
                            {tags.map((tag)=> <li key={tag} ><Link rel="noopener noreferrer" to={tag} className="hover:underline">#{tag}</Link></li> )}    
                    </ul>
                <div className="space-y-2">
					<Link to={url} target='_blank' className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</Link>
					
					<Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
				</div>
			</div>
        </div>
    );
};

export default Content;