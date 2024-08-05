import AdsnButton from "./AdsnButton";

const ComingSoon = () => {
  return (
    <div className="p-10 relative flex justify-center items-center w-full bg-cover bg-center bg-[url('/ADSN-2024/background_coming_soon.webp')]">
      <div className="text-center text-white">
        <h1 className="p-6 font-extrabold tracking-wide text-4xl">
          2024 CONFERENCE PROGRAM COMING SOON
        </h1>
        <p className="p-6 text-xl font-bold">
          Stay tuned - 2024 conference program coming soon.
        </p>
        <p className="px-10 p-6 text-xl">
          This year, we are pleased to offer a comprehensive program designed to
          be just as stimulating and informative as the 2023 conference. Please
          stay tuned for updates and announcements. For now, you can review the
          2023 conference wrap-up below for a preview of the upcoming topics and
          discussions awaiting you this year.
        </p>
        <div className="p-6 flex flex-row">
          <div className="flex-1">
            <AdsnButton
              text="Abstract Submission Portal"
              url="https://curtin.au1.qualtrics.com/jfe/form/SV_0Pdhwdfxu0NWJH8"
            />
          </div>
          <div className="flex-1">
            <AdsnButton text="Registration (Coming Soon)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
