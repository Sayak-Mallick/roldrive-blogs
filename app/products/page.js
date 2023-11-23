'use client';

import { useState, useEffect } from 'react';
import Card from '../components/Card';

const reqUrl = 'https://blog1.roldrive.com/wp-json/wp/v2/products?acf_format=standard&_fields=id,slug,title,acf';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(reqUrl);
        const products = await response.json();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container mx-auto p-8 pb-16'>
      <section>
        <h1 className='text-4xl font-bold text-center mb-8'>Products</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title.rendered}
                thumbnail={product.acf.thumbnail}
                subtitle={product.acf.category.name}
                slug={`${product.slug}`}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
