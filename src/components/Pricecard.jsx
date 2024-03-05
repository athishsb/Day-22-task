export default function Pricecard({props}) {

  return (
    <div className="col">
      <div className="card mb-5">
        <div className="card-body">
          <h5 className="card-title text-center text-muted">{props.plan}</h5>
          <h6 className="card-price text-center">
            {props.price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.user}</li>
            <li><span className="fa-li"><i className="fa fa-check"></i></span>50 GB Storage</li>
            <li><span className="fa-li"><i className="fa fa-check"></i></span>Unlimited Public Projects</li>
            <li><span className="fa-li"><i className="fa fa-check"></i></span>Community Access</li>
            <li className={props.project}><span className="fa-li"><i className={props.projectIcon}></i></span>Unlimited Private Projects</li>
            <li className={props.phone}><span className="fa-li"><i className={props.phoneIcon}></i></span>Dedicated Phone Support</li>
            <li className={props.subDomain}><span className="fa-li"><i className={props.subDomainIcon}></i></span>{props.domain}</li>
            <li className={props.reports}><span className="fa-li"><i className={props.reportsIcon}></i></span>Monthly Status Reports</li>
          </ul>
          <div className="d-grid">
            <button className="btn btn-primary">BUTTON</button>
          </div>
        </div>
      </div>
    </div>
  );
}
