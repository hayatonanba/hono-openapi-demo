import { hono } from "@/lib/hono"
import { notFound } from "next/navigation"

type props = {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: props) {
  const { id } = await params

  const res = await hono.api.blogs[":id"].$get({
    param: {
      id
    }
  })

  const blog = await res.json()

  if(!blog){
    notFound()
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}
