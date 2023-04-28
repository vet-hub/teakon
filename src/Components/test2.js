import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function PaginateTeas({ teasPerPage }) {
  // const myAPI =
  //   "https://gist.githubusercontent.com/ReaganS94/533436d2e8272d39af2626c2c6adee1a/raw/4a09375a147cc69e64f70b4c1dee91051d558803/DEcities.json";


  const db = [
    {
      "city": "Berlin",
      "lat": "52.5167",
      "lng": "13.3833",
      "country": "Germany",
      "iso2": "DE",
      "admin_name": "Berlin",
      "capital": "primary",
      "population": "3644826",
      "population_proper": "3644826"
    },
    {
      "city": "Hamburg",
      "lat": "53.5500",
      "lng": "10.0000",
      "country": "Germany",
      "iso2": "DE",
      "admin_name": "Hamburg",
      "capital": "admin",
      "population": "1841179",
      "population_proper": "1841179"
    },
    {
      "city": "Munich",
      "lat": "48.1372",
      "lng": "11.5755",
      "country": "Germany",
      "iso2": "DE",
      "admin_name": "Bavaria",
      "capital": "admin",
      "population": "1471508",
      "population_proper": "1471508"
    },
    {
      "city": "Cologne",
      "lat": "50.9422",
      "lng": "6.9578",
      "country": "Germany",
      "iso2": "DE",
      "admin_name": "North Rhine-Westphalia",
      "capital": "",
      "population": "1085664",
      "population_proper": "1085664"
    }
  ];

  const [teas, setTeas] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endOffset = itemOffset + teasPerPage;
    fetch(db)
      .then((response) => response)
      .then((tea) => {
        setTeas(tea.slice(itemOffset, endOffset));
        setTotalPages(Math.ceil(tea.length / teasPerPage));
        setLoading(false);
        console.log(tea);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [itemOffset, teasPerPage]);

  const handleChange = (page) => {
    const newOffset = page.selected * teasPerPage;
    console.log(
      `User requested page number ${page.selected + 1
      }, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="container">
      {loading ? <h3>Loading...</h3> : null}
      {error ? <h3>Error: {error.message}</h3> : null}
      {teas &&
        teas.map((tea) => (
          <div key={tea.lat}>
            <h3>{tea.city}</h3>
            <p>Population: {tea.population}</p>
            <p>Region: {tea.admin_name}</p>
          </div>
        ))}
      <ReactPaginate
        nextLabel="Nächste >"
        previousLabel="< Zurück"
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
