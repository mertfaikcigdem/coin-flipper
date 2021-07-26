import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      count: 0,
      number: 0,
      yazi: 0,
      tura: 0,
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    this.setState({ count: this.state.count + 1 });
    this.setState({ number: Math.floor(Math.random() * 2) });
    console.log(this.state.number);
    {
      this.state.number == 0
        ? this.setState({ tura: this.state.tura + 1 })
        : this.setState({ yazi: this.state.yazi + 1 });
    }
    {
      this.state.number == 0
        ? this.setState({ side: "tura" })
        : this.setState({ side: "yazi" });
    }
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin
          side={this.state.side}
          flipping={this.state.flipping}
          number={this.state.number}
        />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.count} </strong>
          atıştan
          <strong> {this.state.tura} </strong> tura
          <strong> {this.state.yazi} </strong>
          yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
