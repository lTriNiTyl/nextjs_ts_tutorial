import PostCard from '@/components/postCard/postCard'
import React from 'react'

const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="w-[30%] max-lg:w-[45%] max-md:w-[100%]">
        <PostCard />
      </div>
      <div className="w-[30%] max-lg:w-[45%] max-md:w-[100%]">
        <PostCard />
      </div>
      <div className="w-[30%] max-lg:w-[45%] max-md:w-[100%]">
        <PostCard />
      </div>
      <div className="w-[30%] max-lg:w-[45%] max-md:w-[100%]">
        <PostCard />
      </div>
    </div>
  )
}

export default BlogPage
