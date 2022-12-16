import Pricecards from "./Pricepagecompo/Pricecards";
import Linkbox from "../Components/Pricepagecompo/Linkbox";
import Sponser from "./Pricepagecompo/Sponser";
import PriceTable from "./Pricepagecompo/PriceTable";
import Questions from "./Pricepagecompo/Questions";
import Accordian from "./Pricepagecompo/Accordian";

export default function Pricepage() {
  return (
    <>
      <div className="signup" style={{ textAlign: "center" }}>
        {" "}
        <b>Sign up today and try the Pro plan for free</b>
      </div>
      <div>
        <h1 className="heading1">
          Choose the perfect plan for your team’s needs
        </h1>
      </div>
      <Pricecards />
      <Linkbox />
      <Sponser />
      <PriceTable />
      <Questions />
      <Accordian />
    </>
  );
}
