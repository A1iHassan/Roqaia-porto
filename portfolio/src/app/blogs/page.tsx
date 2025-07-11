import supabase from "@/lib/supabaseAdmin";
import Link from "next/link";
import Image from "next/image";

const Blogs = async () => {
  const { data, error } = await supabase.from("Blogs").select("*");

  if (error) return <>An Error Happened</>;

  return (
    <div
      className="m-auto flex flex-wrap gap-6 justify-center bg-gradient-to-b from-white via-blue-100 to-white w-screen h-screen
     sm:gap-16
    "
    >
      <div className="mt-20 flex flex-col items-center sm:flex-row flex-wrap gap-10">
        {data.map((blog) => (
          <Link
            key={blog.id}
            href={`blogs/${blog.id}`}
            className="w-56 h-56 relative shadow-lg shadow-blue-50 rounded-lg flex items-end p-3 cursor-pointer overflow-hidden group
          sm:w-72 sm:h-86
          "
          >
            <Image
              src={blog.cover}
              alt="Background"
              fill
              className="object-cover rounded-lg z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-60% from-transparent to-blue-200 z-10" />
            <span className="z-10 text-blue-900 sm:text-2xl">{blog.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
