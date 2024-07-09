export default function Sections() {
  return (
    <>
      <header className="bg-gray-300 h-16 flex items-center flex-col justify-center">
        <div>header</div>
        <div>
          inspirasi cari di pinterest ketik:{" "}
          <a
            href="https://id.pinterest.com/search/pins/?eq=web%20design%20page%20b&etslf=5794&len=2&q=web%20design%20page%20blocks&rs=ac"
            className="text-blue-500 underline"
          >
            web design page blocks
          </a>{" "}
        </div>
      </header>
      {/* hero */}
      <section className="min-h-[70vh] group relative bg-gray-100 flex items-center">
        <Layer title="Hero Section" />
        <div className="px-3 sm:px-16 lg:px-32 w-full flex flex-col gap-4 sm:gap-8">
          <h1 className="text-5xl sm:text-6xl font-bold">Who Are You</h1>
          <p className="text-lg text-gray-700">
            You can add background emage to your hero section to make it more attractive
          </p>
          <button type="button" className="self-start border p-3 px-6 rounded-xl bg-gray-800 text-white">
            Call to action
          </button>
        </div>
      </section>
      {/* two columns: image and text */}
      <section className="min-h-[50vh] group relative bg-gray-200">
        <Layer title="Two columns: image and text" />
        <div className="px-3 py-16 sm:px-16 lg:px-32 h-full relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ImageRow />
          <TextRow />
        </div>
      </section>
      {/* three columns: text row */}
      <section className="min-h-[50vh] group relative bg-gray-100">
        <Layer title="Two columns: Text row" />
        <div className="px-3 py-16 sm:px-16 lg:px-32 h-full relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <TextRow />
          <TextRow />
        </div>
      </section>
      {/* three columns: text row */}
      <section className="min-h-[50vh] group relative bg-gray-200">
        <Layer title="Three columns: Text row" />
        <div className="px-3 py-16 sm:px-16 lg:px-32 h-full relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <TextRow />
          <TextRow />
          <TextRow />
        </div>
      </section>
      {/* two columns: image row */}
      <section className="min-h-[50vh] group relative bg-gray-200">
        <Layer title="Two columns: Image row" />
        <div className="px-3 py-16 sm:px-16 lg:px-32 h-full relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ImageRow />
          <ImageRow />
        </div>
      </section>
      {/* A single column large text row */}
      <section className="min-h-[50vh] group relative bg-gray-100">
        <Layer title="A single column large text row" />
        <div className="px-3 py-12 sm:px-16 lg:px-32 h-full relative flex items-center justify-center">
          <h2 className="text-6xl py-12 text-center">A single column large text row</h2>
        </div>
      </section>
      {/* A single columnt cta row */}
      <section className="min-h-[50vh] group relative bg-gray-100">
        <Layer title="A single column cta row" />
        <div className="px-3 py-12 sm:px-16 lg:px-32 h-full relative">
          <div className="w-full">
            <h2 className="my-4 text-3xl font-semibold">Form (you can add background image)</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-400 h-12 rounded-lg" />
              <div className="bg-gray-400 h-12 rounded-lg" />
            </div>
            <div className="bg-gray-400 h-32 rounded-lg mt-2" />
          </div>
        </div>
      </section>
      <footer className="bg-gray-300 h-16 flex items-center justify-center">footer</footer>
    </>
  );
}

function Layer({ title }: { title: string }) {
  return (
    <div className="absolute z-50 bg-black/30 text-white text-base group-hover:text-2xl opacity-0 group-hover:opacity-100 inset-0 flex items-center justify-center transition-all">
      {title}
    </div>
  );
}

function TextRow() {
  return (
    <div className="">
      <h2 className="text-3xl font-semibold my-4">Title</h2>
      <p className="leading-relaxed">
        Dalam ukuran kecil, title bisa dipindah ke atas image. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Corrupti tempora excepturi in facere vero asperiores animi quam veritatis consequuntur eum voluptatibus quos
        vitae doloribus, totam magni possimus nihil quibusdam nemo ducimus cum voluptates sint. Voluptas mollitia
        molestiae porro explicabo ex, dolore impedit at voluptate doloribus velit eligendi et! Unde, sunt.
      </p>
    </div>
  );
}

function ImageRow() {
  return <div className="flex items-center justify-center myborder min-h-56 md:h-full rounded-lg">Image</div>;
}
