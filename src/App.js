import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import PriceCard from "./price-card/PriceCard";

const data = [{
  type: "Free",
  price: 0,
  features: [
    {
      label: "Single User",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "5GB Storage",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Unlimited Public Projects",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Community Access",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Unlimited Private Projects",
      iconlabelClass: "fa-times",
      labelClass:"text-muted"
    },
    {
      label: "Dedicated Phone Support",
      iconlabelClass: "fa-times",
      labelClass:"text-muted"
    },
    {
      label: "Free Subdomain",
      iconlabelClass: "fa-times",
      labelClass:"text-muted"
    },
    {
      label: "Monthly Status Reports",
      iconlabelClass: "fa-times",
      labelClass:"text-muted"
    }
  ]
}, {
  type: "Plus",
  price: 9,
  features: [
    {
      label: "5 Users",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "50GB Storage",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Unlimited Public Projects",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Community Access",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Unlimited Private Projects",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Dedicated Phone Support",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Free Subdomain",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Monthly Status Reports",
      iconlabelClass: "fa-times",
      labelClass:"text-muted"
    }
  ]
}, {
  type: "Pro",
  price: 49,
  features: [
    {
      label: "Unlimited Users",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "150GB Storage",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Unlimited Public Projects",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Community Access",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Unlimited Private Projects",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Dedicated Phone Support",
      iconlabelClass: "check",
      labelClass:""
    },
    {
      label: "Free Subdomains",
      iconlabelClass: "check",
      labelClass:"",
      strong: "Unlimited"
    },
    {
      label: "Monthly Status Reports",
      iconlabelClass: "check",
      labelClass:""
    }
  ]
}]
function App() {
  return (
    <div className="App pricing py-5">
      <div className="container">
        <div className="row">
          {data.map(({type, price, features}) => (
            <div className="col-lg-4" key={type}>
              <PriceCard type={type} price={price} features={features}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
