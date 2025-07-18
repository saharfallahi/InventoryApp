import { useState } from "react";

function ProductForm({ categories,setProducts }) {
  const [productFormData, setProductFormData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setProductFormData({ ...productFormData, [name]: value });
  };

  const AddProductHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setProducts((prevState) => [...prevState, newProduct]);
    setProductFormData({ title: "", quantity: 0, categoryId: "" });
  };

  return (
    <section>
      <div className="mb-6 ">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Product
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
              value={productFormData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block mb-1 text-slate-400">
              quantity
            </label>
            <input
              type="number"
              name="quantity"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
              value={productFormData.quantity}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block mb-1 text-slate-400">
              category
            </label>
            <select
              type="number"
              name="categoryId"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              value={productFormData.categoryId}
              onChange={changeHandler}
            >
              <option value="" className="bg-slate-500 text-slate-300">
                select a category
              </option>
              {categories.map((category) => {
                return (
                  <option
                    key={category.id}
                    value={category.id}
                    className="bg-slate-500 text-slate-300"
                  >
                    {category.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex items-center justify-between gap-x-4">
            <button
              className=" flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
              onClick={AddProductHandler}
            >
              Add New Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ProductForm;
