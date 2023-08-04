'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  className?: string
}

function SearchBar({ className = '' }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearch('');
    router.push(`/s?query=${search}`)
  }

  return (
    <div className={`${className} flex items-center justify-between w-full h-full]`}>
      <form onSubmit={handleSubmit}>
        <input
          className='border border-solid rounded-md py-2 px-4'
          placeholder='Search for free photos'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        >
        </input>
      </form>
    </div>
  )
}

export default SearchBar
