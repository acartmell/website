import React, { ForwardedRef, forwardRef } from "react";
import BEM from "bem-cn";
import headshot from "../images/headshot.jpg";
import "./about.scss";

const bem = BEM("about");

interface Props {}

function About(_: Props, ref: ForwardedRef<HTMLElement>) {
  return (
    <section ref={ref} className={bem()}>
      <div className={bem("content")}>
        <div className={bem("image")}>
          <img src={headshot} alt="Headshot" />
        </div>
        <div>
          <div className={bem("about")}>
            <div className={bem("title")}>About Me</div>
            <p className={bem("description")}>
              I am a detail-oriented frontend web developer with over a decade
              of experience building beautiful and performant websites, ranging
              from simple static landing pages to complex interactive web apps.
              I excel at breaking down large complicated projects into
              manageable tasks, and pride myself on always delivering work on
              time. When I&apos;m not writing code, I enjoy playing disc golf,
              hiking, and spending time with my wife and our two cats.
            </p>
          </div>
          <div className={bem("contact-resume")}>
            <div>
              <div className={bem("title")}>Contact Info</div>
              <div className={bem("description")}>
                <p>Alex Cartmell</p>
                <p>San Francisco, California</p>
                <p>
                  <a href="mailto:acartmell@gmail.com">acartmell@gmail.com</a>
                </p>
              </div>
            </div>
            <div className={bem("download-container")}>
              <button
                className={bem("download")}
                type="button"
                onClick={() => {
                  window.open("/resume.pdf", "_blank");
                }}
              >
                <i className="fa-solid fa-download"></i>
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(About);
