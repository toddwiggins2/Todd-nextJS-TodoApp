import React from "react";

const TodoNotes = ({ notes, setNotes }: { notes: any; setNotes: any }) => {
  return (
    <div className="flex flex-col py-2">
      {/* Text Area for notes for the tasks, on input to update the notes state that was passed down from pages.tsx */}
      <textarea
        className="xl:rounded text-slate-800 bg-teal-400 dark:placeholder:text-slate-800 dark:bg-teal-400 dark:text-slate-800"
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
