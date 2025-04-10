import { hono } from "@/lib/hono";

export default async function Page() {

  const res = await hono.api.blogs.$get()
  const blogs = await res.json()

  if (blogs.length === 0) {
    return <div>まだ投稿がありません。</div>
  }

    return (
      <div>
      {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
      {blogs.map((blog: any) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
    );
}
