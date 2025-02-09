import MyInput from "../../UI/MyInput/MyInput";
import MySelect from "../../UI/MySelect/MySelect";

function PostFilter({ filter, setFilter }) {
  // {search: '', query: ''}

  return (
    <>
      <div>
        <MyInput
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        />
        <MySelect
          defaultValue={"Сортировка:"}
          value={filter.query}
          onChange={(selected) => setFilter({ ...filter, query: selected})}
          options={[
            { value: "title", name: "По заголовку" },
            { value: "subtitle", name: "По описанию" },
          ]}
        />
      </div>
    </>
  );
}

export default PostFilter;
