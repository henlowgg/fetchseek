import React, { useEffect, useState } from "react";
import Select from "react-select";
import api from "../utils/api";

const CustomSelect = ({ setSelectedBreeds }) => {
  const [selectOptions, setSelectOptions] = useState([]);

  const customStyles = {
    control: (base) => ({
      ...base,
      padding: [0],
      fontSize: 18,
      font: "white",
      outline: "#131313",
      background: "#222222",
      height: "100%",
      minWidth: "250px",
      borderWidth: "2px",
      // border: 0,
      // boxShadow: "1px 6px 10px 0px rgba(255, 255, 255, 0.63)",
      // webkitBoxShadow: "1px 6px 10px 0px rgba(255, 255, 255, 0.63)",
      // mozBoxShadow: "1px 6px 10px 0px rgba(255, 255, 255, 0.63)",
      borderColor: "rgb(228 228 231)",
      borderStyle: "none",
      borderRadius: "5px",
      
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#222222" : "#131313",
      borderRadius: "0px",
      boxBorderRadius: "5px",
      

    }),
  };

  const handleSelect = (option) => {
    const breeds = option.map((o) => o.label);
    setSelectedBreeds(breeds);
  };

  const getBreeds = async () => {
    try {
      const res = await api.fetchBreeds();
      const options = res.map((r) => ({ value: r, label: r }));
      setSelectOptions(options);
    } catch (msg) {
      console.log(msg);
    }
  };

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <Select
      isMulti
      styles={customStyles}
      options={selectOptions}
      onChange={handleSelect}
    />
  );
};

export default CustomSelect;
