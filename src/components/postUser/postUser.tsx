import { getUsers } from '@/lib/blogData';
import React, { useState } from 'react'

const postUser = ( userId : {userId: object}) => {
  const [loading, setLoading] = useState(true);
  // json data가 array가 아니기 때문에 any[] -> any로 변경.
  // property username does not exist on type any[] 메시지 사라짐.
  const [usersData, setUsersData] = useState<any>();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const json = await getUsers(userId);
      setUsersData(json);
      setLoading(false);
    };
    fetchPosts();
  }, [])

  return (
    <div>
      {loading ? (
        <div className="flex w-full h-[100lvh] justify-center items-center font-bold">
          <span>Loading...</span>
        </div>
      ) : (
        <div className="flex flex-col gap-[10px]">
          <span className="text-gray-500 font-bold">Author</span>
          <span className="font-medium">{usersData.username}</span>
        </div>
      )}
    </div>
  )
}

export default postUser
