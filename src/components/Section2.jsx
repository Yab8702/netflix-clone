import { useState } from "react";

export default function Section2() {
  const [hidden, setHidden] = useState([true, true, true, true, true, true]);
  const [plus, setPlus] = useState([true, true, true, true, true, true]);
  const toggleHidden = (id) => {
    setHidden((prev) => {
      const newState = [...prev];
      newState[id] = !newState[id];
      for (let i = 0; i < newState.length; i++) {
        if (i !== id) {
          newState[i] = true;
        }
      }
      return newState;
    });
    setPlus((prev) => {
      const newState = [...prev];
      newState[id] = !newState[id];
      for (let i = 0; i < newState.length; i++) {
        if (i !== id) {
          newState[i] = true;
        }
      }
      return newState;
    });
  };
  return (
    <div className="w-[62%] mx-auto mt-12">
      <h1 className="text-4xl mb-5">Frequently Asked Questions</h1>
      <ul className="flex flex-col gap-2">
        <li>
          <div className="flex flex-col w-10/12 ">
            <div
              className="flex justify-between bg-[#303030] hover:bg-[#444] cursor-pointer px-4 py-6 text-3xl font-light"
              onClick={() => toggleHidden(0)}
            >
              <h3>What is Netflix?</h3>
              <i
                className={`fa ${
                  plus[0] ? "fa-add font-extralight" : "fa-times"
                } `}
              ></i>
            </div>
            <div
              className={`bg-[#303030] font-light mt-[0.5px] ${
                hidden[0] ? "hidden" : "block"
              }`}
            >
              <div className="text-2xl text-left m-5">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
                <br />
                <br />
                You can watch as much as you want, whenever you want without a
                single commercial – all for one low monthly price. There's
                always something new to discover and new TV shows and movies are
                added every week!
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="flex flex-col w-10/12">
            <div
              className="flex justify-between bg-[#303030] hover:bg-[#444] cursor-pointer px-4 py-6 text-3xl font-light"
              onClick={() => toggleHidden(1)}
            >
              <h3>How much does Netflix cost?</h3>
              <i
                className={`fa ${
                  plus[1] ? "fa-add font-extralight" : "fa-times"
                } `}
              ></i>
            </div>
            <div
              className={`bg-[#303030] font-light mt-[0.5px] ${
                hidden[1] ? "hidden" : "block"
              } `}
            >
              <div className="text-2xl text-left m-5">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from USD2.99 to USD11.99 a month. No extra costs, no contracts.
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex flex-col w-10/12">
            <div
              className="flex justify-between bg-[#303030] hover:bg-[#444] cursor-pointer px-4 py-6 text-3xl font-light"
              onClick={() => toggleHidden(2)}
            >
              <h3>Where can I watch?</h3>
              <i
                className={`fa ${
                  plus[2] ? "fa-add font-extralight" : "fa-times"
                } `}
              ></i>
            </div>
            <div
              className={`bg-[#303030]  font-light mt-[0.5px] 
                      ${hidden[2] ? "hidden" : "block"}`}
            >
              <div className="text-2xl text-left m-5">
                Watch anywhere, anytime, on an unlimited number of devices. Sign
                in with your Netflix account to watch instantly on the web at
                netflix.com from your personal computer or on any
                internet-connected device that offers the Netflix app, including
                smart TVs, smartphones, tablets, streaming media players and
                game consoles.
                <br />
                <br />
                You can also download your favorite shows with the iOS, Android,
                or Windows 10 app. Use downloads to watch while you're on the go
                and without an internet connection. Take Netflix with you
                anywhere.
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex flex-col w-10/12">
            <div
              className="flex justify-between bg-[#303030] hover:bg-[#444] cursor-pointer px-4 py-6 text-3xl font-light"
              onClick={() => toggleHidden(3)}
            >
              <h3>How do I cancel?</h3>
              <i
                className={`fa ${
                  plus[3] ? "fa-add font-extralight" : "fa-times"
                } `}
              ></i>
            </div>
            <div
              className={`bg-[#303030]  font-light mt-[0.5px] ${
                hidden[3] ? "hidden" : "block"
              }`}
            >
              <div className="text-2xl text-left m-5">
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex flex-col w-10/12">
            <div
              className="flex justify-between bg-[#303030] px-4 py-6 text-3xl font-light hover:bg-[#444] cursor-pointer"
              onClick={() => toggleHidden(4)}
            >
              <h3>What can I watch on Netflix?</h3>
              <i
                className={`fa ${
                  plus[4] ? "fa-add font-extralight" : "fa-times"
                } `}
              ></i>
            </div>
            <div
              className={`bg-[#303030] font-light mt-[0.5px]
                      ${hidden[4] ? "hidden" : "block"}`}
            >
              <div className="text-2xl text-left m-5">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex flex-col w-10/12">
            <div
              className="flex justify-between bg-[#303030] px-4 py-6 text-3xl font-light hover:bg-[#444] cursor-pointer"
              onClick={() => toggleHidden(5)}
            >
              <h3>Is Netflix good for kids?</h3>
              <i
                className={`fa ${
                  plus[5] ? "fa-add font-extralight" : "fa-times"
                } `}
              ></i>
            </div>
            <div
              className={`bg-[#303030] font-light mt-[0.5px] ${
                hidden[5] ? "hidden" : "block"
              }`}
            >
              <div className="text-2xl text-left m-5">
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space.
                <br />
                <br />
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don't want kids to see.
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-12 w-11/12">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="flex flex-col lg:flex-row md:flex-row items-center mt-5 overflow-hidden rounded  justify-between">
          <input
            type="text"
            placeholder="Email address"
            className="border outline-0 bg-transparent w-full lg:w-9/12 
            md:w-9/12 py-4 px-3"
          />
          <button className="my-2 flex w-full lg:w-[19%]  border-0 outline-0 bg-[#db0001] text-[20px] text-white cursor-pointer px-10 py-4 items-center justify-between gap-3 mr-14">
            <span>Get Started </span> <i className="fa fa-chevron-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
