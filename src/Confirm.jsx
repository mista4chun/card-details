import Complete from "./assets/images/icon-complete.svg";
import Button from "./Button";

function Confirm({ confirmed, setConfirmed }) {
  return (
    <div className="sm:mt-80 md:mt-0 md:flex md:h-screen md:items-center md:justify-center">
      <div className="flex flex-col space-y-5 text-center font-space">
        <img src={Complete} alt="complete" className="mx-auto h-20 w-20" />
        <h1 className="pt-3 text-2xl uppercase">Thank you</h1>
        <p className="pb-4 text-xl text-DarkGrayishViolet">
          We've added your card details
        </p>
        <Button className="w-96" onClick={() => setConfirmed(!confirmed)}>
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Confirm;
