import Button from "./Button";

function Form({
  error,
  setError,
  name,
  setName,
  num,
  setNum,
  cvc,
  setCvc,
  date,
  setDate,
  confirmed,
  setConfirmed,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!num || !name || !date || !cvc)
      return setError((currentError) => !currentError);
    setConfirmed(!confirmed);

    setName("");
    setNum("0000 0000 0000 0000");
    setCvc("123");
    setDate("01/23");
  }

  return (
    <form
      className="h-screen items-center justify-center sm:mt-80 sm:max-w-2xl md:-mt-6 md:flex"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="cardName"
            className="text-xs font-semibold uppercase tracking-widest"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="e.g Jane Appleseed"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`placeholder: rounded-md border p-3 font-space outline-none focus:border-DarkGrayishViolet md:w-[30rem] ${error ? "border-Red" : ""}`}
          />
          <span className="text-Red">{error ? "Can not be blank" : ""}</span>
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="cardName"
            className="text-xs font-semibold uppercase tracking-widest"
          >
            Card Number
          </label>
          <input
            type="text"
            maxLength={19}
            value={num}
            onChange={(e) =>
              setNum(
                e.target.value
                  .replace(/\s+/g, "")
                  .replace(/(.{4})/g, "$1 ")
                  .trim(),
              )
            }
            className={`placeholder: rounded-md border p-3 font-space outline-none focus:border-DarkGrayishViolet md:w-[30rem] ${error ? "border-Red" : ""}`}
            placeholder="e.g 1234 5678 9123 0000"
          />
          <span className="text-Red">
            {error ? "wrong format, numbers only" : ""}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex w-auto flex-col space-y-2 pb-6">
            <label
              htmlFor="cardName"
              className="text-xs font-semibold uppercase tracking-widest"
            >
              Exp. date (mm/yy)
            </label>
            <input
              type="month"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`placeholder: w-auto rounded-md border p-3 font-space outline-none focus:border-DarkGrayishViolet ${error ? "border-Red" : ""}`}
            />
            <span className="text-Red">{error ? "Can not be blank" : ""}</span>
          </div>
          <div className="flex w-auto flex-col space-y-2 pb-6">
            <label
              htmlFor="cardName"
              className="text-xs font-semibold uppercase tracking-widest"
            >
              Cvc
            </label>
            <input
              type="numeric"
              max={999}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className={`placeholder: w-auto rounded-md border p-3 font-space outline-none focus:border-DarkGrayishViolet ${error ? "border-Red" : ""}`}
              placeholder="e.g 123"
            />
            <span className="text-Red">{error ? "Can not be blank" : ""}</span>
          </div>
        </div>

        <Button>Confirm</Button>
      </div>
    </form>
  );
}

export default Form;
