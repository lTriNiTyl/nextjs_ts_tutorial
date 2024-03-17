import PostCard from '@/components/postCard/postCard'
import React from 'react'

const BlogPage = () => {
  return (
    <section>
      <div className="flex-wrap gap-[30px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mb-10">
        <div className="col-span-1 w-[100%]">
          <PostCard />
        </div>
        <div className="col-span-1 w-[100%]">
          <PostCard />
        </div>
        <div className="col-span-1 w-[100%]">
          <PostCard />
        </div>
        <div className="col-span-1 w-[100%]">
          <PostCard />
        </div>
      </div>
    </section>
  )
}

export default BlogPage
