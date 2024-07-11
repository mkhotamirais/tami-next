import Link from "next/link";

export default function BoxCard({
  menu,
  className,
}: {
  menu: { href: string; clientRequestHref?: string; label: string; description: string }[];
  className?: string;
}) {
  return (
    <div className={`${className} mb-28`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {menu.map((item, i) => (
          <div
            key={i}
            className="flex min-h-48 flex-col gap-3 relative rounded-lg w-full h-full overflow-hidden bg-white dark:bg-gray-950 p-4 shadow-md"
          >
            <h3 className="text-2xl font-medium">{item.label}</h3>
            <p className="text-sm mb-2">{item.description}</p>
            <div className="self-start mt-auto flex gap-2">
              <Link
                href={item.href}
                type="button"
                aria-label="examples"
                className="bg-green-500 border border-green-500 text-white p-2 hover:opacity-70 text-sm rounded-xl transition-all"
              >
                Detail
              </Link>
              {item?.clientRequestHref && (
                <Link
                  href={item.clientRequestHref}
                  type="button"
                  aria-label="examples"
                  className="border border-green-500 p-2 hover:opacity-70 text-sm rounded-xl transition-all"
                >
                  Client Request
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
