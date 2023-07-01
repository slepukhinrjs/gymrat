import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  isFetched: boolean;
  attributes: {
    categories: string[];
    difficulties: string[];
    forces: string[];
    muscles: string[];
  };
};

type FormOptions = {
  categories: string[];
  difficulties: string[];
  forces: string[];
  muscles: string[];
};

type Exercise = {
  category: string;
  difficulty: string;
  muscles: string;
};

export default function Form({ isFetched, attributes }: Props) {
  const [exercise, setExercise] = useState<Exercise>({
    category: '',
    difficulty: '',
    muscles: '',
  });

  const { register, handleSubmit } = useForm<Exercise>();

  function onSubmit(formData: Exercise) {
    setExercise(formData);
  }

  const fieldStyle = 'flex flex-col gap-2 text-lg';

  return (
    <aside className="p-8 min-w-md flex flex-col items-center justify-center bg-slate-100">
      <h2 className="text-lg">What do you want to train today?</h2>
      <form className="w-4/5 mx-auto flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="category">Category:</label>
          <select id="category" {...register('category')}>
            <option value=""></option>
            {isFetched ? attributes.categories.map((c) => <option key={c}>{c}</option>) : null}
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="difficulty">Difficulty:</label>
          <select id="difficulty" {...register('difficulty')}>
            <option value=""></option>
            {isFetched ? attributes.difficulties.map((d) => <option key={d}>{d}</option>) : null}
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="muscles">Muscles:</label>
          <select id="muscles" {...register('muscles')}>
            <option value=""></option>
            {isFetched ? attributes.muscles.map((m) => <option key={m}>{m}</option>) : null}
          </select>
        </div>
        <button className="inline-block px-4 py-2 rounded-lg border-2 bg-teal-500 hover:bg-teal-700 text-slate-100 self-center">
          Submit
        </button>
      </form>
    </aside>
  );
}
