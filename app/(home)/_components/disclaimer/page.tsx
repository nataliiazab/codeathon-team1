import React from "react";

const Disclaimer = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Disclaimer</h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          The information provided on this website is for general informational
          purposes only. All information on the site is provided in good faith,
          however we make no representation or warranty of any kind, express or
          implied, regarding the accuracy, adequacy, validity, reliability,
          availability or completeness of any information on the site.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Under no circumstance shall we have any liability to you for any loss
          or damage of any kind incurred as a result of the use of the site or
          reliance on any information provided on the site. Your use of the site
          and your reliance on any information on the site is solely at your own
          risk.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Third-Party Links
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The site may contain (or you may be sent through the site) links to
          other websites or content belonging to or originating from third
          parties or links to websites and features in banners or other
          advertising. Such third-party links are not investigated, monitored,
          or checked for accuracy, adequacy, validity, reliability,
          availability, or completeness by us.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Changes to this Disclaimer
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We reserve the right to modify this disclaimer at any time. We will
          notify you of any changes by posting the new disclaimer on this page.
          You are advised to review this disclaimer periodically for any
          changes. Changes to this disclaimer are effective when they are posted
          on this page.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>

        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 text-sm font-medium text-white bg-[#059669] rounded-full hover:bg-[#037f57] transition duration-200"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Disclaimer;
