import React from "react";
import { useTheme } from "../contexts/ThemeSelection";
import { Col, Row } from "react-bootstrap";

const ThemedInput = ({
  id,
  type,
  placeholder = "Type here...",
  value,
  onChange,
  border,
  label,
  options = [],
}) => {
  const { theme, activeTheme } = useTheme();
  const inputId = id || `themed-input-${Math.random()}`;

  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: theme[activeTheme].panelColor,
    color: theme[activeTheme].color,
    borderRadius: "4px",
    outline: "none",
    fontSize: "16px",
    textDecoration: "none",
    border: border ? "1px solid" : "none",
    borderColor: theme[activeTheme].color,
    boxShadow: "none",
  };

  const fileStyle = {
    display: "inline-block",
    padding: "10px 16px",
    backgroundColor: theme[activeTheme].panelColor,
    color: theme[activeTheme].color,
    borderRadius: "4px",
    border: border ? `1px solid ${theme[activeTheme].color}` : "none",
    cursor: "pointer",
    fontSize: "16px",
    textAlign: "center",
    transition: "background 0.3s",
  };

  const renderInput = () => {
    if (type === "select") {
      return (
        <select
          id={inputId}
          value={value}
          onChange={handleChange}
          style={inputStyle}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (type === "file") {
      return (
        <>
          <input
            id={inputId}
            type="file"
            onChange={handleChange}
            style={{
              display: "none", // hide default input
            }}
          />
          <label htmlFor={inputId} style={fileStyle}>
            {value}
          </label>
        </>
      );
    }

    return (
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={inputStyle}
      />
    );
  };

  return (
    <Row>
      {label && (
        <Col>
          <label
            htmlFor={inputId}
            style={{
              display: "block",
              marginBottom: "5px",
              color: theme[activeTheme].color,
              fontWeight: "bold",
            }}
          >
            {label}
          </label>
        </Col>
      )}
      <Col>{renderInput()}</Col>
    </Row>
  );
};

export default ThemedInput;
