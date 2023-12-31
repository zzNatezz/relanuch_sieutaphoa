import React, { useContext } from "react";
import Header from "../../header/Header";
import "./AddtoCartPage.scss";
import { AppContext } from "../../../AppContext/AppContext";
import NoEmptyPage from "./NoEmptyPage";
import EmptyPage from "./EmptyPage";

function AddtoCartPage() {
  const {addToCart} = useContext(AppContext)
  return (
    <>
      <Header />
      {addToCart.length === 0 ? <EmptyPage /> : <NoEmptyPage />}
    </>
  );
}

export default AddtoCartPage;
