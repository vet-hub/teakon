import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function PaginateCities({ citiesPerPage }) {
  const myAPI =
    "https://gist.githubusercontent.com/ReaganS94/533436d2e8272d39af2626c2c6adee1a/raw/4a09375a147cc69e64f70b4c1dee91051d558803/DEcities.json";
  const [cities, setCities] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endOffset = itemOffset + citiesPerPage;
    fetch(myAPI)
      .then((response) => response.json())
      .then((data) => {
        setCities(data.slice(itemOffset, endOffset));
        setTotalPages(Math.ceil(data.length / citiesPerPage));
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [itemOffset, citiesPerPage]);

  const handleChange = (page) => {
    const newOffset = page.selected * citiesPerPage;
    console.log(
      `User requested page number ${
        page.selected + 1
      }, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="container">
      {loading ? <h3>Loading...</h3> : null}
      {error ? <h3>Error: {error.message}</h3> : null}
      {cities &&
        cities.map((city) => (
          <div key={city.lat}>
            <h3>{city.city}</h3>
            <p>Population: {city.population}</p>
            <p>Region: {city.admin_name}</p>
          </div>
        ))}
      <ReactPaginate
        nextLabel="Next >"
        previousLabel="< Previous"
        breakLabel="..."
        onPageChange={handleChange}
        pageCount={totalPages}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        pageRangeDisplayed={5}
        marginPagesDisplayed={5}
      />
    </div>
  );
}
