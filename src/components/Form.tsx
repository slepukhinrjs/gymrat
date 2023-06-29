import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  data: {
    categories: string[];
    difficulties: string[];
    forces: string[];
    muscles: string[];
  };
};

type Exercise = {
  category: string;
  difficulty: string;
  muscles: string;
};

export default function Form({ data }: Props) {
  const [exercise, setExercise] = useState<Exercise>({
    category: '',
    difficulty: '',
    muscles: '',
  });

  const { register, handleSubmit } = useForm<Exercise>();

  function onSubmit(formData: Exercise) {
    setExercise(formData);
  }

  console.log(data);

  const fieldStyle = 'flex flex-col gap-2 text-lg';

  return (
    <aside className="p-8 min-w-md flex flex-col items-center justify-center bg-slate-100">
      <h2 className="text-lg">What do you want to train today?</h2>
      <form className="w-4/5 mx-auto flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="category">Category:</label>
          <select id="category" {...register('category')}>
            <option value=""></option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="difficulty">Difficulty:</label>
          <select id="difficulty" {...register('difficulty')}>
            <option value=""></option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="muscles">Muscles:</label>
          <select id="muscles" {...register('muscles')}>
            <option value=""></option>
          </select>
        </div>
        <button className="inline-block px-4 py-2 rounded-lg border-2 bg-teal-500 hover:bg-teal-700 text-slate-100 self-center">
          Submit
        </button>
      </form>
    </aside>
  );
}
