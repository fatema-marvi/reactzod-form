"use client";
import Form from "./components/Form";

function Home() {
  return (
    <main className="bg-cyan-100 font-bold text-black flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Form</h1>
      <Form/>
    </main>
  );
}

export default Home;
