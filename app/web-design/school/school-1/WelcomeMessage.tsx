import Image from "next/image";

export default function WelcomeMessage() {
  return (
    <>
      <section className="relative flex flex-col md:flex-row items-center justify-center h-[70vh] py-12 px-3 lg:px-16 border-b leading-relaxed">
        <div className="order-2 md:order-1 flex-1 flex items-center flex-col gap-6 h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-merriweather">
            Discover Excellence at Bluefield Highschool
          </h1>
          <p className="text-sm">
            At Bluefield Highschool, we are committed to providing a nurturing and innovative learning environment. Our
            dedicated faculty and comprehensive programs ensure that every student can reach their full potential and
            prepare for a successful future.
          </p>
          <button
            type="button"
            aria-label="explore"
            className="bg-blue-500 text-white self-start p-3 hover:bg-blue-700 transition-all rounded-full px-4"
          >
            Explore Our Programs
          </button>
        </div>
        <div className="relative top-16 order-1 md:order-2 bg-red-500 min-h-96 flex-grow border border-red-500 flex-1 lg:h-full w-full rounded-full overflow-hidden">
          <Image
            src="/school-1/pex-student-male-removebg-preview.png"
            width={300}
            height={300}
            alt="student"
            className="absolute z-30 rounded-full left-1/2 -translate-x-1/2"
          />
          <BlobMaker1 className="absolute z-20 scale-150 rounded-full w-full h-full right-0" />
          <BlobMaker2 className="absolute z-10 size-56 right-0 bottom-0" />
          <BlobMaker3 className="absolute z-10 size-64 left-0" />
        </div>
      </section>
    </>
  );
}

function BlobMaker1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
      <path
        fill="#0F62FE"
        d="M28.9,-11C40.1,2.8,53.8,20.9,49.4,34.5C45,48.2,22.5,57.5,-2.2,58.8C-27,60.1,-53.9,53.4,-58.4,39.7C-62.9,25.9,-45,5.1,-31.5,-9.9C-18,-24.9,-9,-34.3,-0.1,-34.2C8.8,-34.2,17.7,-24.7,28.9,-11Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

function BlobMaker2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
      <path
        fill="#0F92FE"
        d="M45.3,-38.7C51.5,-28.3,44.4,-9.9,41.4,11.9C38.3,33.6,39.3,58.7,26.1,71.9C12.9,85,-14.6,86.2,-32.1,74.7C-49.5,63.2,-57,38.9,-51,23.5C-45,8.1,-25.6,1.6,-14.9,-9.8C-4.1,-21.3,-2.1,-37.6,8.7,-44.6C19.5,-51.5,39.1,-49.1,45.3,-38.7Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

function BlobMaker3({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
      <path
        fill="#4F92FE"
        d="M24.9,-37.1C33.8,-33,43.8,-28.7,50.3,-21C56.8,-13.3,60,-2.1,60.6,10.3C61.3,22.7,59.5,36.4,51.1,41.9C42.6,47.4,27.5,44.9,13.8,50.5C0.1,56.2,-12.3,70,-20.3,68.2C-28.4,66.3,-32.1,48.7,-33.1,35.4C-34.1,22.2,-32.3,13.3,-31.4,5.8C-30.4,-1.7,-30.3,-7.7,-33.4,-21.1C-36.4,-34.6,-42.7,-55.4,-37.7,-61.3C-32.6,-67.2,-16.3,-58.3,-4.2,-51.8C8,-45.3,15.9,-41.3,24.9,-37.1Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
