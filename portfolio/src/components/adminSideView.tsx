import supabase from "@/lib/supabaseAdmin";

const SideView = async () => {
  const { data, error } = await supabase.from("blogs").select("id, title");
  if (error) return <div>Error loading the titles</div>;
  return (
    <label
      className=" bg-blue-950 p-2 flex flex-col items-center rounded-md
    
    "
    >
      <input type="checkbox" className="sr-only peer"></input>
      <ul
        className="relative h-full py-2 text-transparent flex w-2 flex-col items-center peer-checked:w-20 peer-checked:text-blue-50 peer-checked:text-md transition-all duration-300 overflow-x-hidden overflow-y-auto
      after:content-[''] after:absolute after:w-2 after:h-[1px] after:top-[22rem] after:left-0 after:bg-white after:rotate-45 peer-checked:after:-rotate-45
    before:content-[''] before:absolute before:w-2 before:h-[1px] before:bottom-[22rem] before:left-0 before:bg-white before:-rotate-45 peer-checked:before:rotate-45
      "
      >
        {data.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </label>
  );
};

export default SideView;
