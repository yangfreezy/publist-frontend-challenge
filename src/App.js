import React, { Component } from "react";
import {
  AppContainer,
  Rendering,
  DataList,
  Logo,
  PublistTitle,
  PublistSecondary
} from "./components/index";
import myLogo from "./statics/logo-dark.svg";

const myToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDEsIm5hbWUiOiJZYW5nIFl1IiwiZW1haWwiOiJ5dWV5YW5neXU0MkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZW1haWxfdmVyaWZpY2F0aW9uX2NvZGUiOiI5Nzk0NTYiLCJwYXNzd29yZCI6IiQyYSQxMCRXakJkRVRwYTRSNEtsTXFNMjR4MndlLzA5MjZzN2Q4SzRFT213bGU5TVl6c2R0MUlHdWkvLiIsInBlcm1pc3Npb25zIjpudWxsLCJ0aW1lem9uZSI6IkFtZXJpY2EvTG9zX0FuZ2VsZXMiLCJpcF9hZGRyZXNzIjoiNzMuMjIzLjE0Mi44NS8zMiIsIm9wdGlvbnMiOnt9LCJtZXRhZGF0YSI6e30sImxhc3RfbG9naW4iOiIyMDE4LTA3LTE5VDE5OjIyOjI4LjU3NFoiLCJsYXN0X2FjdGl2ZSI6IjIwMTgtMDctMTlUMTk6MjI6MjguNTc0WiIsInVwZGF0ZWQiOiIyMDE4LTA3LTE5VDE5OjIyOjI4LjU3NFoiLCJjcmVhdGVkIjoiMjAxOC0wNy0xOVQxOToyMjoyOC41NzRaIiwiaWF0IjoxNTMyMDI4MTUwLCJleHAiOjE1MzMyMzc3NTB9.y7uvXvEJ9URgw0driNzp4d6au7s3g-m06asO-tmOSms";
const data = { query: "tech" };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    if (!this.state.isLoaded) {
      fetch("https://publist.ai/api/v2/jobs.frontend", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${myToken}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(response =>
          this.setState({ data: response.data, isLoaded: true })
        )
        .catch(err => console.log(err));
    }
  }

  render() {
    return this.state.isLoaded ? (
      <AppContainer>
        <PublistTitle>Publist</PublistTitle>
        <PublistSecondary> Top 50</PublistSecondary>
        <Logo src={myLogo} />
        <DataList data={this.state.data} />
      </AppContainer>
    ) : (
      <Rendering> Rendering... </Rendering>
    );
  }
}

export default App;
