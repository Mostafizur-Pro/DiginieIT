import ServiceDetailsPage from "@/components/Service/ServiceDetailsPage";
type Service = {
  map(
    arg0: (service: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  _id: string;
  id: string;
  name: string;
  details: string;
  features: string[];
  technology: string[];
  tech_details: string;
  image: string;
  cover_img: string;
};

const ServiceDetails = async ({ params }: { params: { id: string } }) => {
  const service: Service = await fetch(
    `https://diginie-it-server.vercel.app/service/${params?.id}`
  ).then((res) => res.json());
  return (
    <div>
      <div>{<ServiceDetailsPage service={service}></ServiceDetailsPage>}</div>
    </div>
  );
};

export default ServiceDetails;

export async function generateStaticParams() {
  const services: Service[] = await fetch(
    "https://diginie-it-server.vercel.app/services"
  ).then((res) => res.json());
  return services.map((service) => ({
    id: String(service?._id),
  }));
}
