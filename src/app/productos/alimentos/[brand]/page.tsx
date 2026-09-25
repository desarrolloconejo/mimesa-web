import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ brand: string }>;
}

export default async function AlimentosBrandRedirectPage({ params }: PageProps) {
  const resolvedParams = await params;
  redirect(`/productos/consumo-masivo/${resolvedParams.brand}`);
}
