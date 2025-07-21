import supabase from "@/lib/supabaseAdmin";

type BlogProps = { params: { id: string } };

const SingleBlog = async ({ params }: BlogProps) => {
  const { data } = await supabase
    .from("Blogs")
    .select("id, title, body, cover")
    .eq("id", params.id);

  const paragraphsRaw: string = data ? data[0].body : "";
  const paragraphs: string[] = paragraphsRaw.split("(new paragraph)");

  return (
    <main
      className="flex flex-col items-center gap-5
      bg-gradient-to-b from-white via-blue-100 to-white"
    >
      <h1 className="sm:my-40 mt-20 mb-5 sm:text-6xl text-blue-900 sm:w-2/3 w-3/4 text-3xl tracking-wide">
        {data ? data[0].title : "title didn't exist"}
      </h1>

      <img
        src={data ? data[0].cover : ""}
        alt="Cover Photo"
        className="sm:w-3/4 w-11/12"
      />

      <div className="sm:text-2xl text-lg tracking-wide p-3 flex flex-col gap-5 items-center">
        {paragraphs.map((paragraph, index) => {
          const lines = paragraph.split("(new line)");
          return (
            <p key={index} className="sm:w-1/2 sm:my-6 text-blue-950">
              {lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i !== lines.length - 1 && <br />}
                </span>
              ))}
            </p>
          );
        })}
      </div>
    </main>
  );
};

export default SingleBlog;
