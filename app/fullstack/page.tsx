import { fullstackMenu } from "@/lib/menu";
import Link from "next/link";

export default function Fullstack() {
  return (
    <div>
      {fullstackMenu.map((item, i) => (
        <Link href={item.href} key={i}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
