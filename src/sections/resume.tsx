import React, { ForwardedRef, forwardRef } from "react";
import BEM from "bem-cn";
import ResumeBlock from "../components/resume-block";
import SkillBar from "../components/skill-bar";
import "./resume.scss";

const bem = BEM("resume");

interface Props {}

function Resume(_: Props, ref: ForwardedRef<HTMLElement>) {
  return (
    <section ref={ref} className={bem()}>
      <div className={bem("content")}>
        <div className={bem("section")}>
          <h4 className={bem("section-title")}>
            <span>Education</span>
          </h4>
          <div className={bem("section-content")}>
            <ResumeBlock
              name="University of Washington"
              city="Seattle, WA"
              jobSpans={[
                {
                  job: "B.S. Computer Science, B.S. Applied Mathematics",
                  timespan: "Sep 2009 - Jun 2013",
                },
              ]}
            />
          </div>
        </div>
        <div className={bem("section")}>
          <h4 className={bem("section-title")}>
            <span>Work</span>
          </h4>
          <div className={bem("section-content")}>
            <ResumeBlock
              name="Zabble"
              city="San Francisco, CA"
              jobSpans={[
                {
                  job: "Senior Frontend Engineer",
                  timespan: "Mar 2023 - Jul 2023 (Contract)",
                },
              ]}
            >
              <p>
                Sole frontend web engineer on a lean startup team, responsible
                for all feature development and maintenance of the Zabble Zero
                web application. Quickly ramped up on the product, codebase, and
                tech stack in order to provide as much value as possible during
                a short four-month contract.
              </p>
              <p>
                Designed, implemented, and rolled out multiple major features,
                including a single sign-on authentication flow using SAML, bulk
                editing of waste collection invoices, and a data import feature
                allowing clients to bulk-upload facility and waste receptacle
                data into their Zabble account.
              </p>
            </ResumeBlock>
            <ResumeBlock
              name="WeWork"
              city="New York, NY"
              jobSpans={[
                {
                  job: "Staff Frontend Engineer",
                  timespan: "Jan 2022 - Jan 2023",
                },
                {
                  job: "Senior Frontend Engineer",
                  timespan: "Jun 2020 - Jan 2022",
                },
                { job: "Full Stack Engineer", timespan: "Nov 2017 - Jun 2020" },
              ]}
            >
              <p>
                Lead frontend engineer for WeWork&apos;s member-facing web app.
                Led a team of 6+ engineers on numerous initiatives, including
                new feature work, performance & stability improvements, and
                automated testing. Helped build the app all the way from a
                Create React App starter, replacing the legacy AngularJS
                implementation with a modern, performant, and maintainable
                single-page app. Strong focus on data and analytics, surfacing
                key takeaways to product managers in order to inform business
                decisions. Technologies included React, TypeScript, Sass,
                Storybook, and Apollo GraphQL.
              </p>
              <p>
                Focused heavily on writing shareable code as NPM packages with
                intuitive & well-documented interfaces, in order to reduce
                redundancy across other WeWork web products. Examples included a
                shared design system built on TailwindCSS, a collection of
                components for in-app notifications, and a library for building
                map-based search experiences with Mapbox.
              </p>
            </ResumeBlock>
            <ResumeBlock
              name="HopPlotter"
              city="Seattle, WA"
              jobSpans={[
                {
                  job: "Co-Founder, Lead Engineer",
                  timespan: "Jan 2015 - Dec 2019",
                },
              ]}
            >
              <p>
                Designed and implemented the technology behind beer tourism app
                HopPlotter from the ground up. The HopPlotter stack included a
                service-oriented architecture with RESTful APIs, built on a
                Python/Django and PostgreSQL backend; a rich single-page web app
                built on ES6, HTML5, and CSS3; native iOS and Android mobile
                apps built with Swift and Java; and interaction with over a
                dozen external APIs to collect, process, and present brewery
                data. Interesting challenges included building a combined
                username/password and Facebook authentication system, a
                notifications framework shared across multiple platforms, a
                performance analytics console for brewery owners, and a
                responsive mobile web app.
              </p>
            </ResumeBlock>
            <ResumeBlock
              name="Expedia, Inc."
              city="Bellevue, WA"
              jobSpans={[
                {
                  job: "Software Development Engineer II",
                  timespan: "Jul 2014 - Jun 2015",
                },
                {
                  job: "Software Development Engineer I",
                  timespan: "Jul 2013 - Jul 2014",
                },
                {
                  job: "Software Development Intern",
                  timespan: "Jun 2012 - Aug 2012",
                },
              ]}
            >
              <p>
                Full-stack web engineer for Expedia&apos;s corporate travel
                brand, Egencia. Worked on various parts of the stack, including
                a legacy C++ backend, a modern Java backend built on the Spring
                Framework, and frontend web (Backbone.js, jQuery). Interesting
                challenges included replacing an archaic credit card payment
                form with a simplified & streamlined AJAX design; developing a
                web service to integrate Egencia with a thirdparty expense
                management tool, automatically managing clients&apos; expense
                data based on their travel plans; and implementing automatic
                travel booking logic following third-party approval, which
                allowed for price increases within a configurable threshold.
              </p>
            </ResumeBlock>
          </div>
        </div>
        <div className={bem("section")}>
          <h4 className={bem("section-title")}>
            <span>Skills</span>
          </h4>
          <div className={bem("section-content")}>
            <div className={bem("skill-row")}>
              <SkillBar name="HTML/CSS" rating={98} />
              <SkillBar name="JavaScript" rating={95} />
            </div>
            <div className={bem("skill-row")}>
              <SkillBar name="React" rating={88} />
              <SkillBar name="TypeScript" rating={83} />
            </div>
            <div className={bem("skill-row")}>
              <SkillBar name="SEO" rating={65} />
              <SkillBar name="GraphQL/Apollo Client" rating={70} />
            </div>
            <div className={bem("skill-row")}>
              <SkillBar name="Ruby/Rails" rating={70} />
              <SkillBar name="Python/Django" rating={74} />
            </div>
            <div className={bem("skill-row")}>
              <SkillBar name="iOS Development (Swift)" rating={55} />
              <SkillBar name="Android Development (Java)" rating={55} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Resume);
