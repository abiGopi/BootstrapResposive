import React from "react";
import groupImage from "./Mask Group 1.png";
import Image3 from "./Image 3.png";
import Image4 from "./Image 4.png";
import Ellipse24 from "./Ellipse 24.png";
import Ellipse25 from "./Ellipse 25.png";
import Ellipse26 from "./Ellipse 26.png";
export default function Blog() {
  const dummy_data = [
    {
      blogImage: groupImage,
      blogText: "Tips for a good Pitching Presentation",
      blogHelperText:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      image: Ellipse24,
      name: "John Doe",
      position: "Head of Marketing",
    },
    {
      blogImage: Image3,
      blogText: "Improve Your Content’s Traffic",
      blogHelperText:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      image: Ellipse25,
      name: "Jane Maria",
      position: "Designer",
    },
    {
      blogImage: Image4,
      blogText: "Reaching Deal with your Clients",
      blogHelperText:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      image: Ellipse26,
      name: "Jack Dorsey",
      position: "Marketing Specialist",
    },
  ];
  return (
    <div className="blog-container">
      <div className="d-flex align-items-center pt-5">
        {" "}
        <hr className="horizontalline" />{" "}
        <div className="blogheader px-2">BLOG</div>
      </div>

      <div className="tip-txt pt-3">Explore Marketing Tips</div>
      <div className="blogcontent pt-5">
        {dummy_data.map((blogItem) => {
          return (
            <div className="position-relative">
                 <div className="blog-inner-image d-flex pt-2 px-2">
                <div className="">
                  <img src={blogItem.image} alt={""} />
                </div>
                <div className="px-2">
                  <div className="profile-text"> {blogItem.name}</div>
                  <div className="profile-helper-text">{blogItem.position}</div>
                </div>
              </div>
              <img className="blogimage" src={blogItem.blogImage} alt={""} />
           
              <div>
                <div className="blog-txt">{blogItem.blogText}</div>
              </div>
              <div className="blog-subtxt">{blogItem.blogHelperText}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
