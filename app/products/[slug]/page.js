const Products = () => {
  return (
    <div className='container mx-auto p-8 pb-16'>
      <section>
        <h1 className='text-4xl font-bold text-center mb-8'>Individual Product</h1>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <img
            src='https://via.placeholder.com/900'
            width="960"
            height="540"
            alt='product image'
            />
          </div>
          <div>
            <h2 className='text-2xl font-bold mb-2'>Product Title</h2>
            <div className='text-md font-semibold mb-1'>Category</div>
            <div className='text-lg mb-8'>Electronics</div>
            <p className='text-lg mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quibusdam, quod. Quisquam, voluptates. Quibusdam, quod.</p>
            <div className='text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis amet error expedita placeat eius accusamus laborum labore sequi quis est reprehenderit suscipit.</div>
            <p className='text-2xl mb-6'>$9.99</p>
            <button className='bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-6 rounded-full'>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Products;