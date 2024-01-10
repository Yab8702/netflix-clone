import { Link } from "react-router-dom";

export default function HeaderContent() {
  return (
    <div className="relative top-[30%] lg:top-[65%] lg:left-[5%] max-w-[885px] mt-36 pt-64 pb-36 px-24">
      <h1 className="text-[2.5rem] font-semibold lg:leading-[90px] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[4.375rem] ">
        Unlimited movies, TV shows, and more
      </h1>
      <h3 className="font-normal my-5 text-lg">
        Starts at USD 2.99. Cancel anytime.
      </h3>
      <p className="text-gray-400">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form
        action="#"
        className="flex flex-col lg:flex-row sm:flex-col md:flex-col items-center justify-between mt-5 overflow-hidden rounded gap-2"
      >
        <input
          type="text"
          placeholder="Email address"
          className="border outline-0 bg-transparent lg:w-8/12 sm:w-full md:w-full py-4 px-2"
        />
        <Link to={"/signup"}>
          <button className="flex w-full border-0 outline-0 bg-[#db0001] text-[1.25rem] text-white cursor-pointer lg:px-8 mr-4 lg:py-4 items-center justify-between gap-3 sm:w-full md:-w-full md:px-3 md:py-3 sm:px-3 sm:py-3">
            <span>Get Started </span> <i className="fa fa-chevron-right"></i>
          </button>
        </Link>
      </form>
    </div>
  );
}
