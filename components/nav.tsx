import React from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

const getTime = () => {
  return dayjs().format('YYYY/MM/DD HH:mm');
};

class Nav extends React.Component {
  timer = undefined;
  state = {
    time: getTime(),
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({time: getTime()});
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <React.Fragment>
        <div className="nav">
          <div className="nav-container nav-title">
            <img src="/static/nav/program_icon.png"/>
          </div>

          <div className="nav-container nav-user">
            <img src="/static/favicon.ico"/>
            <div className="nav-item">
              <span>一期建物BEMS</span>
            </div>
            <div className="nav-item">
              <img src="/static/nav/wallet icon.png"/>
              <span style={{font: '22px/25px Regular Roboto'}}>$ 1000.00</span>
            </div>
          </div>

          <div className="nav-container nav-link">
            <div className="nav-item">
              <img src="/static/nav/white_icon/home_icon.png"/>
              <span style={{width: '90px'}}>首頁</span>
            </div>
            <div className="nav-item">
              <img src="/static/nav/white_icon/white_b_icon.png"/>
              <span style={{width: '90px'}}>投標</span>
            </div>
            <div className="nav-item">
              <img src="/static/nav/white_icon/bs_icon.png"/>
              <span style={{width: '90px'}}>動態競標</span>
            </div>
            <div className="nav-item">
              <img src="/static/nav/white_icon/flash_icon.png"/>
              <span style={{width: '90px'}}>電力資訊</span>
            </div>
            <div className="nav-item">
              <img src="/static/nav/white_icon/setting_icon.png"/>
              <span style={{width: '90px'}}>設定</span>
            </div>
            <div className="nav-item">
              <img src="/static/nav/white_icon/logout icon.png"/>
              <span style={{width: '90px'}}>登出</span>
            </div>
          </div>
          <div className="nav-container nav-time">
            <span>{this.state.time}</span>
          </div>
        </div>
        <style jsx>{`
          .nav {
            width: 262px;
            height: 100vh;
            background-color: #39625E;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          }
          .nav-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .nav-item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: inherit;
            padding: 0.5rem 0 0.5rem 0;
          }

          .nav-user {
            flex-direction: column;
          }
          .nav-user > img {
            width: 200px;
            height: 200px;
            background-color: grey;
            border-radius: 50%;
          }

          .nav-link {
            flex-direction: column;
          }

          .nav-time > span {
            padding: 3rem 0 1rem 0;
          }

          span {
            font: 20px/24px Regular Roboto;
            letter-spacing: 0;
            color: #ffffff;
            opacity: 1;
          }
          img {
            margin: 10px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Nav;
