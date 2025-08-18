"use client";
import Book from "./components/Book";

export default function Page() {
  const books = [
    {
      id: 1,
      title: "Book 1",
      thumbnail: "/thumbnails/claudio-schwarz-3cWxxW2ggKE-unsplash.jpg",
      description: "Book 1です。こんにちは！",
      price: 2980,
    },
    {
      id: 2,
      title: "Book 2",
      thumbnail: "/thumbnails/clay-banks-vEn9-Er8td4-unsplash.jpg",
      description: "Book 2だよ！こんばんは！",
      price: 1980,
    },
    {
      id: 3,
      title: "Book 3",
      thumbnail: "/thumbnails/jairo-gonzalez-WU1gzf_08UU-unsplash.jpg",
      description: "Book 3だよ！Hello！",
      price: 4980,
    },
  ];

  return (
    <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
      <h2 className="text-center w-full font-bold text-3xl mb-2">
        Book Commerce
      </h2>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </main>
  );
}
