import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { getBlogPosts } from "./blog/getPosts";
import { wrapTitleWithViewTransitionNames } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const allPosts = await getBlogPosts();
  const posts = allPosts.filter((post) => post.published);

  return (
    <div className="flex flex-col gap-12 max-w-216 mx-auto my-0">
      {/* Hero Section */}
      <section className="grid grid-cols-2 gap-4 ">
        <div className="col-span-2 md:col-span-1 text-left items-start md:py-12">
          <div className="px-4">
            <h2 className="text-2xl font-semibold">Ricardo Mayorga Mera</h2>
            <p className="mb-2">Developer & Designer</p>
            <p className="text-lg text-accent-foreground text-balance">
              Hi, I'm Ricardo. I'm a developer from Brussels. I'm currently
              working as a consultant for Devoteam, developing easy to use
              applications.
            </p>
          </div>
          <Button variant="link" asChild>
            <a href="mailto:ricardo.mayorga9805@gmail.com">Email</a>
          </Button>
          <Button variant="link" asChild>
            <a href="#about">Tell me more</a>
          </Button>
        </div>
        <div className="col-span-2 md:col-span-1 relative">
          <Image
            src="https://cdn.shadcnstudio.com/ss-assets/components/card/image-3.png"
            alt="Ricardo Mayorga"
            fill
            className="object-cover rounded ring-4 "
          />
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4" id="project">
        <header className="col-span-3 md:col-span-1">
          <h1 className="text-3xl sticky top-6">Projects</h1>
        </header>
        <div className="col-span-3 md:col-span-2 grid grid-cols-1 gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card key={index} className="grid grid-cols-2 py-2">
              <CardContent className="px-2">
                <div className="h-full w-full relative">
                  <Image
                    src="https://cdn.shadcnstudio.com/ss-assets/components/card/image-3.png"
                    alt="something"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded"
                  />
                </div>
              </CardContent>
              <CardHeader className="w-full px-2 py-8">
                <CardTitle>Project {index}</CardTitle>
                <CardDescription>
                  This project has a description that is useful to the reader
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4" id="blog">
        <header className="col-span-3 md:col-span-1">
          <h1 className="text-3xl sticky top-6">Blogs</h1>
        </header>
        <div className="col-span-3 md:col-span-2 flex flex-col gap-2">
          {posts.map((post) => (
            <Link
              href={post.path}
              key={post.path}
              className="p-1 md:p-4 rounded-md flex flex-col justify-between hover:ring-2 hover:ring-accent"
            >
              <div className="w-full flex items-center justify-between">
                <span className="text-lg md:text-xl md:font-black font-bold">
                  {wrapTitleWithViewTransitionNames(post.title!, post.path)}
                </span>
                <span>{post.date}</span>
              </div>
              <span>{post.description}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4" id="about">
        <header className="col-span-3 md:col-span-1">
          <h1 className="text-3xl sticky top-6">About</h1>
        </header>
        <div className="col-span-3 md:col-span-2 text-lg">
          <p>
            I’m a Frontend React Developer who loves building clean, intuitive,
            and meaningful digital experiences.
          </p>
          <br />
          <p>
            Over the past few years, I’ve worked on projects in telecom and fast
            food, modernizing platforms and bringing ideas to life with React,
            Next.js, TypeScript, and AWS. I’m passionate about creating things
            that feel effortless to use — blending design, code, and a bit of
            curiosity.
          </p>
          <br />
          <p>
            Outside of work, you’ll usually find me playing football or
            basketball, tinkering in my homelab and I recently started getting
            into photography. I love cars and my top 5 are probably all BMW's. I
            hate the BMW XM though{" "}
            <span className="text-accent-foreground">
              (Seriously, what were they thinking).
            </span>
            <br />I tend to explore new hobbies a lot so the hobbies section
            will probably outdated by now
          </p>
          <br />
          <p>
            For me, development isn’t just about code — it’s about crafting
            experiences that make technology feel a little more human.
          </p>
        </div>
      </section>
    </div>
  );
}
