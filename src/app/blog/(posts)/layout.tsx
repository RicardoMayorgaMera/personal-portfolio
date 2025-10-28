import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import { getBlogPosts } from "../getPosts";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grow max-w-216 mx-auto flex flex-col items-start">
        <Button asChild variant="link" className="text-2xl mb-4">
          <Link href={"/#blog"}>
            <ArrowLeft />
            All posts
          </Link>
        </Button>
        <article className="grow">{children}</article>
      </div>
    </>
  );
}
