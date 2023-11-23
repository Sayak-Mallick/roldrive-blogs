import Link from 'next/link';

const BlogPost = ({title, author, slug, image, subtitle, }) => {
  return (
    <div className='mb-16'>
    <div className='mb-4'>
      <img src={image} alt='Blog Image' />
    </div>
    <div className='mb-4'>
      <Link href={`/blog/${slug}`}>
      <h2 className='text-2xl font-bold mb-2'>{title}</h2>
      </Link>
      <p className='text-md text-gray-500'>{subtitle}</p>
    </div>
    <div className='text-sm text-gray-500'>
      <span>{author}</span>
    </div>
  </div>
  );
};

export default BlogPost;