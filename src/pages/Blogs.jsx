import { useState, useEffect } from "react";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const getBlogsData = async () => {
      const res = await fetch("/blogs.json");
      const data = await res.json();

      setBlogsData(data.blogs);
    };

    getBlogsData();
  }, []);

  return (
    <section className="px-5">
      <div className="p-10 my-8 bg-base-200 rounded-xl">
        <h2 className="text-3xl font-bold text-center ">Blogs</h2>
      </div>

      <div className="flex items-center justify-center my-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogsData.map((blog) => {
            return (
              <div className="p-5 bg-base-200 rounded-xl">
                <h1 className="text-xl font-semibold">{blog.title}</h1>

                <p className="my-3 text-xl font-bold">By : {blog.author}</p>

                <p className="text-base ">{blog.content}</p>

                <p className="mt-3 text-xl font-semibold">
                  Published Date : {blog.published_date}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
