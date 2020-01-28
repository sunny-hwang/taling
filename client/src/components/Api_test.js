import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios');

class App extends Component {
  state = {
    response: '',
  };
  
//페이지 로드시 실행 GET TEST (render에서 html태그부분 화면에 뿌려준 후 자동으로 실행됨)
componentDidMount() {
  this.callApi()
    .then(res => this.setState({ response: res.express }))
    .catch(err => console.log(err));
}

callApi = async () => {
  try {
    const response = await fetch('/users');
    const body = await response.json();
    alert(body.message)
    if (response.status !== 200) throw Error(body.message);
    return body;
  } catch (error) {
    alert(error)
  }
};

// post 호출하기 버튼 클릭시 node api post 호출
submitClick = async e => {
  axios.post('/users', {
  })
  .then( response => {
      alert(response.data.message)
  })  

}

//얘를 먼저 화면에 뿌려준다.
render() {
    return (
        <div>
          <Button color="primary" size="lg" className="s_bt" type="submit" onClick={this.submitClick}>post 호출</Button>
          <Button color="primary">primary</Button>{' '}
          <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
        </div>
    );
  }
}

export default App;
