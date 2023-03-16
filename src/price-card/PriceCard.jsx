import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function PriceCard({ type, price, features }) {
  return (
    <>
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {type}
          </h5>
          <h6 className="card-price text-center">
            ${price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {features.map(
              ({ labelClass, iconClass, label, strong, iconlabelClass }) => (
                <li className={labelClass} key={label}>
                  <span className={"fa-li " + iconClass}>
                      {iconlabelClass == "check" ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faTimes} />
                    )}
                  </span>
                  {strong && <strong>{strong} </strong>}
                  {label}
                </li>
              )
            )}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceCard;
