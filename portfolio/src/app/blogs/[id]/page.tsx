import supabase from "@/lib/supabaseAdmin";

type BlogProps = { params: { id: string } };

const SingleBlog = async ({ params }: BlogProps) => {
  const { data } = await supabase
    .from("Blogs")
    .select("id, title, body, cover")
    .eq("id", params.id);

  const paragraphsRow: string = data ? data[0].body : "";
  const paragraphs: string[] = paragraphsRow.split("(new paragraph)");
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
      <div className="sm:text-2xl text-lg tracking-wide p-3 flex flex-col gap-5">
        {paragraphs.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </div>
    </main>
  );
};

export default SingleBlog;
