import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center text-center h-20 max-w-216 mx-auto py-8 ">
      <div className="flex flex-row ">
        <Button variant="link" asChild>
          <a href="mailto:ricardo.mayorga9805@gmail.com">Email</a>
        </Button>
        <Button variant="link" asChild>
          <a href="https://www.linkedin.com/in/ricardojmm-be">Linkedin</a>
        </Button>
        <Button variant="link" asChild>
          <a href="https://github.com/RicardoMayorgaMera">Github</a>
        </Button>
      </div>
      <span className="text-pretty flex flex-col md:flex-row">
        © 2025 - {new Date().getFullYear()} All rights reserved.&nbsp;
        <span>Ricardo Mayorga Mera</span>
      </span>
    </footer>
  );
}
