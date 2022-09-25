import { useRef } from 'react';
export default function useFormSubmit({ onFormData }: any): any {
  const ref = useRef<HTMLFormElement>(null);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log('valeu aqui', ref.current);
    const data = new FormData(e.target);

    for (var [key, value] of data.entries()) {
      console.log(key, value);
    }

    onFormData(data);
  };

  const submit = () => {
    console.log('called', ref.current?.dispatchEvent);
    ref.current?.dispatchEvent(new Event('submit', { bubbles: true }));
  };

  return { ref, submit, onSubmit };
}
