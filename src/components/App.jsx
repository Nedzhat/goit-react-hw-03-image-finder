import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from "services/api";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
        searchQuery: '',
        arrImg: [],
        page: 1,
        status: Status.IDLE,
        error: null,
    }

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (prevState.searchQuery !== this.state.searchQuery) {
        this.setState({
          status: Status.PENDING,
        })
        const data = await fetchImages(this.state.searchQuery, this.state.page);
        this.setState({
          arrImg: data.hits,
          status: Status.RESOLVED,
        })
      }
    } catch (error) {
      console.log(error);
      this.setState({ status: 'rejected' });
    }
    }
  
  handleSubmitForm = searchQuery => {
    this.setState({ searchQuery });
  }

  render() {
    const { arrImg, status } = this.state;
     
  return (<div>
    <Searchbar onSubmit={this.handleSubmitForm} />
    {arrImg.length > 0 && <ImageGallery items={arrImg} />}
    {status === Status.RESOLVED && <Button text="Load More" />}
    {status === Status.PENDING && <Loader/>} 
    <ToastContainer />
  </div>);
  }
};
