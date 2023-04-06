import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hook";
import { setTimeout } from "timers/promises";
import { getAllNote, addNote, deleteNote } from "../features/noteSlice";
import CreateArea from "../components/CreateArea";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Note from "../components/Note";

const Home = () => {
  const dispatch = useAppDispatch();
  const noteDatas = useAppSelector((state) => state.notes);
  const { notes } = noteDatas.value;
  console.log(notes);

  function onAddNote(newNoteData: { title: string; content: string }) {
    dispatch(addNote(newNoteData));
  }
  function onDeleteNote(id: string) {
    dispatch(deleteNote(id));
  }

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) dispatch(getAllNote(token));
  }, []);

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAddNote} />
      {notes.map((noteItem: any, index) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={onDeleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default Home;
