import { BlogCard } from '@/components/blog/BlogCard'
import { useBlogsStore } from '@/store/blogs.store'
import React from 'react'

const AllBlogs: React.FC = () => {
    const { blogs } = useBlogsStore()
    return (
        <div>
            <div className=" bg-background">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((post, index) => (
                            <div
                                key={post.id}
                                className="animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <BlogCard auth={true} post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBlogs