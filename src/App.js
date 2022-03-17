import { useState } from "react";

export const App = () => {
  const [value, updateValue] = useState("");
  const [warningVisibility, updateWarningVisibility] = useState(false);
  const handleClick = () => {
    if (!value) {
      updateWarningVisibility(true);
    } else {
      updateWarningVisibility(false);
    }
  };

  return (
    <div>
      <nav>
        <a href="/">
          <img src={require("./files/images/logo.svg").default} alt="logo" />
        </a>
        <ul>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
          <li>
            <a href="/">Sign In</a>
          </li>
        </ul>
      </nav>

      <section className={"security__section"}>
        <img
          src={require("./files/images/illustration-intro.png")}
          alt="intro"
        />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button>Get Started</button>
      </section>

      <section className={"features__section"}>
        <div className={"card"}>
          <img
            src={require("./files/images/icon-access-anywhere.svg").default}
            alt="access"
          />
          <h1>Access your files, anywhere</h1>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className={"card"}>
          <img
            src={require("./files/images/icon-security.svg").default}
            alt="access"
          />
          <h1>Security you can trust</h1>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className={"card"}>
          <img
            src={require("./files/images/icon-collaboration.svg").default}
            alt="access"
          />
          <h1>Real-time collaboration</h1>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className={"card"}>
          <img
            src={require("./files/images/icon-any-file.svg").default}
            alt="access"
          />
          <h1>Store any type of file</h1>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </section>

      <section className={"stay_productive__section"}>
        <img
          src={require("./files/images/illustration-stay-productive.png")}
          alt=""
        />
        <section className={"stay__productive"}>
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <section className={"know__more"}>
            <a href="/">See how Fylo Works.</a>
            <img
              src={require("./files/images/icon-arrow.svg").default}
              alt="logo"
            />
          </section>
        </section>
      </section>

      <section className={"testimonials__section"}>
        <div className={"t__card"}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <section>
            <img src={require("./files/images/profile-1.jpg")} alt="p1" />
            <section>
              <h1>Satish Pacel</h1>
              <p>Founder & CEO, Huddle</p>
            </section>
          </section>
        </div>

        <div className={"t__card"}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <section>
            <img src={require("./files/images/profile-2.jpg")} alt="p1" />
            <section>
              <h1>Bruce McKenzie</h1>
              <p>Founder & CEO, Huddle</p>
            </section>
          </section>
        </div>

        <div className={"t__card"}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <section>
            <img src={require("./files/images/profile-3.jpg")} alt="p1" />
            <section>
              <h1>Iva Boyd</h1>
              <p>Founder & CEO, Huddle</p>
            </section>
          </section>
        </div>
      </section>

      <div className="footer">
        <img
          src={require("./files/images/bg-curvy-desktop.svg").default}
          alt=""
        />
        <div className={"early__access__card"}>
          <h1>Get Early acccess today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <section>
            <section className={"form"}>
              <input
                type="text"
                placeholder="email@example.com"
                onChange={(e) => updateValue(e.target.value)}
              />
              <p
                style={
                  warningVisibility
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              >
                Please enter a valid email address
              </p>
            </section>
            <button onClick={() => handleClick()}>Get Started For Free</button>
          </section>
        </div>

        <section className="footer_wrapper">
          <img src={require("./files/images/logo.svg").default} alt="logo" />
          <section className="footer_content">
            <section className="footer_description">
              <img
                src={require("./files/images/icon-location.svg").default}
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </section>
            <section className="contacts_section">
              <section>
                <img
                  src={require("./files/images/icon-phone.svg").default}
                  alt="phone"
                />
                <p>+1-543-123-4567</p>
              </section>
              <section>
                <img
                  src={require("./files/images/icon-email.svg").default}
                  alt="email"
                />
                <p>example@fylo.com</p>
              </section>
            </section>
            <section className="about_us">
              <a href="/">About us</a>
              <a href="/">Jobs</a>
              <a href="/">Press</a>
              <a href="/">Blog</a>
            </section>

            <section className="about_us_s2">
              <a href="/">Contact us</a>
              <a href="/">Terms</a>
              <a href="/">Privacy</a>
            </section>

            <section className="social_media">
              <img
                src={require("./files/images/facebook.svg").default}
                alt="facebook"
              />

              <img
                src={require("./files/images/twitter.svg").default}
                alt="twitter"
              />
              <img
                src={require("./files/images/instagram.svg").default}
                alt="instagram"
              />
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};
