import React, { useContext } from "react";
import Header from "../../header/Header";
import "./AddtoCartPage.scss";
import homeTotalLavAz from "../../../MainStorage/homeTotalLavAz";
import Icon from "../../imagin/icon/Icon";
import { Link } from "react-router-dom";
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
