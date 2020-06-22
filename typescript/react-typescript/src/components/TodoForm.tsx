import React, { /* useState,  */useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
};

export const TodoForm: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };

  // const handleKeyPress = (event: React.KeyboardEvent) => {
  //   if (event.key === 'Enter') {
  //     console.log(title);
  //     setTitle('');
  //   }
  // };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        ref={ref}
        // value={title}
        placeholder="Enter to-do name"
        // onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="title" className="active">Enter to-do name</label>
    </div>
  );
};