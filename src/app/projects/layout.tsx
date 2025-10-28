import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="max-w-216 mx-auto">
        <Button asChild variant="link" className="text-2xl mb-4">
          <Link href={"/#project"}>
            <ArrowLeft />
            All projects
          </Link>
        </Button>
        <div className="">{children}</div>
      </div>
    </>
  );
}
