import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function PaginatedItems(props ) {
  const { data } = props
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 6

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex flex-col items-center'>
      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:w-[500px] max-sm:w-[250px] w-[750px] gap-5 mx-auto'>
        {currentItems.map((image, index) => (
          <div className='w-[250px] relative' key={index}>
            <img src={image.image} alt={ image.title } className={`rounded-xl w-full h-[250px]`}/>
            <span className='bg-black absolute w-full h-full top-0 opacity-30 rounded-xl'> </span>
            <div className='absolute left-5 bottom-5'>
              <h1 className='font-primary text-white text-xl'>{image.title}</h1>
              <p className='text-white text-secondary font-medium'>{JSON.stringify(image.date).split('T')[0].split(`"`)[1]}</p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
      </div>
    </>
  );
}