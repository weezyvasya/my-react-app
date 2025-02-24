import { useState } from "react";
import MyInput from "../../UI/MyInput/MyInput";
import MySelect from "../../UI/MySelect/MySelect";
import "./PostFilter.css";
import { useTasksDispatch } from "../../Context/TasksContext";

function PostFilter({hendeleSerchFilter}) {
  const [filter, setFilter] = useState({ search: "", query: "" });

  const dispatch = useTasksDispatch(); // dispath ===  tasksReducer(action)

  return (
    <>
      <div className="filter">
        <MyInput
          placeholder={"Поиск..."}
          value={filter.search}
          onChange={(e) => {
            setFilter({ ...filter, search: e.target.value })
            dispatch({
              type: 'searchText',
              searchText: e.target.value 
            })
          }}
        />
        <MySelect
          defaultValue={"Сортировка:"}
          value={filter.query}
          onChange={(selected) => {
            console.log("select");
            setFilter({ ...filter, query: selected });
            dispatch({
              type: "select",
              query: selected,
            });
          }}
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
