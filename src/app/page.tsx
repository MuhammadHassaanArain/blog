"use client";
import { useState } from "react";

function Home() {
  const [comment, setComment] = useState("");
  const [newcomment, setNewcomment] = useState<string[]>([]);
  let handlechange = (event: any) => {
    event.preventDefault();
    if (comment.trim()) {
      setNewcomment([...newcomment, comment]);
      setComment("");
    }
  };
  return (
    <div className="bg-orange-400 flex justify-center p-3">
      <div className="bg-orange-300 w-4/5  sm:w-2/4 p-8 rounded-md">
        <h1 className="text-2xl py-4">Home Page</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          mollitia, quia repellendus ut excepturi quae deserunt aperiam debitis
          minima a necessitatibus aut, provident harum? Eveniet quo corrupti
          cupiditate eligendi rerum?
        </p>
        {/*  */}
        <div className="bg-orange-500 rounded-md p-5 my-10">
          <div>
            <h1 className="py-3">Comment Section</h1>
            <div>
              <div>
                <form onSubmit={handlechange}>
                  <input
                    className="p-2 rounded-lg w-11/12
              "
                    onSubmit={handlechange}
                    value={comment}
                    type="text"
                    placeholder="comment here!"
                    onChange={(event) => {
                      setComment(event.target.value);
                    }}
                  />
                </form>
              </div>
              <div className="px-5">
                <button
                  type="submit"
                  onClick={handlechange}
                  className="bg-orange-600 p-2 rounded-3xl px-4 my-4"
                >
                  Post
                </button>
              </div>
            </div>
            <div>
              {newcomment.map((item: any, index: number) => {
                return <li key={index}>{item}</li>;
              })}
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
export default Home;
