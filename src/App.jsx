import "./App.css";


const App = () => {
  return (
    <section className="">
      <div>
        <img src="assets/images/image-omelette.jpeg" className="mb-8" alt="" />
      </div>
      <header className="p-8 mb-4">
        <h1 className="text-4xl font-my-font text-stone-900 mb-5">
          Simple Omelette Recipe
        </h1>
        <p className="font-new-font text-xl text-stone-600">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with
          youre choice of cheese , vegetables, or meats.
        </p>
      </header>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-rose-50 p-6 rounded-2xl mb-5">
          <h1 className="mb-3 font-dope-font text-2xl text-rose-800">
            Preparation time
          </h1>
          <ul className="list-disc flex flex-col justify-center items-center">
            <li className="font-new-font text-xl text-stone-600 w-3/4">
              <span className="font-cool-font text-stone-600">Total</span>:
              Approximately 10 minutes
            </li>
            <li className="font-new-font text-xl text-stone-600 w-3/4">
              <span className="font-cool-font text-stone-600">Preparation</span>
              : 5 minutes
            </li>
            <li className="font-new-font text-xl text-stone-600 w-3/4">
              <span className="font-cool-font text-stone-600">Cooking</span>: 5
              minutes
            </li>
          </ul>
        </div>
      </div>

      <div className="p-8 mb-1">
        <h2 className="text-4xl font-my-font text-brown-800 mb-5">
          Ingredients
        </h2>
        <ul className="list-disc ml-10 mb-4 text-brown-800">
          <li className="font-new-font text-xl text-stone-600 w-3/4 mb-4 pl-4  marker:text-brown-800">
            2-3 large eggs
          </li>
          <li className="font-new-font text-xl text-stone-600 w-3/4 mb-4 pl-4  marker:text-brown-800">
            salt, to taste
          </li>
          <li className="font-new-font text-xl text-stone-600 w-3/4 mb-4 pl-4  marker:text-brown-800">
            Pepper, to taste
          </li>
          <li className="font-new-font text-xl text-stone-600 w-3/3 mb-4 pl-4  marker:text-brown-800">
            1 tablespoon of butter or oil
          </li>
          <li className="font-new-font text-xl text-stone-600 w-3/3 mb-4 pl-4  marker:text-brown-800">
            Optional filling: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <hr className=" w-4/5 mb-5" />
      </div>

      <div className="p-8 mb-1">
        <h2 className="text-4xl font-my-font text-brown-800 mb-5">
          Instructions
        </h2>
        <ol className="list-decimal ml-8 mb-4 marker:font-dope-font">
          <li className="font-new-font text-xl text-stone-600 mb-4 pl-4 marker:text-brown-800">
            <span className="font-cool-font text-stone-600">Beat the eggs</span>
            : In a bowl, beat the eggs with a pinch of salt and pepper until
            they are well mixed. You can add a tablespoon of water or milk for a
            fluffier texture.
          </li>
          <li className="font-new-font text-xl text-stone-600 mb-4 pl-4  marker:text-brown-800">
            <span className="font-cool-font text-stone-600">Heat the pan</span>:
            Place a non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li className="font-new-font text-xl text-stone-600 mb-4 pl-4  marker:text-brown-800">
            <span className="font-cool-font text-stone-600">
              Cook the omelette
            </span>
            : Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.
          </li>
          <li className="font-new-font text-xl text-stone-600 mb-4 pl-4  marker:text-brown-800">
            <span className="font-cool-font text-stone-600">
              Add fillings (optional)
            </span>
            : When the eggs begins to set at the edges but are still slightly
            runny in the middle, sprinkle your chosen fillings over one half of
            the omelette.
          </li>
          <li className="font-new-font text-xl text-stone-600 mb-4 pl-4  marker:text-brown-800">
            <span className="font-cool-font text-stone-600">
              Fold and serve
            </span>
            : As the omelette continues to cook, carefully lift one edge and
            fold it over the fillings. Let it cok for another minute, then slide
            it onto a plate.
          </li>
          <li className="font-new-font text-xl text-stone-600 mb-4 pl-4  marker:text-brown-800">
            <span className="font-cool-font text-stone-600">Enjoy</span>: Serve
            hot, with additional salt and pepper if needed.
          </li>
        </ol>
      </div>

      <div className="flex justify-center items-center">
        <hr className=" w-4/5 mb-5" />
      </div>
      <div className="p-8 mb-1">
        <h2 className="text-4xl font-my-font text-brown-800 mb-5">Nutrition</h2>
        <p className="font-new-font text- text-stone-600">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
      </div>
      <div className="flex justify-center mb-7">
  <table className="table-auto w-4/5 border-collapse">
    <tbody>
      <tr>
        <td className="border-b-0 px-4 py-2 text-center font-new-font text-stone-500">Calories</td>
        <td className="border-b-0 px-4 py-2 text-center font-cool-font text-brown-800">277kcal</td>
      </tr>
      <tr className="border-t border-t-gray-300">
        <td className="border-b-0 px-4 py-2 text-center font-new-font text-stone-500">Carbs</td>
        <td className="border-b-0 px-4 py-2 text-center font-cool-font text-brown-800">0g</td>
      </tr>
      <tr className="border-t border-t-gray-300">
        <td className="border-b-0 px-4 py-2 text-center font-new-font text-stone-500">Protein</td>
        <td className="border-b-0 px-4 py-2 text-center font-cool-font text-brown-800">20g</td>
      </tr>
      <tr className="border-t border-t-gray-300">
        <td className="border-b-0 px-4 py-2 text-center font-new-font text-stone-500">Fat</td>
        <td className="border-b-0 px-4 py-2 text-center font-cool-font text-brown-800">22g</td>
      </tr>
    </tbody>
  </table>
</div>

    </section>
  );
};

export default App;
