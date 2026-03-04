import PropertyDetails from "@/views/PropertyDetails";

interface PropertyPageProps {
  params: { id: string };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  return <PropertyDetails id={params.id} />;
}
