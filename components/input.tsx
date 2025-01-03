interface InputProps {
  name: string;
  placeholder: string;
  type: 'email' | 'password' | 'text';
  variant?: 'withBorder';
  // variant?: 'withBorder' | 'withoutBorder';
  fullWidth?: boolean;
  isRequired?: boolean;
}

export default function Input({ name, placeholder, type, variant = 'withBorder', fullWidth, isRequired }: InputProps) {
  const variantClass = {
    withBorder: 'bg-transparent placeholder-text/40 border-opacity-10 border-2',
    // withoutBorder: 'bg-text/5 placeholder-text/40',
  };

  return (
    <input name={name} placeholder={placeholder} type={type} className={`${variantClass[variant]} rounded-2xl ${fullWidth && "w-full"} px-5 py-3`} required={isRequired}/>
  );
}
