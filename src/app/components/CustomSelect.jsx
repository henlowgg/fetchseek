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
      outline: "black",
      background: "white",
      height: "100%",
      minWidth: "250px",
      borderWidth: "2px",
      border: 0,
      boxShadow: "2px 7px 14px 0px rgba(0,0,0,0.63)",
      webkitBoxShadow: "2px 7px 14px 0px rgba(0,0,0,0.63)",
      mozBoxShadow: "2px 7px 14px 0px rgba(0,0,0,0.63)",
      borderColor: "rgb(228 228 231)",
      borderStyle: "none",
      borderRadius: "20px",
      
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "rgb(233 213 255 / 1)" : "white",
      borderRadius: "2px",
      boxBorderRadius: "20px",
      

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
