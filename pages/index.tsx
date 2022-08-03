import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const socialIcons = [
  {
    id: 1,
    title: 'email',
    icon: 'faEmail',
    url: 'jaamaalxyz@gmail.com',
  },
  {
    id: 2,
    title: 'linkedin',
    icon: 'faLinkedIn',
    url: 'https://www.linkedin.com/in/jaamaalxyz/',
  },
  {
    id: 3,
    title: 'github',
    icon: 'faGithub',
    url: 'https://github.com/jaamaalxyz/',
  },
  {
    id: 4,
    title: 'website',
    icon: 'faWeb',
    url: 'https://jaamaal.com/',
  },
  {
    id: 5,
    title: 'medium',
    icon: 'faMedium',
    url: 'https://jaamaalxyz.medium.com/',
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Nexsum - A resume template by Md. Jamal Uddin</title>
        <meta
          name="title"
          content="Nexsum - A resume template by Md. Jamal Uddin"
        />
        <meta
          name="description"
          content="Nexsum built on top of Next.js + TypeScript + TailwindCSS"
        />
      </Head>
      <div className="m-auto bg-slate-50">
        <header className="flex">
          <div>
            <Image
              src="https://avatars.githubusercontent.com/u/20262255?v=4"
              alt="avatar"
              width={'200'}
              height={'200'}
            />
          </div>
          <div>
            <h1>Md. Jamal Uddin</h1>
            <div className="flex">
              {socialIcons.map((item) => (
                <div key={item.id}>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </header>
        <main>
          <section>
            <h2>Experiences:</h2>
            <article>
              <h3>National Polymer Industries Ltd.</h3>
              <h4>
                Software Developer, IT &amp; MIS (Jan, 2020 - Present) .
                Full-time
              </h4>
              <ul>
                <li>
                  Developing a scalable digital solution for the NOPLY sales
                  team, which helps generate millions of BDT sales per day and
                  increased by almost 30% of company growth.
                </li>
                <li>
                  Building backend services using Node.js &amp; TypeScript
                  ecosystem with Oracle Databases
                </li>
                <li>
                  Web &amp; Mobile Apps using React, React Native &amp;
                  TypeScript ecosystem
                </li>
              </ul>
            </article>
            <article>
              <h4>
                Junior Executive, IT &amp; MIS, (Mar, 2018 - Dec, 2019) .
                Full-time
              </h4>
              <ul>
                <li>Database Programming</li>
                <li>Oracle BI Reporting</li>
                <li>Web Development</li>
              </ul>
            </article>
            <article>
              <h4>
                Assistant Executive, IT &amp; MIS, (Oct, 2016 - Feb, 2018) .
                Full-time
              </h4>
              <ul>
                <li>Oracle EBS Data Preparation</li>
                <li>Data Cleaning &amp; Network Troubleshooting</li>
              </ul>
            </article>
          </section>
          <section>
            <h2>Academic &amp; Pet Projects:</h2>
            <article>
              <h3>Academic Project</h3>
              <h4></h4>
              <ul>
                <li></li>
              </ul>
            </article>
            <article>
              <h3>Recent Pet Project</h3>
              <h4>Amal Tracker</h4>
              <ul>
                <li></li>
              </ul>
            </article>
          </section>
          <section>
            <h2>Education:</h2>
            <article>
              <h3>The International University of Scholars</h3>
              <h4>
                BSc in Computer Science &amp; Engineering, (Apr, 2021 - Present)
              </h4>
            </article>
            <article>
              <h3>Rajshahi Polytechnic Institute</h3>
              <h4>
                Diploma-in-Engineering, Computer Technology, CGPA: 3.49/4.00
              </h4>
            </article>
            <article>
              <h3>Uzirpur Golabari Islamia Dakhil Madrasah</h3>
              <h4>SSC (Dakhil), Science, GPA: 5.00/5.00</h4>
            </article>
          </section>
          <section>
            <h2>Honors &amp; Awards:</h2>
            <article>
              <ul>
                <li></li>
              </ul>
            </article>
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Home;
