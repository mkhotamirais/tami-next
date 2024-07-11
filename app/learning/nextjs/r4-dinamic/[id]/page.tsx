import { notFound } from "next/navigation";

export default function R4DinamicId({ params }: { params: { id: string } }) {
  if (parseInt(params.id) > 10) {
    notFound();
  }
  return <div>R4DinamicId id {params.id}</div>;
}
