"use client"

import PostCard from '@/components/postCard/postCard'
import React, { useState } from 'react'
import Loading from '../loading';
import { getPosts } from '@/lib/blogData';

const BlogPage = () => {
  const [loading, setLoading] = useState(true);
  const [postsData, setPostsData] = useState<any[]>([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const json = await getPosts();
      setPostsData(json);
      setLoading(false);
    };
    fetchPosts();
  }, [])

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex-wrap gap-[30px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start mb-10">
          {/* filter로 userid가 1인 데이터만 map해서 postcard로 넘김 */}
          {postsData.filter(post => ( post.userId === 1 )).map((post: any) => (
            <div className="col-span-1 w-[100%]" key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default BlogPage
