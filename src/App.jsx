import uploadIllustration from "./assets/image.svg";

function App() {
  return (
    <div className="font-poppins flex h-screen justify-center bg-neutral-50">
      <section className="m-auto w-1/4 rounded-2xl bg-white p-8 text-center shadow-lg">
        <h2 className="text-lg text-gray-800">Upload your image</h2>
        <p className="pt-4 text-xs text-gray-400">
          File should be Jpeg, Png...
        </p>
        <div className="mb-4 mt-8 rounded-2xl border border-dashed border-blue-500 bg-neutral-100 p-8 text-xs text-gray-400">
          <img className="m-auto mb-9" src={uploadIllustration} alt="" />
          Drag & Drop your image here
        </div>
        <span className="text-xs text-gray-400">Or</span>
        <button className=" m-auto mt-5 block space-y-4 rounded-lg bg-blue-500 px-4 py-2 text-xs text-white">
          Choose a file
        </button>
      </section>
    </div>
  );
}

export default App;
