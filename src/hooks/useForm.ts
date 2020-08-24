import { useState, useEffect, useRef } from 'react';

const useForm = ({ initialValues, onSubmit, onChange }: any) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [onSubmitting, setOnSubmitting] = useState<boolean>(false);
  const [onBlur, setOnBlur] = useState<boolean>(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (!formRendered.current) {
      setValues(initialValues);
      setErrors({});
      setTouched({});
      setOnSubmitting(false);
      setOnBlur(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  const setSingleValue = (name: string, value: any) => {
    setValues({ ...values, [name]: value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    onChange({ name, value, values, setValues });
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name } = target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors });
  };

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    setErrors({ ...errors });
    onSubmit({ values, errors });
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;
