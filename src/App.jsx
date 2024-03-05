import Pricecard from "./components/Pricecard";

export default function App() {
  let data = [
    {
      plan: "FREE",
      price: "$0",
      user: "Single User",
      project: "text-muted",
      projectIcon: "fa fa-times",
      phone: "text-muted",
      phoneIcon: "fa fa-times",
      domain: "Free Subdomain",
      subDomain: "text-muted",
      subDomainIcon: "fa fa-times",
      reports: "text-muted",
      reportsIcon: "fa fa-times",
    },
    {
      plan: "PLUS",
      price: "$9",
      user: "5 Users",
      project: "",
      projectIcon: "fa fa-check",
      phone: "",
      phoneIcon: "fa fa-check",
      domain: "Free Subdomain",
      subDomain: "",
      subDomainIcon: "fa fa-check",
      reports: "text-muted",
      reportsIcon: "fa fa-times",
    },
    {
      plan: "PRO",
      price: "$49",
      user: "Unlimited Users",
      project: "",
      projectIcon: "fa fa-check",
      phone: "",
      phoneIcon: "fa fa-check",
      domain: "Unlimited Free Subdomain",
      subDomain: "",
      subDomainIcon: "fa fa-check",
      reports: "",
      reportsIcon: "fa fa-check",
    },
  ];

  return (
    <section className="price py-5">
      <div className="container">
        <div className="row">
          {data.map((d, i) => (
            <Pricecard key={i} props={d} />
          ))}
        </div>
      </div>
    </section>
  );
}

