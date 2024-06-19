import React, { useState } from "react";
import CardForTable from "./CardForTable/CardForTable";
import useFetchDataFilter from "../../../hooks/useFetchDataFilter";
import Pagination from "../../../components/UI KIT/Pagination/Pagination";
import "./tableWithFilms.scss";
import { useNavigate } from "react-router-dom";
const TableWithFilms: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isFetching } = useFetchDataFilter(currentPage);
  const totalPages = 10;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="tableWithFilms">
      <div className="tableWithFilms-container">
        {!isFetching ? (
          <>
            {data?.docs.map((film: any, index: number) => (
              <div className="item" key={film.id}>
                <CardForTable
                  data={film}
                  index={index + 1}
                  isFetching={isFetching}
                />
              </div>
            ))}
          </>
        ) : (
          <>
            {[...Array(10)].map((film: any, index: number) => (
              <div className="item" key={index}>
                <CardForTable
                  isFetching={isFetching}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TableWithFilms;
