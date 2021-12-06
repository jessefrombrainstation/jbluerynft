import React, { Component } from "react";
import Eths from "../../assets/images/eth.png";
import "../Eth/Eth.scss";

const axios = require("axios");

class Eth extends Component {
  async componentWillMount() {
    await this.getData();
  }
  getData = () => {
    axios({
      method: "GET",
      url: "https://coinpaprika1.p.rapidapi.com/tickers",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
        "x-rapidapi-key": "33c837417fmshe7d83ed6ba3bc38p1f39d1jsn4ad1232f41b0",
        useQueryString: true,
      },
    })
      .then((response) => {
        const coins = response.data;
        const ccArray = [{ name: "Ethereum", img: Eths }];
        for (let j = 0; j < ccArray.length; j++) {
          for (let i = 0; i < coins.length; i++) {
            if (coins[i].name === ccArray[j].name) {
              coins[i]["img"] = ccArray[j].img;
              this.setState({
                ccData: [...this.state.ccData, coins[i]],
              });
            }
          }
        }
        this.setState({
          ccData: this.state.ccData.sort((a, b) => a.rank - b.rank),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios({
      method: "GET",
      url: "https://coinpaprika1.p.rapidapi.com/global",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
        "x-rapidapi-key": "33c837417fmshe7d83ed6ba3bc38p1f39d1jsn4ad1232f41b0",
        useQueryString: true,
      },
    })
      .then((response) => {
        const globalData = response.data;
        this.setState({ loading: true });
        this.setState({ ccGlobalMcap: globalData.market_cap_usd });
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      ccData: [],
      ccGlobalMcap: "",
      loading: true,
    };
  }

  render() {
    return (
      <div className="eth-status-bar">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow text-monospace text-white">
          {this.state.loading ? (
            <div
              id="loader"
              className="nav-item text-nowrap d-none d-sm-none d-sm-block"
            >
              Crypto arriving...
            </div>
          ) : (
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small>CRYPTO MARKET:</small>&nbsp;$
              {this.state.ccGlobalMcap.toLocaleString("fr-CH")}
              &nbsp;
            </li>
          )}
        </nav>
        &nbsp;
        <div className="container-fluid mt-5 w-50 p-3">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <table className="table table-striped table-hover table-fixed table-bordered text-monospace">
                <tbody>
                  {this.state.ccData.map((data, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <img
                            src={data.img}
                            width="25"
                            height="25"
                            className="d-inline-block align-top"
                            alt=""
                          />
                        </td>
                        <td>{data.name}</td>
                        <td>${data.quotes.USD.price.toFixed(2)}</td>
                        <td>
                          OF $
                          {data.quotes.USD.market_cap.toLocaleString("fr-CH")}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Eth;
