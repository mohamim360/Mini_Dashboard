import Link from "next/link";

interface CardProps {
  title: string;
  body: string;
  link: string;
}

export default function Card({ title, body, link }: CardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition flex flex-col h-full">
      {/* Title */}
      <h2 className="font-bold text-lg pb-2 mb-3 border-b border-gray-300 min-h-[60px] line-clamp-2">
        {title}
      </h2>
      {/* Body */}
      <p className="text-sm text-gray-600 flex-grow line-clamp-10 ">
        {body}
      </p>

      <Link
        href={link}
        className="text-blue-500 mt-3 hover:underline "
      >
        Read More →
      </Link>
    </div>
  );
}
