import axios from "axios";
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  // Elementos controlados
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const postNews = async (e) => {
    e.preventDefault();

    const saveNews = {
      id: id,
      image: image,
      title: title,
      date: date,
      author: author,
      description: description,
    };
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(saveNews);

    let reqOptions = {
      url: "http://localhost:8000/news/",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    console.log(response.data);
  };

  return (
    <div>
      <article className="text">
        <h2>my news creator</h2>
        <p>Aquí puedes crear una noticia y verla en vivo</p>
      </article>


      <form onSubmit={postNews} className="form">
      <input
        onChange={(e) => setId(e.target.value)} //captura el valor ingresado
        type="text" required
        placeholder="Ingrese Id"
      />

      <input
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="Ingrese url imagen noticia"
      />

      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Ingrese titulo noticia"
      />

      <input onChange={(e) => setDate(e.target.value)} type="date" />

      <input
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        placeholder="Ingrese autor noticia"
      />

      <textarea
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Ingrese descripción noticia"
      />

      <input type="submit" value="Enviar" className="send"/>

      </form>
    </div>
  );
};

export default Form;
