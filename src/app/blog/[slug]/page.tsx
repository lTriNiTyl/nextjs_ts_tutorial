"use client"

import Loading from '@/app/loading';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/blogData';
import Image from 'next/image'
import React, { useState } from 'react'

const SinglePostPage = ({ params }: any) => {

  const { slug } = params;
  const [loading, setLoading] = useState(true);
  const [postsData, setPostsData] = useState<any>();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const json = await getPost(slug);
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
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
          {/* 레이아웃의 width에 맞게 이미지를 위치시킬려면 부모 div에 w-full 추가 */}
          <div className="flex items-center col-span-1 lg:place-self-start place-self-center w-full h-full">
            <div className="w-full h-[calc(55svh-100px)] lg:h-[calc(100svh-200px)] relative">
              <Image
                src="https://images.pexels.com/photos/16565204/pexels-photo-16565204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                priority={true}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="flex-col">
            <h1 className="text-[40px] lg:text-[58px] leading-none font-bold mt-6 lg:mt-0">{postsData.title}</h1>
            <div className="flex items-center gap-[25px] overflow-hidden mt-6">
              <Image
                src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                priority={true}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
                className="w-[50px] h-[50px] object-cover rounded-[50%]"
              />
              <PostUser userId={postsData.userId} />
              <div className="flex flex-col gap-[10px]">
                <span className="text-gray-500 font-bold">Published</span>
                <span className="font-medium">01.01.2024</span>
              </div>
            </div>
            <div className="text-[18px] mt-[15px] mb-10">
              {postsData.body}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default SinglePostPage
