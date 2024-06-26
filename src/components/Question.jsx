import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../AppContext";
import { ArrowRight } from "@material-ui/icons";
import { UserContext } from "../App";
import { useState, useEffect } from "react";
import { BsStars, BsFillMicFill, BsFillPauseFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "block",
    marginTop: "1rem",
  },
  button: {
    background: "white",
  },
}));
function Question() {
  const classes = useStyles();
  const value = useContext(AppContext);
  const { user, setUser } = useContext(UserContext);

  let { questionAnswer } = value.state;
  let { handleChangeInput, nextQuestion } = value.function;

  const [enhancedAnswer, setEnhancedAnswer] = React.useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.edenai.run/v2/text/generation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization:
              `Bearer ${process.env.REACT_APP_EDENS_API_KEY}`,
          },
          body: JSON.stringify({
            providers: "google",
            text: `Enhance my answer ${questionAnswer.answer} to this question ${questionAnswer.question} only 2 paragraphs`,
            temperature: 0.2,
            max_tokens: 300,
            fallback_providers: "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const enhancedText = data.google.generated_text;
      setEnhancedAnswer(() => {
        const enhancedAnswer = enhancedText.replace(/\*/g, " ");
        handleChangeInput({ target: { value: enhancedAnswer } });
        return enhancedAnswer;
      });
      setUser((prev) => {
        const now = prev;
        now.resume = [...now.resume, enhancedText.replace(/\*/g, " ")];
        return now;
      });
      console.log(enhancedText);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  React.useEffect(() => {
    setUser((prev) => ({ ...prev, resume: [] }));
  }, []);

  React.useEffect(() => {
    // Whenever the questionAnswer.answer changes, reset enhancedAnswer
    setEnhancedAnswer("");
  }, [questionAnswer.answer]);

  const [promptString, setPromptString] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const recognition = new window.webkitSpeechRecognition();

  useEffect(() => {
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setPromptString(result);
    };

    recognition.onend = () => {
      if (!isPaused) {
        startListening();
      }
    };

    return () => {
      recognition.abort();
    };
  }, [isPaused]);

  const startListening = () => {
    recognition.start();
    setIsListening(true);
    setIsPaused(false);
  };

  const pauseListening = () => {
    recognition.stop();
    setIsPaused(true);
  };

  return (
    <div>
      <form noValidate autoComplete="on" onSubmit={nextQuestion}>
        <TextField
          id="standard-basic"
          label={questionAnswer.question}
          name={questionAnswer.resumeFieldId}
          value={enhancedAnswer || questionAnswer.answer || promptString}
          onChange={handleChangeInput}
          style={{ width: "30rem" }}
        />
        <Button
          onClick={isListening ? pauseListening : startListening}
          className="aicourse-button"
          style={{
            marginLeft: "0.5rem",
            backgroundColor: isListening ? "red" : "#2234da",
            padding: "1rem",
            color: "white",
            height: "3.5rem",
          }}
        >
          {isListening ? (
            isPaused ? (
              <BsFillMicFill />
            ) : (
              <BsFillPauseFill />
            )
          ) : (
            <BsFillMicFill />
          )}
        </Button>
        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="default"
            className={classes.button}
            endIcon={<ArrowRight />}
          >
            Next
          </Button>
          <Button
            onClick={() => fetchData()}
            style={{
              color: "white",
              backgroundColor: "#ff5045",
              marginLeft: "1rem",
              fontWeight: 620,
            }}
            className={classes.button}
          >
            Enhance with AI
            <BsStars style={{ marginLeft: "0.35rem" }} />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Question;
