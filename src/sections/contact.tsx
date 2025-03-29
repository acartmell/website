import React, { ForwardedRef, useState, forwardRef } from "react";
import BEM from "bem-cn";
import "./contact.scss";

const bem = BEM("contact");

interface Props {}

function Contact(_: Props, ref: ForwardedRef<HTMLElement>) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    if (nameInput.trim().length < 1) {
      setError("Please enter your name");
      return false;
    }
    if (emailInput.trim().length < 1) {
      setError("Please enter your email address");
      return false;
    }
    if (emailInput.indexOf("@") < 0 || emailInput.indexOf(".") < 0) {
      setError("Please enter a valid email address");
      return false;
    }
    if (messageInput.trim().length < 1) {
      setError("Please enter a message before submitting");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (isLoading || isSuccess) {
      return;
    }

    setError("");

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    const formData = {
      name: nameInput.trim(),
      email: emailInput.trim(),
      message: messageInput.trim(),
      access_key: "b6f5f66a-0fc2-42bf-9107-9c267baed55e",
    };
    const reqJson = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: reqJson,
    })
      .then((resp) => {
        setIsLoading(false);
        if (resp.status === 200) {
          setIsSuccess(true);
        } else {
          setError("Something went wrong, please try again in a moment");
        }
      })
      .catch(() => {
        setIsLoading(false);
        setError("Something went wrong, please try again in a moment");
      });
  };

  return (
    <section ref={ref} className={bem()}>
      <div className={bem("content")}>
        <h2 className={bem("title")}>Get in Touch</h2>
        <div className={bem("description")}>
          Interested in working together? Have a question? Feel free to use the
          form below.
        </div>
        {isSuccess ? (
          <div className={bem("success-area")}>
            <i
              className={`fa-regular fa-circle-check ${bem("success-icon")}`}
            ></i>
            <div className={bem("success-message")}>
              Thanks! Your message has been delivered.
            </div>
          </div>
        ) : (
          <form className={bem("form")}>
            <div className={bem("input-row")}>
              <div>
                <label className={bem("label")} htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  className={bem("input")}
                  type="text"
                  value={nameInput}
                  onChange={(ev) => {
                    setNameInput(ev.target.value);
                  }}
                />
              </div>
            </div>
            <div className={bem("input-row")}>
              <div>
                <label className={bem("label")} htmlFor="email">
                  Your Email Address
                </label>
                <input
                  id="email"
                  className={bem("input")}
                  type="email"
                  value={emailInput}
                  onChange={(ev) => {
                    setEmailInput(ev.target.value);
                  }}
                />
              </div>
            </div>
            <div className={bem("input-row")}>
              <label className={bem("label")} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className={bem("input")}
                rows={4}
                value={messageInput}
                onChange={(ev) => {
                  setMessageInput(ev.target.value);
                }}
              />
            </div>
            <div className={bem("input-row")}>
              {!!error.length && <div className={bem("error")}>{error}</div>}
              <button
                className={bem("submit", { loading: isLoading })}
                type="button"
                onClick={handleSubmit}
              >
                {isLoading ? <i className="fa-solid fa-spinner"></i> : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default forwardRef(Contact);
