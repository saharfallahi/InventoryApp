function Filter({ onSearch, onSort, sort, searchValue, categories,selectedCategory,onSelectCategory }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search" className="text-slate-500 text-lg">
          search
        </label>
        <input
          type="text"
          name="search"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400 "
          value={searchValue}
          onChange={onSearch}
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort" className="text-slate-500 text-lg">
          sort
        </label>
        <select
          name="sort"
          id=""
          className="bg-transparent rounded-xl text-slate-400"
          value={sort}
          onChange={onSort}
        >
          <option value="" className="bg-slate-500 text-slate-300">
            selet a category
          </option>
          <option value="latest" className="bg-slate-500 text-slate-300">
            latest
          </option>
          <option value="earliest" className="bg-slate-500 text-slate-300">
            earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="category" className="text-slate-500 text-lg">
          category
        </label>
        <select
          name="category"
          id=""
          className="bg-transparent rounded-xl text-slate-400"
          value={selectedCategory}
          onChange={onSelectCategory}
        >
          <option value="" className="bg-slate-500 text-slate-300">
            All
          </option>
          {categories.map((category) => {
            return (
              <option
                className="bg-slate-500 text-slate-300"
                value={category.id}
                key={category.id}
              >
                {category.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Filter;
