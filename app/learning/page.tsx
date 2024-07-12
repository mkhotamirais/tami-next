import { learningHomeMenu } from "@/lib/learning-menu";

export default function Learning() {
  return (
    <section className="">
      {learningHomeMenu.map((item, index) => (
        <div className="mb-2" key={index}>
          <a href={item.href} className="text-blue-500 hover:underline">
            {item.label}
          </a>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}
