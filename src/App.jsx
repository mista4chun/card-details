import Form from "./Form";
import CardFrnt from "./assets/images/bg-card-front.png";
import CardBck from "./assets/images/bg-card-back.png";
import Icon from "./assets/images/card-logo.svg";
import { useState } from "react";
import { format } from "date-fns";
import Confirm from "./Confirm";

function App() {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [num, setNum] = useState("0000 0000 0000 0000");
  const [date, setDate] = useState("01/23");
  const [cvc, setCvc] = useState("123");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section
      id="hero"
      className="max-w-8xl container relative mx-auto sm:flex sm:flex-col md:grid md:grid-cols-2"
    >
      <div className="">
        <img
          src={CardFrnt}
          alt="cardFront"
          className="absolute rounded-lg shadow-2xl sm:z-10 sm:ml-5 sm:mt-[8.5rem] sm:w-72 md:z-0 md:ml-40 md:mt-40 md:w-fit"
        />
        <img
          src={CardBck}
          alt="cardBck"
          className="absolute rounded-lg shadow-2xl sm:ml-20 sm:mt-[2.82rem] sm:w-72 md:ml-60 md:mt-[28rem] md:w-fit"
        />
        <img
          src={Icon}
          alt="icon"
          className="absolute sm:z-10 sm:ml-10 sm:mt-[9.5rem] sm:w-14 md:z-0 md:ml-48 md:mt-48 md:w-fit"
        />
        <div className="absolute font-space tracking-widest text-white sm:z-10 sm:ml-10 sm:mt-56 sm:text-[18px] md:z-0 md:ml-48 md:mt-[19rem] md:text-[28px]">
          {num
            .replace(/\s/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim()}
        </div>
        <div className="sm absolute flex font-space uppercase tracking-widest text-white sm:z-10 sm:ml-10 sm:mt-[16.3rem] sm:text-xs md:z-0 md:ml-48 md:mt-[22.5rem] md:text-sm">
          <p className="">{name}</p>
          <p className="sm:ml-24 md:ml-52">{format(new Date(date), "MM/yy")}</p>
        </div>
        <div className="absolute font-space text-white sm:ml-[19.5rem] sm:mt-[7.2rem] sm:text-xs md:ml-[37.6rem] md:mt-[34.8rem] md:text-base">
          {cvc}
        </div>
      </div>
      <div>
        {!confirmed && (
          <Form
            error={error}
            setError={setError}
            name={name}
            setName={setName}
            num={num}
            setNum={setNum}
            cvc={cvc}
            setCvc={setCvc}
            date={date}
            setDate={setDate}
            confirmed={confirmed}
            setConfirmed={setConfirmed}
          />
        )}
        {confirmed && (
          <Confirm confirmed={confirmed} setConfirmed={setConfirmed} />
        )}
      </div>
    </section>
  );
}

export default App;
