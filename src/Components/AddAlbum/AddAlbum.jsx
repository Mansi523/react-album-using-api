import React from "react";
//imported the css for the AddAlbum.
import style from "./AddAlbum.module.css";
//for setting the props in the AddAlbum.
const AddAlbum = ({ setisbtn, isbtn }) => {
  return (
    <section className={style.albumsection}>
      <div className={style.addalbm}>
        <span className={style.imageHeading}>Your albums</span>
      </div>
      <div className={isbtn ? style.cancelbtn : style.addbtn}>
        <button onClick={() => setisbtn(!isbtn)}>
          {isbtn ? "Cancel" : "Add btn"}
        </button>
      </div>
    </section>
  );
};

export default AddAlbum;
