'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const reqUrl = 'https://blog1.roldrive.com/wp-json/wp/v2';

const fetchProductData = async (slug) => {
  const req = await fetch(`${reqUrl}/products?acf_format=standard&_fields=id,slug,title,acf&slug=${slug}`);
  const products = await req.json();
  return products[0];
};

const Products = ({ params }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductData = async () => {
      const productData = await fetchProductData(params.slug);
      setProduct(productData);
    };

    getProductData();
  }, [params.slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mx-auto p-8 pb-16'>
      <section>
        <h1 className='text-4xl font-bold text-center mb-8'>{product.title.rendered}</h1>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <Image
              src={product.acf.large_image}
              width='960'
              height='540'
              alt='product image'
              loading='lazy'
            />
          </div>
          <div>
            <h2 className='text-2xl font-bold mb-2'>{product.title.rendered}</h2>
            <div className='text-md font-semibold mb-1'>Category</div>
            <div className='text-lg mb-8'>{product.acf.category.name}</div>
            <p className='text-lg font-bold mb-6'>Summary</p>
            <div className='text-lg mb-8'>{product.acf.summary}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
