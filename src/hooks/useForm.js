import { useState } from "react";

export const useForm = (initialData, schema) => {
  const [fields, setFields] = useState(initialData);
  const [errors, setErrors] = useState({});

  const form = {fields, errors};

  function setField(field, value) {
    setFields({...fields, [field]:value});
  }

  const isValidForm = () => {
    setErrors({});

    try {
      schema.validateSync(fields, {abortEarly: false });
      return true;
    } catch (error) {
      const yupErrors = {};

      error.inner.forEach((it) => {
        yupErrors[it.path] = it.message;
      });

      setErrors(yupErrors);

      return false;
    }
  };

  return { form, setField, setFields, isValidForm };
};