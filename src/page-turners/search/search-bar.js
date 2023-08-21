import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import "./search.css";


function SearchBar() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn, setIsbn] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSearchByTitle = async () => {
        try {
            // let response = await dispatch(searchThunk({ title }));
            // navigate("");
        } catch (e) {
            alert(e);
        }
    };
    const handleSearchByAuthor = async () => {
        try {
            // let response = await dispatch(searchThunk({ author }));
            // navigate("");
        } catch (e) {
            alert(e);
        }
    };
    const handleSearchByIsbn = async () => {
        try {
            // let response = await dispatch(searchThunk({ isbn }));
            // navigate("");
        } catch (e) {
            alert(e);
        }
    };
    const handleSearchByCategory = async () => {
        try {
            // let response = await dispatch(searchThunk({ category }));
            // navigate("");
        } catch (e) {
            alert(e);
        }
    };
    return (
    <div className="search-container">
        <div className="search-form">
            <h1 className="search-title">Search</h1>
            <p>Search for books by title, author, ISBN, or Category</p>
            <form>
                <div className="form-group mt2">
                    <label htmlFor="title" className="form-label">
                        Search by Title
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="title"
                        placeholder="Enter book title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <button className="btn btn-primary mt-2" onClick={handleSearchByTitle}>
                    Search
                    </button>
                </div>
                <div className="form-group mt2">
                    <label htmlFor="author" className="form-label">
                        Search by Author
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="author"
                        placeholder="Enter author name"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                    />
                    <button className="btn btn-primary mt-2" onClick={handleSearchByAuthor}>
                    Search
                    </button>
                </div>
                <div className="form-group mt2">
                    <label htmlFor="isbn" className="form-label">
                        Search by ISBN
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="isbn"
                        placeholder="Enter book ISBN"
                        value={isbn}
                        onChange={(event) => setIsbn(event.target.value)}
                    />
                    <button className="btn btn-primary mt-2" onClick={handleSearchByIsbn}>
                    Search
                    </button>
                </div>
                <div className="form-group mt2">
                    <label htmlFor="category" className="form-label">
                        Search by Category
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="category"
                        placeholder="Enter category"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    />
                    <button className="btn btn-primary mt-2" onClick={handleSearchByCategory}>
                    Search
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}
export default SearchBar;