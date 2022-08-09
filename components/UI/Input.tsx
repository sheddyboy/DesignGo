import Image from "next/image";
import React, { InputHTMLAttributes, useRef, useState } from "react";
import styles from "../../styles/Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // validation?: boolean;
}

const Input = ({ ...attributes }: InputProps) => {
  const [validation, setValidation] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const valHandler = () => {
    inputRef.current?.value === "" && setValidation(true);
  };
  return (
    <div className={styles.inputWrapper}>
      <input
        ref={inputRef}
        onBlur={valHandler}
        onFocus={() => {
          setValidation(false);
        }}
        className={styles.input}
        {...attributes}
      />
      {validation && (
        <div className={styles.error}>
          Can&apos;t be empty
          <i className={styles.errorIcon}>
            <Image
              alt=""
              src={"/icon-error.svg"}
              width={20}
              height={20}
            ></Image>
          </i>
        </div>
      )}
    </div>
  );
};

export default Input;
