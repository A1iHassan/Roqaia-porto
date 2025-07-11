import supabase from "@/lib/supabaseAdmin";

const SingleBlog = async ({ params }: { params: { id: string } }) => {
  const { data } = await supabase
    .from("blogs")
    .select("id, title, body, cover")
    .eq("id", params.id);
  return (
    <main
      className="flex flex-col items-center gap-5
    bg-gradient-to-b from-white via-blue-100 to-white"
    >
      <h1 className="mt-50 text-6xl text-blue-900">
        {data ? data[0].title : "title didn't exist"}
      </h1>
      <img
        src={data ? data[0].cover : ""}
        alt="Cover Photo"
        className="w-3/4"
      />
      <p className="text-2xl tracking-wide">
        {data ? data[0].body : "Paragraph Body not found"}
      </p>
    </main>
  );
};

export default SingleBlog;
