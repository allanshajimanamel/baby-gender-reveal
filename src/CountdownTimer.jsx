import { useEffect, useState } from "react";

const CountdownTimer = ({ initialSeconds }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [showButton, setShowButton] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("Allan & Annie Baby");
  const [buttonText, setButtonText] = useState("WATCHA 🤔");
  const [messageReady, setMessageReady] = useState(false);
  const [nameReveal, setnameReveal] = useState("Want to know what mom and dad named me?");
  const [welcome, setWelcome] = useState("");
  const [revealNameClicked, setRevealNameClicked] = useState(false);

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
    setTimeout(() => {
      setMessageReady(true);
    }, 4000);
  };

  const handleNameReveal = () => {
    setShowMessage(true);
    setShowButton(false);
    setMessageReady(true)
    setnameReveal("HARVEY THEO MANAMEL")
    setWelcome("🥳")
    setRevealNameClicked(true)
  };

  // Button text change after 2 seconds
  useEffect(() => {
    if (showButton) {
      const textTimer = setTimeout(() => {
        setButtonText("👦 Or 👧");
      }, 3000);
      return () => clearTimeout(textTimer);
    }
  }, [showButton]);

  const getButtonContent = () => {
    if(revealNameClicked) {
      return (
        <>
          <span>{welcome}</span><br />
          <span>{nameReveal}</span>
        </>
      );
    }
    if(!revealNameClicked) {
      return (
        <>
          <span>{nameReveal}</span>
        </>
      );
    }
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
        className={`reveal-button`}>
        <span className={`${buttonText === "WATCHA 🤔" ? "reveal-button-small" : "reveal-button-large"}`}>{buttonText}</span>
        </button>
      )}

      {showMessage && messageReady && (
        <button
        onClick={handleNameReveal}
        className={`reveal-name`}>
          {getButtonContent()}
        </button>
      )}
    </div>
  );
};

export default CountdownTimer;
