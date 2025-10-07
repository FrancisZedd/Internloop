import React from "react";
import "./widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>Loop News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Big Tech has to start training students on the job.",
        "Top news - 324 readers"
      )}

      {newsArticle(
        "All students in universities will soon have financial literacy as a course",
        "Finance - 254 readers"
      )}

      {newsArticle("Price of Bitcoin expected to rise", "Crypto - 333 readers")}

      {newsArticle(
        "More Online jobs are available everyday",
        "Tech - 987 readers"
      )}

      {newsArticle(
        "Students complain about not learning anything in the universities",
        "Education - 384 readers"
      )}
    </div>
  );
}

export default Widgets;
