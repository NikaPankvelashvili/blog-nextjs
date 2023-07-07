"use client";

export default function page() {
  return (
    <section>
      <div className=" flex justify-center">
        <div className="w-1/2">
          <div className=" text-center mt-32 mb-16">
            <h1 className=" text-black font-black mb-4">CONTACT US</h1>
            <h2 className=" font-bold text-5xl text-black mb-6">
              {"Let’s Start a Conversation"}
            </h2>
            <p className=" text-medium_grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </div>
          <div className=" w-full px-12 py-16 bg-purlpe flex justify-between items-start mb-8">
            <div className="w-[45%] text-light_grey">
              <h4 className=" text-sm  pb-4 border-b-2 mb-4">Working hours</h4>
              <h2 className=" font-bold text-xl">Monday To Friday</h2>
              <h3 className="font-bold text-xl mb-2">9:00 AM to 8:00 PM </h3>
              <p>Our Support Team is available 24/7</p>
            </div>
            <div className="w-[45%] text-light_grey">
              <h4 className=" text-sm  pb-4 border-b-2 mb-4">Contact Us</h4>
              <h2 className=" font-bold text-xl">020 7993 2905</h2>
              <p>hello@finsweet.com</p>
            </div>
          </div>
          <form className="mb-32">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none p-6 border mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full outline-none p-6 border mb-4"
            />
            <textarea
              className=" w-full resize-none outline-none p-6 border mb-4 h-[150px] "
              placeholder="Message "
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="w-full bg-yellow py-4 text-center text-black font-bold text-2xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
