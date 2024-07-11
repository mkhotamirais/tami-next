import { Metadata } from "next";

type Params = { params: { id: string } };

// namanya harus 'generateMetadata'
export const generateMetadata = ({ params }: Params): Metadata => {
  return {
    title: `din r6 ${params.id}`,
  };
};

export default function R6MetadataId({ params }: Params) {
  return <div>R6MetadataId {params.id}</div>;
}
