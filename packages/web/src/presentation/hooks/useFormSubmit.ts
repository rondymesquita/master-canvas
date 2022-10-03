import { useRef } from 'react';
export default function useFormSubmit({ onFormData }: any): any {
  const ref = useRef<HTMLFormElement>(null);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const formaData = new FormData(e.target);

    const data: Record<string, any> = {};
    for (let [key, value] of formaData.entries()) {
      // console.log(key, value);
      data[key] = value;
    }

    onFormData(data);
  };

  const submit = () => {
    ref.current?.dispatchEvent(new Event('submit', { bubbles: true }));
  };

  return { ref, submit, onSubmit };
}
