import Image from "next/image";
import { Link } from "next-view-transitions";
import { getBlogPosts } from "./blog/getPosts";
import { wrapTitleWithViewTransitionNames } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";

export default async function Home() {
  const allPosts = await getBlogPosts();
  const posts = allPosts.filter((post) => post.published);

  return (
    <div className="flex flex-col gap-12 max-w-5xl mx-auto my-0">
      {/* Hero Section */}
      <section className="grid grid-cols-2 gap-4 ">
        <div className="col-span-2 md:col-span-1 text-left items-start md:py-12">
          <div>
            <h2 className="text-2xl font-semibold">Ricardo Mayorga Mera</h2>
            <p className="mb-2">Developer & Designer</p>
            <p className="text-sm text-accent-foreground text-balance leading-6@@">
              Hi, I&apos;m Ricardo. I&apos;m a developer from Brussels. I&apos;m
              currently working as a consultant for Devoteam, developing easy to
              use applications.
            </p>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <Button className="p-0 underline-offset-4" variant="link" asChild>
              <a href="mailto:ricardo.mayorga9805@gmail.com">Email</a>
            </Button>
            <Button className="p-0" variant="link" asChild>
              <a href="#about">Tell me more</a>
            </Button>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 relative">
          <Image
            src="https://cdn.shadcnstudio.com/ss-assets/components/card/image-3.png"
            alt="Ricardo Mayorga"
            fill
            className="object-cover rounded ring-4"
          />
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4" id="project">
        <header className="col-span-3 md:col-span-1">
          <h1 className="text-3xl sticky top-6">Projects</h1>
        </header>
        <div className="col-span-3 md:col-span-2 grid grid-cols-1 gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <ProjectCard
              key={index}
              title={`Project ${index}`}
              description="Description useful to the reader"
              imageUrl="https://cdn.shadcnstudio.com/ss-assets/components/card/image-3.png"
              imageDescription="Picture of a something"
            />
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
            I&apos;m a Frontend React Developer who loves building clean,
            intuitive, and meaningful digital experiences.
          </p>
          <br />
          <p>
            Over the past few years, I&apos;ve worked on projects in telecom and
            fast food, modernizing platforms and bringing ideas to life with
            React, Next.js, TypeScript, and AWS. I&apos;m passionate about
            creating things that feel effortless to use — blending design, code,
            and a bit of curiosity.
          </p>
          <br />
          <p>
            Outside of work, you&apos;ll usually find me playing football or
            basketball, tinkering in my homelab and I recently started getting
            into photography. I love cars and my top 5 are probably all
            BMW&apos;s. I hate the BMW XM though{" "}
            <span className="text-accent-foreground">
              (Seriously, what were they thinking).
            </span>
            <br />I tend to explore new hobbies a lot so the hobbies section
            will probably outdated by now
          </p>
          <br />
          <p>
            For me, development isn&apos;t just about code — it&apos;s about
            crafting experiences that make technology feel a little more human.
          </p>
        </div>
      </section>
    </div>
  );
}
