/* eslint-disable react/jsx-key */
import BlogPost from './blog-post';

const blogposts = [
  {
    title: 'Blog 1',
    subtitle: 'Subtitle 1',
    author: 'John Doe',
    slug: 'blog-1',
    image: 'https://dummyimage.com/800x600'
  },
  {
    title: 'Blog 1',
    subtitle: 'Subtitle 1',
    author: 'John Doe',
    slug: 'blog-1',
    image: 'https://dummyimage.com/800x600'
  },
  {
    title: 'Blog 1',
    subtitle: 'Subtitle 1',
    author: 'John Doe',
    slug: 'blog-1',
    image: 'https://dummyimage.com/800x600'
  },
]

const Blog = () => {
  return (
    <div className='container mx-auto p-8'>
      <section>
        <h1 className='text-4xl font-bold text-center mb-8'>Blogs</h1>
        <div className='max-w-2xl mx-auto'>
          {blogposts.map(blogpost => (
            <BlogPost
            title={blogpost.title}
            subtitle={blogpost.subtitle}
            author={blogpost.author}
            slug={blogpost.slug}
            image={blogpost.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;