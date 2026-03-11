import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <aside className="flex h-dvh w-64 flex-col justify-between border-r bg-white p-6">
      {/* Top */}
      <div>
        <div className="mb-10">
          <h1 className="text-xl font-semibold">Webshop</h1>
          <span className="text-sm text-gray-500">Admin panel</span>
        </div>

        <ul className="space-y-2 text-sm font-medium">
          <li>
            <Link href="/" className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100">
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/analytics"
              className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Analytics
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/customers"
              className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Customers
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Bottom profile */}
      <figure className="flex items-center gap-3 border-t pt-4">
        <Image
          src="https://public.r2.headshotpro-cf.com/headshotpro/reviews/695d2d6417d1245c2c36dc50-695d34b1f195682517b83d60-thumbnail.png"
          alt="Portrait"
          width={40}
          height={40}
          className="rounded-full"
        />

        <figcaption className="flex flex-col text-sm">
          <span className="font-medium">Admin user</span>
          <span className="text-gray-500">admin@webshop.com</span>
        </figcaption>
      </figure>
    </aside>
  );
}
