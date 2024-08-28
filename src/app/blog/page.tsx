import Link from "next/link";

export default async function Blog() {
  let fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  let res = await fetchData.json();
  return (
    <div className="bg-orange-400 flex justify-center p-3">
      <div className="bg-orange-300 w-4/5  sm:w-2/4 p-8 rounded-md">
        <h1 className="text-2xl py-4">Blog List</h1>

        <ul className="space-y-4">
          {res.map((item: any, i: number) => {
            return (
              <li key={i}>
                <Link href={`/blog/${item.id}`}>
                  {item.id}----{item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
