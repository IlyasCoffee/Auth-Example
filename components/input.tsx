interface InputProps {
  name: string;
  placeholder: string;
  type: 'email' | 'password' | 'text';
  fullWidth?: boolean;
  isRequired?: boolean;
}

export default function Input({ name, placeholder, type, fullWidth, isRequired }: InputProps) {
  return (
    <input name={name} placeholder={placeholder} type={type} className={`bg-transparent placeholder-text/40 border-opacity-20 border-2 rounded-2xl ${fullWidth && "w-full"} px-5 py-3`} required={isRequired}/>
  );
}
