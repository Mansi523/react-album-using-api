import React from "react";
//imported css for the Form.
import style from "./Form.module.css";
// import useEffect from react.
import { useEffect } from "react";
// imported props for the form.js.
const Form = ({
  name,
  setname,
  handleCreate,
  handleClear,
  update,
  updateAlbum,
}) => {
  //useEffect for the update section.
  useEffect(() => {
    if (update) {
      setname(update.title);
    }
  }, [update]);

  return (
    <div className={style.box}>
      <div className={style.top}>
        <span>Create an Album</span>
      </div>
      <div className={style.bottom}>
        <div className={style.left}>
          <input
            type="text"
            placeholder="Album Name"
            value={name}
            required
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className={style.right}>
          <button className={style.clearbtn} onClick={handleClear}>
            Clear
          </button>
          <button
            className={style.createbtn}
            onClick={update ? updateAlbum : handleCreate}
          >
            {update ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
