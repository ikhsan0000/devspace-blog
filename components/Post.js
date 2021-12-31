import Image from "next/image";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";

export default function PostPage({post}) {
    return (
        <div className="w-full px-10 py-6 bg-white
        rounded-lg shadow-md mt-6">
            <Image className="mb-4 rounded" 
            src={post.frontmatter.cover_image} 
            alt='' width={600} height={420} />
            
            <div className="flex justify-between items-center mt-3">
                <span className="font-light text-gray-600">
                    {post.frontmatter.date}
                </span>
                <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
            </div>

            <div className="mt-2">
                <Link href={`/blog/${post.slug}`}>
                    <a className="text-2xl text-gray-700 font-bold hover:underline">
                        {post.frontmatter.title}
                    </a>
                </Link>
                <p className="mt-2 text-gray-600">
                    {post.frontmatter.excerpt}
                </p>
            </div>

            <div className="flex justify-between items-center mt-6">
                <Link href={`/blog/${post.slug}`}>
                    <a className="text-gray-900 hover:text-blue-600">
                        Read More
                    </a>
                </Link>
                <div className="flex items-center">
                    <img 
                    src={`${post.frontmatter.author_image}`} alt=''
                    className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"/>
                by&nbsp;<h3 className="text-gray-700 font-bold">{post.frontmatter.author}</h3>
                </div>
            </div>


        </div>
    )
}
