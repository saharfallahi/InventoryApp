import { useState } from "react";

function CategoryForm() {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  const AddCategoryHandler = (e) => {
    e.preventDefault();
    const newCategory = {
      ...categoryFormData,
      createdAt: new Date().toISOString(),
    };
    setCategories((prevState)=>[...prevState, newCategory]);
    setCategoryFormData({ title: "", description: "" });
  };

  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`}>
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Category
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label htmlFor="title" className="block mb-1 text-slate-400">
              title
            </label>
            <input
              type="text"
              name="title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
              value={categoryFormData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1 text-slate-400">
              description
            </label>
            <textarea
              name="description"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full  resize-none"
              value={categoryFormData.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              onClick={(e) => {
                e.preventDefault();
                setIsShow(false);
              }}
            >
              Cancel
            </button>
            <button
              className=" flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
              onClick={AddCategoryHandler}
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        className={`text-slate-600 text-lg mb-4 font-medium ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow(!isShow)}
      >
        Add New Category ?
      </button>
    </section>
  );
}

export default CategoryForm;
