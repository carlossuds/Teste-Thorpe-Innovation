import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { MyInput } from './styles';

export default function Input({ name, children, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return <MyInput ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
