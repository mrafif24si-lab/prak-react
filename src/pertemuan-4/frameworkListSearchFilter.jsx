import frameworkData from "./framework.json";
import { useState } from "react";
export default function FrameworkList() {
  /** Deklrasai state **/
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  /*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
      searchDev:"",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};

    /** Deklrasai Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm)||
      framework.details.releaseYear.toString().includes(_searchTerm);


    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-800 via-yellow-900 to-stone-900 p-8 font-serif">
      {/* Background Wanted Poster Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='10' y='30' fill='%23000' font-size='12'%3EWANTED%3C/text%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Header dengan gaya koboi */}
      <div className="relative mb-12 text-center border-b-4 border-amber-700 pb-6">
        <h1
          className="text-5xl md:text-7xl font-black text-amber-200 drop-shadow-lg tracking-wider"
          style={{
            fontFamily: "'Courier New', 'Georgia', monospace",
            textShadow: "4px 4px 0 #4a2e1e",
          }}
        >
          🔫 GUNSLICKER'S FRAMEWORK 🔧
        </h1>
        <p className="text-amber-300 text-xl italic mt-2 tracking-wide">
          "The Only Frameworks Worth Rustlin' In These Here Parts"
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <span className="text-amber-400 text-2xl">⭐</span>
          <span className="text-amber-400 text-2xl">⭐</span>
          <span className="text-amber-400 text-2xl">⭐</span>
          <span className="text-amber-400 text-2xl">⭐</span>
          <span className="text-amber-400 text-2xl">⭐</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search framework..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={handleChange}
        />

        <select
          name="selectedTag"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={handleChange}
        >
          
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="relative group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            {/* Decorative bullet holes */}
            <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-stone-900 opacity-40"></div>
            <div className="absolute -right-2 -bottom-2 w-5 h-5 rounded-full bg-stone-900 opacity-30"></div>

            {/* Wanted poster style card */}
            <div
              className="border-8 border-double border-amber-700 rounded-sm bg-amber-50/95 p-6 shadow-2xl"
              style={{
                backgroundImage: "linear-gradient(to bottom, #fdf6e3, #f4e4bc)",
              }}
            >
              {/* Top decorative scroll */}
              <div className="text-center text-amber-800 text-3xl mb-2">☠️</div>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Left side - Badge / ID area */}
                <div className="md:w-1/3 border-r-2 border-dashed border-amber-700 pr-6">
                  <div className="bg-amber-800/10 p-3 rounded-sm text-center">
                    <div className="w-24 h-24 mx-auto bg-amber-800 rounded-full flex items-center justify-center mb-3 border-4 border-amber-600">
                      <span className="text-4xl">🤠</span>
                    </div>
                    <h2
                      className="text-2xl font-black text-stone-800 uppercase tracking-wider"
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      {item.name}
                    </h2>
                    <div className="h-0.5 w-12 bg-amber-700 mx-auto my-2"></div>
                    <p className="text-xs text-stone-600 font-mono">
                      OUTLAW ID: #{item.id}
                    </p>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="md:w-2/3 space-y-3">
                  <p className="text-stone-700 leading-relaxed text-base italic">
                    "{item.description}"
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-sm border-t border-b border-amber-700/30 py-3 my-2">
                    <div>
                      <span className="font-bold text-amber-800">
                        🔫 GUNSLINGER:
                      </span>
                      <span className="ml-2 text-stone-700">
                        {item.details.developer}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-amber-800">
                        📅 YEAR OF THE DUEL:
                      </span>
                      <span className="ml-2 text-stone-700">
                        {item.details.releaseYear}
                      </span>
                    </div>
                  </div>

                  {/* Wanted Poster link style */}
                  <a
                    href={item.details.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-800 text-amber-100 px-4 py-2 rounded-sm font-bold hover:bg-amber-900 hover:scale-105 transition-all duration-200 shadow-md"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    📜 WANTED POSTER →
                    <span className="text-xs">(Visit Website)</span>
                  </a>

                  {/* Tags as bullet casings */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2 mt-1">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-amber-800/20 text-stone-800 px-3 py-1 text-xs rounded-full border border-amber-600 font-mono font-bold"
                        >
                          ⚡ {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom cowboy quote */}
              <div className="mt-4 pt-3 text-center text-amber-700 text-xs border-t border-amber-700/30 italic">
                "May your code compile faster than a rattlesnake strikes"
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer dengan lasso rope effect */}
      <footer className="mt-12 text-center text-amber-400/70 text-sm border-t border-amber-700/50 pt-6">
        <p>
          🏜️ Wagon Train Approved • Proudly Developed in the Wild West • Yeehaw!
          🐎
        </p>
        <p className="text-xs mt-2">© 1885 - The Code Rangers Association</p>
      </footer>
    </div>
  );
}
