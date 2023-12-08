import React, { useEffect, useState } from "react";
import dropdown from "../assets/images/down-icon.png";
import { SvgOne, SvgTwo, SvgThree, SvgFour } from "./Svg";
// import { endpoints } from "../request";
import axios from "axios";
// import { trending } from "../trending";
export default function Section1() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [treandingNow, setTreandingNow] = useState(null);
  const [movie_eng, setMovie_eng] = useState(null);
  const [movie_other, setMovie_other] = useState(null);
  const [tv_eng, setTv_eng] = useState(null);
  const [tv_other, setTv_other] = useState(null);

  useEffect(() => {
    axios.get("trending.json").then((response) => {
      const data = response.data;
      const movie_eng = data.slice(0, 5);
      const movie_other = data.slice(5, 10);
      const tv_eng = data.slice(10, 15);
      const tv_other = data.slice(15, 20);
      setTreandingNow(movie_eng);
      setMovie_eng(movie_eng);
      setMovie_other(movie_other);
      setTv_eng(tv_eng);
      setTv_other(tv_other);

      // console.log(data);
    });
  }, []);
  const handleOptionClick = (option) => {
    if (option === "Movies- English") {
      setTreandingNow(movie_eng);
    } else if (option === "Movies- Other Languages") {
      setTreandingNow(movie_other);
    } else if (option === "Tv Show- English") {
      setTreandingNow(tv_eng);
    } else if (option === "Tv Show- Other Languages") {
      setTreandingNow(tv_other);
    }

    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div className="w-[62%] mx-auto flex flex-col mt-5 box-border">
      <div className="plans bg-violet-500 mt-5 px-10 pt-6 pb-4 rounded-lg leading-10 hover:scale-105 transition duration-500">
        <h1 className="text-4xl">Plans to suit your needs and your budget</h1>
        <h3 className="text-lg text-gray-300 mt-5">
          Enjoy Netflix starting at just USD 2.99.
        </h3>
      </div>
      <div className="flex flex-col mt-12 text-left">
        <h1 className="text-4xl mb-5">Trending Now</h1>
        <div className="relative inline-block w-full lg:w-1/4 md:w-1/4 bg-transparent border border-gray-300 rounded-md">
          <div
            className="px-8 py-2 border border-gray-300 rounded-md cursor-pointer flex justify-between items-center"
            onClick={() => setShowOptions(!showOptions)}
          >
            {selectedOption ? selectedOption : "Movies - English"}
            <img src={dropdown} alt="Dropdown" className="ml-2 w-2 h-2" />
          </div>
          {showOptions && (
            <div className="absolute top-10 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md text-black">
              <div
                className="px-8 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick("Movies- English")}
              >
                Movies - English
              </div>
              <div
                className="px-8 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  handleOptionClick("Movies- Other Languages");
                }}
              >
                Movies - Other Languages
              </div>
              <div
                className="px-8 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick("Tv Show- English")}
              >
                Tv Shows - English
              </div>
              <div
                className="px-8 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick("Tv Show- Other Languages")}
              >
                Tv Shows - Other Languages
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row w-full text-black gap-3 mt-6">
        {treandingNow?.map(
          (item) =>
            item.trending && (
              <div className="w-2/12  ">
                <img
                  src={`${item.trending}`}
                  className="w-full h-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                  alt=""
                />
              </div>
            )
        )}

        {/* <div className=" w-2/12 bg-white h-[350px]">{}</div>
        <div className=" w-2/12 bg-white h-[350px]">{}</div>
        <div className="w-2/12 bg-white h-[350px]">{}</div>
        <div className="w-2/12 bg-white h-[350px]">{}</div> */}
      </div>
      <div className="flex flex-col mt-12 text-left">
        <h1 className="text-4xl mb-5">Play Mobile Games</h1>
        <div className="flex flex-row bg-test relative items-center justify-between overflow-hidden py-6 rounded-lg">
          <div className="w-2/4 bg-left h-[300px]  flex items-center">
            <div className="z-10 flex flex-col gap-4 mt-10 ml-8">
              <h2 className="text-4xl bold ">
                Mobile games now included in every plan
              </h2>
              <p className="text-lg text-gray-200">
                No ads, extra fees, or in-app purchases. Enjoy unlimited access
                to a growing catalog of popular and exclusive games.
              </p>
            </div>
          </div>
          <div className=" bg-ing "></div>
          <div className="bg-gr"></div>
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-4xl mb-5 mt-12">More Reason to Join</h1>
        <div className="flex flex-col lg:flex-row md:flex-row gap-3 more text-left">
          <div className="w-full lg:w-1/4 md:w-1/4 bg-white h-[350px] flex flex-col justify-between">
            <h1 className="text-3xl mt-8 ml-6 ">
              Stories tailored <br />
              to your taste
            </h1>
            <div className="flex justify-end">
              <SvgOne />
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/4 bg-white h-[350px] flex flex-col justify-between">
            <h1 className="text-3xl mt-8 ml-6">
              Cancel or <br />
              switch plans <br />
              anytime
            </h1>

            <div className="flex justify-end">
              <SvgTwo />
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/4 bg-white h-[350px] flex flex-col justify-between">
            <h1 className="text-3xl mt-8 ml-6">
              A place just for <br />
              kids
            </h1>
            <div className="flex justify-end">
              <SvgThree />
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/4 bg-white h-[350px] flex flex-col justify-between">
            <h1 className="text-3xl mt-8 ml-6">
              For your <br />
              phone, tablet,
              <br /> laptop, and TV
            </h1>
            <div className="flex justify-end">
              <SvgFour />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
