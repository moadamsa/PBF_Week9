import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../../component/BlogPost/Post";
import "./BlogPost.css";
import API from "../../services/index";

class BlogPost extends Component {
  // eslint-disable-next-line no-undef
  state = {
    listArtikel: [],
    insertArtikel: {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    },
  };

  // eslint-disable-next-line no-undef
  ambilDataDariServerAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        listArtikel: result,
      });
    });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  // eslint-disable-next-line no-undef
  handleHapusArtikel = (data) => {
    API.deleteNewsBlog(data).then((response) => {
      this.ambilDataDariServerAPI();
    });
  };

  // eslint-disable-next-line no-undef
  handleTambahArtikel = (event) => {
    let formInsertArtikel = { ...this.state.insertArtikel };
    let timeStamp = new Date().getTime();
    formInsertArtikel["id"] = timeStamp;
    formInsertArtikel[event.target.name] = event.target.value;
    this.setState({
      insertArtikel: formInsertArtikel,
    });
  };

  // eslint-disable-next-line no-undef
  handleTombolSimpan = () => {
    // fungsi untuk meng-handle tombol simpan
    API.postNewsBlog(this.state.insertArtikel).then((response) => {
      this.ambilDataDariServerAPI();
    });
  };

  render() {
    return (
      <div className="post-artikel">
        <div className="form pb-2 border-bottom">
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              title
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                onChange={this.handleTambahArtikel}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="body" className="col-sm-2 col-form-label">
              body
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="body"
                id="body"
                onChange={this.handleTambahArtikel}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="status" className="col-sm-2 col-form-label">
              status
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="status"
                id="status"
                onChange={this.handleTambahArtikel}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="angkatan" className="col-sm-2 col-form-label">
              angkatan
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="angkatan"
                id="angkatan"
                onChange={this.handleTambahArtikel}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="alamat" className="col-sm-2 col-form-label">
              alamat
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="alamat"
                name="alamat"
                cols="30"
                rows="3"
                onChange={this.handleTambahArtikel}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
        <h2>Daftar Artikel</h2>
        {this.state.listArtikel.map((artikel) => {
          return (
            <Post
              key={artikel.id}
              judul={artikel.title}
              isi={artikel.body}
              idArtikel={artikel.id}
              hapusArtikel={this.handleHapusArtikel}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogPost;
