import { useState } from 'react';

export const useFormState = <T extends Record<string, any>>(initialState: T) => {
  const [form, setForm] = useState<T>(initialState);

  const updateField = (field: keyof T, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => setForm(initialState);

  return { form, setForm, updateField, resetForm };
};
