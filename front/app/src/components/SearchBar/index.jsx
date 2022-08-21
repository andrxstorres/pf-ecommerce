import { useState } from "react";
// import { useEffect } from "react";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
=======
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
>>>>>>> 9a465cf1474bc35bdf14a773dbe88451e0a43e27

import { getProductsByName } from "../../redux/actions";

import style from "./index.modules.css";

export default function SearchBar() {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const [textInput, setTextInput] = useState(null);

 //  useEffect(() => {
 //   console.log(textInput);
 //  });

 function onChangeHandler(e) {
  const input = e.target.value;
  if (input === "") {
   setTextInput(null);
  } else {
   setTextInput(input);
  }
 }

 function onSearchHandler(e) {
  e.preventDefault();
  if (!textInput) {
   console.log({ m: "nothing to search!" });
  } else {
   dispatch(getProductsByName(textInput));
<<<<<<< HEAD
   //  navigate("/results");
=======
   setEmptySearch(false);
   navigate("/results");
>>>>>>> 9a465cf1474bc35bdf14a773dbe88451e0a43e27
  }
 }

 return (
  <div>
   <form onSubmit={onSearchHandler} className={style.input}>
    <input
<<<<<<< HEAD
=======
     id="inputBusqueda"
>>>>>>> 9a465cf1474bc35bdf14a773dbe88451e0a43e27
     type="text"
     placeholder="What are you looking for?"
     onChange={onChangeHandler}
    />
    {!textInput ? (
     <button type="submit" disabled>
      {">"}
     </button>
    ) : (
     <button type="submit">{">"}</button>
    )}
   </form>
  </div>
 );
}
