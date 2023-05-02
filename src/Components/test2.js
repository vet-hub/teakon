import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function PaginateTeas({ teasPerPage }) {
  // const myAPI =
  //   "https://gist.githubusercontent.com/ReaganS94/533436d2e8272d39af2626c2c6adee1a/raw/4a09375a147cc69e64f70b4c1dee91051d558803/DEcities.json";


  const [db, setDb] = useState([
    {
      id: 1,
      name: "Darjeeling",
      teeart: "Schwarzer Tee",
      anbaugebiet: "Nordindien",
      aromen: ["vollmundig", "süßlich"],
      benefits: [""],
      coffein: true
    },
    {
      id: 2,
      name: "Macha",
      teeart: "Grüner Tee",
      anbaugebiet: "Japan",
      aromen: ["süßlich"],
      benefits: ["kann Cholesterienspiegel senken"],
      coffein: true
    },
    {
      id: 3,
      name: "Schwarzer Japaner",
      teeart: "Schwarzer Tee",
      anbaugebiet: "Japan",
      aromen: ["vollmundig"],
      benefits: ["Immunsystem stärken"],
      coffein: true
    }
    
  ]);

  const [teas, setTeas] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endOffset = itemOffset + teasPerPage;
    fetch(db)
      .then((response) => response)
      .then((teeart) => {
        setTeas(teeart.slice(itemOffset, endOffset));
        setTotalPages(Math.ceil(teeart.length / teasPerPage));
        setLoading(false);
        console.log(teeart);
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
        teas.map((teeart) => (
          <div key={teeart.lat}>
            <h3>{teeart.city}</h3>
            <p>Population: {teeart.population}</p>
            <p>Region: {teeart.admin_name}</p>
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
