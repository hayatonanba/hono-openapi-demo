import type { RouteHandler } from "@hono/zod-openapi";
import type { createBlogRoute } from "../routes/blogRoutes";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const createBlogHandler: RouteHandler<typeof createBlogRoute> = async (c) => {
  const { title, content } = c.req.valid("json")

  const session = await auth()

  if (!session?.user?.id) {
    throw Error("認証してください。")
  }

  const blogs = await prisma.blog.create({
    data: {
      userId: session.user.id,
      title,
      content
    },
    include: {
      user: {
        select: {
          name: true,
          image: true
        }
      }
    }
  })

  return c.json(blogs, 201)
}