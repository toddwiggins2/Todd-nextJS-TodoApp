import React from "react";

const TodoNotes = ({ notes, setNotes }: { notes: any; setNotes: any }) => {
  return (
    <div className="flex flex-col py-2">
      <textarea
        className="mx-2 p-1 dark:placeholder:text-slate-800 dark:bg-teal-200 dark:text-slate-800"
        name="notes"
        id="notes"
        placeholder="Notes:"
        rows={10}
        value={notes}
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setNotes(e.target.value)
        }
      />
    </div>
  );
};

export default TodoNotes;