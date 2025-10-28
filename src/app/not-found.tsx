import { Link } from "next-view-transitions";

export default function notFoundPost({}) {
  return (
    <div className="h-full flex flex-col items-start">
      <h1 className="text-6xl">Oops!</h1>
      <p>Seems I don't have what you are looking for. </p>
      <p>
        Let's go back
        <strong>
          <Link href="/"> home</Link>
        </strong>
      </p>
    </div>
  );
}
