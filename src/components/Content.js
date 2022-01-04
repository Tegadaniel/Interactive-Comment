import React from "react";
import { data } from "../data/data";
import "./Content.css";

export default function Content() {
  const avatarStyle = {
    verticalAlign: "middle",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover"
  };
  const fontweight = {
    fontWeight: 600,
    color: "black"
  };
  const dateColor = {
    color: "#474343"
  };
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-8 mt-5">
        <div className="blog-comment">
          {data.map((data) =>
            data.comments.map((data, i) => (
              <div className="card mb-3">
                <ul key={i} className="comments">
                  <div className="card-body">
                    <li className="">
                      <div>
                        <p>
                          <img
                            src={data.user.image.png}
                            alt="Avatar"
                            style={avatarStyle}
                            className="mr-2"
                          />
                          <span style={fontweight}>{data.user.username}</span>{" "}
                          <span style={dateColor}>
                            {data.createdAt}
                          </span>
                          <i>
                            <a>
                              <small>Reply</small>
                            </a>
                          </i>
                        </p>
                        <p>{data.content}</p>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
