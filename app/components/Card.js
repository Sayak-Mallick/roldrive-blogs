import Image from 'next/image';
import Link from 'next/link';

const Card = ({ title, subtitle,thumbnail, btnlabel, slug }) => {
  return (
    <div className='text-center'>
      <Link href={`/product/${slug}`}>
        <Image
          className='block mx-auto mb-4'
          width={600}
          height={400}
          src={thumbnail}
          alt='Dummy Image'
        />
      </Link>
      <div className='font-semibold text-center text-xl mb-1'>{title}</div>
      <div className='text-md text-center mb-4'>{subtitle}</div>
      <Link href={slug}>{btnlabel}</Link>
    </div>
  );
};

export default Card;
