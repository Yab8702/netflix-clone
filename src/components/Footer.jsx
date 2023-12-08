export default function Footer() {
  return (
    <footer className=" text-white py-8 mt-12">
      <div className="w-[59%] mx-auto flex flex-col gap-5">
        <div className="flex">
          <h3>
            <a href="#" className="text-gray-400 underline">
              Questions? Contact us.
            </a>
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row mt-4 justify-between w-11/12">
          <div className="mx-4 leading-8">
            <ul>
              <li>
                <a href="#" className="text-gray-400 underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Speed Test
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-4 leading-8">
            <ul>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-4 leading-8">
            <ul>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Ways to Watch
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Corporate Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Netflix Originals
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-4 leading-8">
            <ul>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex  mt-4">
          <div className="mx-2">
            <select
              name="language"
              id="language"
              className="bg-gray-800 text-white px-2 py-1"
            >
              <option value="english">English</option>
              <option value="hindi">amharic</option>
            </select>
          </div>
        </div>
        <div className="flex mt-4">
          <p>Netflix Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
