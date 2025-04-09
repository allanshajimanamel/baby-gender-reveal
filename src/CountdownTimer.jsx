import { useEffect, useState } from "react";

const CountdownTimer = ({ initialSeconds }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [showButton, setShowButton] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("Allan & Annie Baby");

  // Countdown logic
  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setShowButton(true);
    }
  }, [secondsLeft]);

  useEffect(() => {
    // Update the title dynamically when the message changes
    document.title = message;
  }, [message]);

  const handleReveal = () => {
    setShowMessage(true);
    setShowButton(false);
    document.body.style.backgroundImage = "url('/reveal.jpg')";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "background 1s ease";
    setMessage("It's a Boy! 🎉");
  };

  return (
    <div className="text-center item-center">
      {secondsLeft > 0 && (
        <h1 className="countdown-text text-100xl font-bold text-blue-600">
          {secondsLeft}
        </h1>
      )}

      {showButton && !showMessage && (
        <button
          onClick={handleReveal}
          className="reveal-button"
        >
          Reveal<br /> 👦 Or 👧
        </button>
      )}

      {showMessage && (
        <div>
          {/* <h2 className="text-5xl font-bold text-red-600 font-serif">🎉 Welcome</h2>
          <br />
          <h2 className="text-8xl font-bold text-red-600"> Harvey Theo Manamel</h2> */}
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
