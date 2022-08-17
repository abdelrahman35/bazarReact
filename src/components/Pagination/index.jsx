import React, { Fragment } from "react";
import Pagination from "../../../node_modules/react-bootstrap/Pagination";
import "./pag.css";
export default function MyPagination(props) {
  const [pageArray, setPageArray] = React.useState([]);

  React.useEffect(() => {
    var totPages = parseInt(props.totPages);
    var currentPage = parseInt(props.currentPage);
    var pageArr = [];
    if (totPages > 1) {
      if (totPages <= 9) {
        var i = 1;
        while (i <= totPages) {
          pageArr.push(i);
          i++;
        }
      } else {
        if (currentPage <= 5) pageArr = [1, 2, 3, 4, 5, "", totPages];
        else if (totPages - currentPage <= 4)
          pageArr = [
            1,
            "",
            totPages - 5,
            totPages - 4,
            totPages - 3,
            totPages - 2,
            totPages - 1,
            totPages,
          ];
        else
          pageArr = [
            1,
            "",
            currentPage - 3,
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
            currentPage + 3,
            "",
            totPages,
          ];
      }
    }
    setPageArray(pageArr);
  }, []);

  return (
    <Fragment>
      {props.children}
      <div style={{ marginTop: "15px" }}>
        <Pagination style={{ justifyContent: "center" }}>
          {pageArray.map((ele, ind) => {
            const toReturn = [];

            if (ind === 0) {
              toReturn.push(
                <Pagination.First
                  key={"firstpage"}
                  disabled={props.currentPage === props.totPages ? true : false}
                  onClick={
                    props.currentPage === 1
                      ? () => {}
                      : () => {
                          props.pageClicked(1);
                        }
                  }
                />,
              );

              toReturn.push(
                <Pagination.Prev
                  key={"prevpage"}
                  disabled={props.currentPage === props.totPages ? true : false}
                  onClick={() => {
                    if (props.currentPage > 1) {
                      props.pageClicked(props.currentPage - 1);
                    }
                  }}
                />,
              );
            }

            if (ele === "") toReturn.push(<Pagination.Ellipsis key={ind} />);
            else
              toReturn.push(
                <Pagination.Item
                  key={ind}
                  active={props.currentPage === ele ? true : false}
                  onClick={
                    props.currentPage === ele
                      ? () => {}
                      : () => {
                          props.pageClicked(ele);
                        }
                  }
                >
                  {ele}
                </Pagination.Item>,
              );

            if (ind === pageArray.length - 1) {
              toReturn.push(
                <Pagination.Next
                  disabled={props.currentPage === props.totPages ? true : false}
                  key={"nextpage"}
                  onClick={
                    props.currentPage === ele
                      ? () => {}
                      : () => {
                          props.pageClicked(props.currentPage + 1);
                        }
                  }
                />,
              );

              toReturn.push(
                <Pagination.Last
                  key={"lastpage"}
                  disabled={props.currentPage === props.totPages ? true : false}
                  onClick={
                    props.currentPage === ele
                      ? () => {}
                      : () => {
                          props.pageClicked(ele);
                        }
                  }
                />,
              );
            }

            return toReturn;
          })}
        </Pagination>
      </div>
    </Fragment>
  );
}
