import Link from 'next/dist/client/link'
import { POST } from '../types/Types'

const Post: React.FC<POST> = ({ id, title }) => {
  return (
    <div className="">
      <span>{id}</span>
      {' : '}
      <Link href={`/posts/${id}`}>
        <a className="cursor-pointer border-b border-gray-500 hover:bq-gray-300">
          {title}
        </a>
      </Link>
    </div>
  )
}
export default Post
