import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <main className="px-8 text-center pt-16">
      <div className="mb-12 md:flex md:flex-col md:items-center">
        <h1
          className="text-zinc-600
text-3xl
font-semibold
font-['Bai_Jamjuree'] mb-4 md:max-w-182.5"
        >
          A history of everything you copy
        </h1>
        <p
          className="text-gray-400
text-base
font-normal
font-['Bai_Jamjuree']
leading-6
tracking-tight md:max-w-182.5"
        >
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>

      <div className="md:flex-row md:justify-center flex flex-col items-center gap-6 mb-40">
        <Button color="#26BBA4" content="Download for iOS"></Button>
        <Button color="#6174FF" content="Download for Mac"></Button>
      </div>

      <div className="mb-16.25 md:flex md:flex-col md:items-center">
        <h2
          className="text-zinc-600
text-3xl
font-semibold
font-['Bai_Jamjuree'] mb-4 md:max-w-182.5"
        >
          Keep track of your snippets
        </h2>
        <p
          className="text-gray-400
text-base
font-normal
font-['Bai_Jamjuree']
leading-6
tracking-tight md:max-w-182.5"
        >
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>

      <div className="md:flex-row md:justify-center flex flex-col gap-14 items-center mb-46.5">
        <img className="md:w-[680.65px] w-80" src="pc-mobile.svg" alt="" />

        <div className="md:text-start">
          <div className="mb-16.25">
            <h3
              className="text-zinc-600
text-2xl
font-semibold
font-['Bai_Jamjuree'] mb-2.5"
            >
              Quick Search
            </h3>
            <p
              className="text-gray-400
text-base
font-normal
font-['Bai_Jamjuree']
leading-6
tracking-tight md:w-80"
            >
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>

          <div className="mb-16.25">
            <h3
              className="text-zinc-600
text-2xl
font-semibold
font-['Bai_Jamjuree'] mb-2.5"
            >
              iCloud Sync
            </h3>
            <p
              className="text-gray-400
text-base
font-normal
font-['Bai_Jamjuree']
leading-6
tracking-tight md:w-80"
            >
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>

          <div className="mb-16.25">
            <h3
              className="text-zinc-600
text-2xl
font-semibold
font-['Bai_Jamjuree'] mb-2.5"
            >
              Complete History
            </h3>
            <p
              className="text-gray-400
text-base
font-normal
font-['Bai_Jamjuree']
leading-6
tracking-tight md:w-80"
            >
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16.25 md:flex md:flex-col md:items-center">
        <h2
          className="text-zinc-600
text-3xl
font-semibold
font-['Bai_Jamjuree'] mb-4 md:max-w-182.5"
        >
          Access Clipboard Anywhere
        </h2>
        <p
          className="text-gray-400
text-base
font-normal
font-['Bai_Jamjuree']
leading-6
tracking-tight md:max-w-182.5 md:text-lg"
        >
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>

      <div className="flex justify-center mb-32.5">
        <img className="w-77.75" src="Grouppc.svg" alt="" />
      </div>

      <div className="mb-22.5">
        <h2
          className="text-zinc-600
text-3xl
font-semibold
font-['Bai_Jamjuree'] mb-2.75"
        >
          Supercharge your workflow
        </h2>
        <p
          className="text-gray-400
text-base
font-normal
font-['Bai_Jamjuree']
leading-6
tracking-tight"
        >
          We’ve got the tools to boost your productivity.
        </p>
      </div>
      <div className="md:justify-center md:flex-row flex flex-col items-center gap-14 mb-32.75">
        <div className="md:max-w-80 flex flex-col items-center">
          <img className="mb-10" src="paper.svg" alt="" />

          <div className="mb-16.25">
            <h3
              className="text-zinc-600
text-2xl
font-semibold
font-['Bai_Jamjuree'] mb-2.5"
            >
              Create blacklists
            </h3>
            <p
              className="text-gray-400
text-base
font-normal
font-['Bai_Jamjuree']
leading-6
tracking-tight"
            >
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>
        </div>

        <div className="md:max-w-80 flex flex-col items-center">
          <img className="mb-10" src="text.svg" alt="" />

          <div className="mb-16.25">
            <h3
              className="text-zinc-600
text-2xl
font-semibold
font-['Bai_Jamjuree'] mb-2.5"
            >
              Plain text snippets
            </h3>
            <p
              className="text-gray-400
text-base
font-normal
font-['Bai_Jamjuree']
leading-6
tracking-tight"
            >
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
        </div>

        <div className="md:max-w-80 flex flex-col items-center">
          <img className="mb-10" src="eye.svg" alt="" />

          <div className="mb-16.25">
            <h3
              className="text-zinc-600
text-2xl
font-semibold
font-['Bai_Jamjuree'] mb-2.5"
            >
              Sneak preview
            </h3>
            <p
              className="text-gray-400
text-base
font-normal
font-['Bai_Jamjuree']
leading-6
tracking-tight"
            >
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 md:flex md:flex-col md:items-center">
        <h1
          className="text-zinc-600
text-3xl
font-semibold
font-['Bai_Jamjuree'] mb-4 md:w-80"
        >
          Clipboard for iOS and Mac OS
        </h1>
        <p
          className="text-gray-400
text-base
font-normal
font-['Bai_Jamjuree']
leading-6
tracking-tight md:w-182.5"
        >
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
      </div>

      <div className="md:flex-row md:justify-center flex flex-col items-center gap-6 mb-40">
        <Button color="#26BBA4" content="Download for iOS"></Button>
        <Button color="#6174FF" content="Download for Mac"></Button>
      </div>
    </main>
  );
};

export default Main;
