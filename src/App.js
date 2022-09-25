import {useEffect, useState} from "react";
import './App.css';
import axios, {Axios} from "axios";
import {logDOM} from "@testing-library/react";
import ProductPageComponent from "./containers/ProductPageComponent"


function App() {

  return (
      <div>
        <ProductPageComponent/>
      </div>
  );
}

export default App;
