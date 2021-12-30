import React from "react";
import { data } from "../data/data";
import "./Content.css";

export default function Content() {
  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        <div className="col-md-12 pt-3">
          <div className="blog-comment">
            {data.map((data) =>  
			data.comments.map((data, i) => (
                <ul key={i} className="comments">
                  <li className="clearfix" >
                    <div className="post-comments">
                      <p className="meta">
                       {data.createdAt} <a href="#">{data.username}</a> says :{" "}
                        <i className="pull-right">
                          <a href="#">
                            <small>Reply</small>
                          </a>
                        </i>
                      </p>
                      <p>
                        {data.content}
                      </p>
                    </div>
                  </li>
                </ul>
			))
			)}
          </div>
        </div>
      </div>
    </div>
  );
}
