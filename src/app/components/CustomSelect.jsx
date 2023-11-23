import React, { useEffect, useState } from "react";
import Select from "react-select";
import api from "../utils/api";

const CustomSelect = ({ setSelectedBreeds }) => {
  const [selectOptions, setSelectOptions] = useState([]);

  const customStyles = {
    control: (base) => ({
      ...base,
      padding: [8, 6],
      fontSize: 16,
      outline: "none",
      background: "#FEA901",
      height: "100%",
      minWidth: "250px",
      borderWidth: "2px",
      borderColor: "rgb(228 228 231)",
      borderStyle: "solid",
      borderRadius: "20px",
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "rgb(233 213 255 / 1)" : "white",
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
