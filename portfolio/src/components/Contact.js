import Footer from "./Footer";
import InputField from "./Input";
import React from "react";
import Textarea from "./Textarea";

function Contact() {
  return (
    <div>
      <div class="flex min-h-screen items-center  bg-[#d7d6d6] flex-col">
        <h2 className="text-3xl font-bold tracking-widest mt-4 mb-10  border-b-2 border-gray-600 pb-2 ">
          Contact
        </h2>
        <div class="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <p class="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Enter details to send
          </p>
          <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div class="mb-4 flex flex-col gap-6">
              <InputField type="text" label="Email" id="email" />
              <InputField type="text" label="Contact" id="contact" />
              <Textarea id ='message' label = "Message..." rows = {5} />
            </div>

            <button
              class="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
